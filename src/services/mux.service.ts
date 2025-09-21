// Mux service for handling video uploads and asset management
import { Mux } from "@mux/mux-node";

// Initialize Mux client
const mux = new Mux({
    tokenId: process.env.MUX_TOKEN_ID || "",
    tokenSecret: process.env.MUX_TOKEN_SECRET || "",
});

export interface MuxUploadResponse {
    uploadUrl: string;
    uploadId: string;
    playbackId?: string;
}

export interface MuxAsset {
    id: string;
    playback_ids: Array<{
        id: string;
        policy: string;
    }>;
    status: string;
    created_at: string;
    duration?: number;
}

/**
 * Create a direct upload URL for video uploads
 */
export async function createDirectUpload(): Promise<MuxUploadResponse> {
    try {
        const upload = await mux.video.uploads.create({
            cors_origin:
                process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
            new_asset_settings: {
                playback_policy: ["public"], // Make videos publicly accessible
            },
        });

        return {
            uploadUrl: upload.url,
            uploadId: upload.id,
        };
    } catch (error) {
        console.error("Error creating Mux direct upload:", error);
        throw new Error("Failed to create upload URL");
    }
}

/**
 * Get upload status and asset ID after upload completion
 */
export async function getUploadStatus(
    uploadId: string
): Promise<{ assetId: string | null; status: string }> {
    try {
        const upload = await mux.video.uploads.retrieve(uploadId);
        return {
            assetId: upload.asset_id || null,
            status: upload.status || "unknown",
        };
    } catch (error) {
        console.error("Error retrieving upload status:", error);
        return {
            assetId: null,
            status: "error",
        };
    }
}

/**
 * Get asset information by ID
 */
export async function getAsset(assetId: string): Promise<MuxAsset | null> {
    try {
        const asset = await mux.video.assets.retrieve(assetId);
        return asset as MuxAsset;
    } catch (error) {
        console.error("Error retrieving Mux asset:", error);
        return null;
    }
}

/**
 * Get playback URL for an asset
 */
export async function getPlaybackUrl(assetId: string): Promise<string | null> {
    try {
        const asset = await getAsset(assetId);
        if (!asset || !asset.playback_ids || asset.playback_ids.length === 0) {
            return null;
        }

        const publicPlaybackId = asset.playback_ids.find(
            (p) => p.policy === "public"
        );
        if (publicPlaybackId) {
            return `https://stream.mux.com/${publicPlaybackId.id}.m3u8`;
        }

        return null;
    } catch (error) {
        console.error("Error getting playback URL:", error);
        return null;
    }
}

/**
 * Delete an asset
 */
export async function deleteAsset(assetId: string): Promise<boolean> {
    try {
        await mux.video.assets.delete(assetId);
        return true;
    } catch (error) {
        console.error("Error deleting Mux asset:", error);
        return false;
    }
}

export default mux;
