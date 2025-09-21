import { NextResponse } from "next/server";
import { createDirectUpload } from "@/services/mux.service";

export async function POST() {
    try {
        // Create a direct upload URL
        const uploadData = await createDirectUpload();

        return NextResponse.json({
            success: true,
            data: uploadData,
        });
    } catch (error) {
        console.error("Error creating Mux upload URL:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Failed to create upload URL",
            },
            { status: 500 }
        );
    }
}
