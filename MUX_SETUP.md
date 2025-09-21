# Mux Video Recording Setup Guide

## Environment Variables Required

To use the video recording feature with Mux, you need to set up the following environment variables in your `.env.local` file:

```bash
# Mux Configuration
# Get these from your Mux dashboard at https://dashboard.mux.com/settings/api-keys
MUX_TOKEN_ID=your_mux_token_id_here
MUX_TOKEN_SECRET=your_mux_token_secret_here

# Optional: Mux webhook signing secret for webhook verification
MUX_WEBHOOK_SECRET=your_webhook_secret_here

# Optional: Your app URL for CORS configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## How to Get Mux Credentials

1. Go to [Mux Dashboard](https://dashboard.mux.com/settings/api-keys)
2. Create a new API token or use an existing one
3. Copy the Token ID and Token Secret
4. Add them to your `.env.local` file

## Features Implemented

✅ **Video Recording**: Start/stop video recording with camera and microphone
✅ **Live Preview**: Real-time video preview while recording
✅ **Mux Integration**: Automatic upload to Mux for video hosting
✅ **Progress Tracking**: Upload progress indicator
✅ **Error Handling**: Comprehensive error handling and user feedback
✅ **Browser Compatibility**: Checks for HTTPS and camera permissions
✅ **Responsive UI**: Mobile-friendly video recorder interface

## Usage

1. Navigate to `/survey/[id]` page
2. Click "Show Video Recorder" button
3. Click "Start Recording" to begin video recording
4. Click "Stop Recording" to end recording and upload to Mux
5. Video will be automatically uploaded and you'll get a playback ID

## Browser Requirements

-   HTTPS connection (or localhost for development)
-   Camera and microphone permissions
-   Modern browser with MediaRecorder API support

## Troubleshooting

-   If recording doesn't work, try the "Test Browser API" button first
-   Check browser console for detailed error messages
-   Ensure camera/microphone permissions are granted
-   Make sure you're on HTTPS or localhost
