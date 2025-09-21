# Video Recorder Component

A React component for recording video with live preview and optional Mux integration.

## Features

✅ **Live Video Recording** - Record video using device camera and microphone  
✅ **Live Preview** - Real-time video preview while recording  
✅ **Recording Controls** - Start/Stop recording with visual indicators  
✅ **Mux Integration** - Optional upload to Mux for professional video hosting  
✅ **Fallback Mode** - Works without Mux for basic recording functionality  

## Packages Used

- `@mux/mux-player-react` - Video playback with Mux Player
- `@mux/mux-uploader-react` - Direct uploads to Mux

## Basic Usage

### 1. Simple Recording (No Mux)

```tsx
import { VideoRecorder } from '@/components';

function MyComponent() {
  const handleRecordingComplete = (videoBlob: Blob) => {
    console.log('Recording completed!', videoBlob);
    // Do something with the video blob (save to server, etc.)
  };

  const handleError = (error: string) => {
    console.error('Recording error:', error);
  };

  return (
    <VideoRecorder
      onRecordingComplete={handleRecordingComplete}
      onError={handleError}
    />
  );
}
```

### 2. With Mux Upload

```tsx
import { VideoRecorder } from '@/components';

function MyComponent() {
  const handleRecordingComplete = (videoBlob: Blob, playbackId?: string) => {
    console.log('Recording completed!', { videoBlob, playbackId });
    
    if (playbackId) {
      // Video is uploaded to Mux and ready for playback
      console.log('Mux Playback ID:', playbackId);
    }
  };

  return (
    <VideoRecorder
      muxUploadUrl="https://your-mux-upload-url.com/upload"
      onRecordingComplete={handleRecordingComplete}
      onError={(error) => console.error(error)}
    />
  );
}
```

### 3. With Mux Player for Playback

```tsx
import { VideoRecorder } from '@/components';
import MuxPlayer from '@mux/mux-player-react';
import { useState } from 'react';

function MyComponent() {
  const [playbackId, setPlaybackId] = useState<string | null>(null);

  const handleRecordingComplete = (videoBlob: Blob, playbackId?: string) => {
    if (playbackId) {
      setPlaybackId(playbackId);
    }
  };

  return (
    <div>
      <VideoRecorder
        muxUploadUrl="https://your-mux-upload-url.com/upload"
        onRecordingComplete={handleRecordingComplete}
        onError={(error) => console.error(error)}
      />
      
      {playbackId && (
        <div className="mt-4">
          <h3>Recorded Video:</h3>
          <MuxPlayer
            playbackId={playbackId}
            controls
            style={{ width: '100%', maxWidth: '640px' }}
          />
        </div>
      )}
    </div>
  );
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `onRecordingComplete` | `(videoBlob: Blob, playbackId?: string) => void` | No | Called when recording is complete |
| `onError` | `(error: string) => void` | No | Called when an error occurs |
| `className` | `string` | No | CSS class for the component |
| `muxUploadUrl` | `string` | No | Mux direct upload URL. If not provided, only local recording is available |

## How It Works

1. **Start Recording** → User grants camera/microphone permissions → Live preview shows
2. **Recording** → Video/audio is captured using MediaRecorder API
3. **Stop Recording** → Video blob is created
4. **Upload (Optional)** → If `muxUploadUrl` is provided, video uploads to Mux
5. **Playback** → Use returned `playbackId` with `MuxPlayer` for professional video playback

## Browser Requirements

- **HTTPS** or **localhost** required for camera access
- Modern browsers with MediaRecorder support
- Camera and microphone permissions

## Getting Mux Upload URL

To use Mux integration, you need to:

1. Sign up for Mux account
2. Create a direct upload URL from your backend
3. Pass the upload URL to the component

Example backend endpoint (Node.js):
```javascript
// This would be in your backend, not needed with client-only approach
const mux = new Mux({ tokenId: 'your-token', tokenSecret: 'your-secret' });

app.post('/create-mux-upload', async (req, res) => {
  const upload = await mux.video.uploads.create({
    new_asset_settings: { playback_policy: ['public'] }
  });
  
  res.json({ uploadUrl: upload.url });
});
```

## Architecture

**Client-Only (Simplified):**
```
📱 Record Video → 💾 Create Blob → 📤 Upload to Mux → 🎬 Get Playback ID
```

No server-side Mux SDK required! Everything happens in the browser using React components.