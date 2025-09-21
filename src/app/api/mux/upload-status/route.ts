import { NextRequest, NextResponse } from "next/server";
import { getUploadStatus } from "@/services/mux.service";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const uploadId = searchParams.get("uploadId");

        if (!uploadId) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Upload ID is required",
                },
                { status: 400 }
            );
        }

        // Get upload status and asset ID
        const uploadStatus = await getUploadStatus(uploadId);

        return NextResponse.json({
            success: true,
            data: uploadStatus,
        });
    } catch (error) {
        console.error("Error getting upload status:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Failed to get upload status",
            },
            { status: 500 }
        );
    }
}
