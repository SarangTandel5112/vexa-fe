"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface VideoRecorderProps {
    onRecordingStart?: () => void;
    onRecordingStop?: (videoBlob: Blob) => void;
    onUploadComplete?: (assetId: string, playbackUrl: string) => void;
    onError?: (error: string) => void;
    showVideoPreview?: boolean;
    videoPreviewRef?: React.RefObject<HTMLVideoElement | null>;
    username?: string; // Username for backend API call
}

export function VideoRecorder({
    onRecordingStart,
    onRecordingStop,
    onUploadComplete,
    onError,
    showVideoPreview = false,
    videoPreviewRef: externalVideoRef,
    username: _username,
}: VideoRecorderProps) {
    const [isRecording, setIsRecording] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const internalVideoPreviewRef = useRef<HTMLVideoElement | null>(null);
    const videoPreviewRef = externalVideoRef || internalVideoPreviewRef;

    // Initialize video element when component mounts
    useEffect(() => {
        if (videoPreviewRef.current) {
            videoPreviewRef.current.muted = true;
            videoPreviewRef.current.playsInline = true;
            videoPreviewRef.current.autoplay = true;
            videoPreviewRef.current.controls = false;
        }
    }, [videoPreviewRef]);

    // Check for camera and microphone permissions
    const checkPermissions = useCallback(async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    frameRate: { ideal: 30 },
                },
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                },
            });

            // Stop the stream immediately after checking permissions
            stream.getTracks().forEach((track) => track.stop());
            setHasPermission(true);
            return true;
        } catch (error) {
            console.error("Permission denied:", error);
            setHasPermission(false);
            onError?.(
                "Camera and microphone permissions are required for recording"
            );
            return false;
        }
    }, [onError]);

    // Mock video upload - no Mux API integration
    const uploadVideo = useCallback(
        async (videoBlob: Blob) => {
            try {
                setIsUploading(true);

                // Simulate upload delay
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // Mock asset ID and playback URL
                const mockAssetId = `mock-asset-${Date.now()}`;
                const mockPlaybackUrl = `https://stream.mux.com/${mockAssetId}.m3u8`;

                console.log("Video recorded (mock upload):", {
                    size: videoBlob.size,
                    type: videoBlob.type,
                    assetId: mockAssetId,
                });

                // Call the callback with mock data
                onUploadComplete?.(mockAssetId, mockPlaybackUrl);
            } catch (error) {
                console.error("Error in mock video upload:", error);
                onError?.("Failed to process video. Please try again.");
            } finally {
                setIsUploading(false);
            }
        },
        [onUploadComplete, onError]
    );

    // Start recording
    const startRecording = useCallback(async () => {
        try {
            // Check permissions first
            if (hasPermission === null) {
                const hasAccess = await checkPermissions();
                if (!hasAccess) return;
            }

            // Get media stream
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: { ideal: 1280 },
                    height: { ideal: 720 },
                    frameRate: { ideal: 30 },
                },
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                },
            });

            streamRef.current = stream;
            chunksRef.current = [];

            // Set up video preview after a short delay to ensure DOM is ready
            setTimeout(() => {
                if (videoPreviewRef.current) {
                    const videoElement = videoPreviewRef.current;

                    // Set video properties
                    videoElement.muted = true;
                    videoElement.playsInline = true;
                    videoElement.autoplay = true;
                    videoElement.controls = false;

                    // Set the stream
                    videoElement.srcObject = stream;

                    // Try to play the video
                    videoElement.play().catch((error) => {
                        console.error("Error playing video preview:", error);
                    });
                }
            }, 200);

            // Create MediaRecorder
            const mediaRecorder = new MediaRecorder(stream, {
                mimeType: "video/webm;codecs=vp9,opus",
            });

            mediaRecorderRef.current = mediaRecorder;

            // Handle data available
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data);
                }
            };

            // Handle recording stop
            mediaRecorder.onstop = () => {
                const videoBlob = new Blob(chunksRef.current, {
                    type: "video/webm",
                });

                onRecordingStop?.(videoBlob);
                uploadVideo(videoBlob);
            };

            // Start recording
            mediaRecorder.start(1000); // Collect data every second
            setIsRecording(true);
            setRecordingTime(0);

            // Start timer
            timerRef.current = setInterval(() => {
                setRecordingTime((prev) => prev + 1);
            }, 1000);

            onRecordingStart?.();
        } catch (error) {
            console.error("Error starting recording:", error);
            onError?.(
                "Failed to start recording. Please check your camera and microphone permissions."
            );
        }
    }, [
        hasPermission,
        checkPermissions,
        onRecordingStart,
        onRecordingStop,
        onError,
        uploadVideo,
        videoPreviewRef,
    ]);

    // Stop recording
    const stopRecording = useCallback(() => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();

            // Stop all tracks
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
                streamRef.current = null;
            }

            // Clear video preview
            if (videoPreviewRef.current) {
                videoPreviewRef.current.srcObject = null;
            }

            // Clear timer
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }

            setIsRecording(false);
        }
    }, [isRecording, videoPreviewRef]);

    // Format recording time as MM:SS
    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <>
            {/* Video Preview - only show if not using external preview */}
            {isRecording && !showVideoPreview && (
                <div className="w-full max-w-[600px] mb-4">
                    <div className="relative rounded-2xl overflow-hidden bg-black">
                        <video
                            ref={videoPreviewRef}
                            className="w-full h-48 object-cover"
                            muted
                            playsInline
                            autoPlay
                            controls={false}
                        />
                        {/* Recording indicator overlay */}
                        <div className="absolute top-3 left-3 flex items-center gap-2 bg-red-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-white text-xs font-medium">
                                REC {formatTime(recordingTime)}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Recording Button */}
            <button
                onClick={isRecording ? stopRecording : startRecording}
                disabled={isUploading}
                className={`w-full max-w-[328px] px-6 py-2 flex items-center justify-center gap-2 rounded-full font-sf-pro text-sm font-bold capitalize transition-all cursor-pointer ${
                    isRecording
                        ? "border border-[#401A4D] bg-transparent text-[#401A4D] hover:bg-[#401A4D] hover:text-white"
                        : "bg-gradient-to-r from-[#E8A089] to-[#612A74] text-white hover:shadow-lg"
                } ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
                {isRecording ? (
                    // Stop icon
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0"
                    >
                        <rect
                            x="6"
                            y="6"
                            width="12"
                            height="12"
                            rx="2"
                            fill="currentColor"
                        />
                    </svg>
                ) : (
                    // Red round recording icon
                    <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                )}
                <span>
                    {isRecording ? "Stop Recording" : "Start Recording"}
                </span>
            </button>

            {/* Permission warning */}
            {hasPermission === false && (
                <p className="text-sm text-red-500 text-center max-w-sm">
                    Camera and microphone permissions are required for video
                    recording. Please allow access and refresh the page.
                </p>
            )}
        </>
    );
}
