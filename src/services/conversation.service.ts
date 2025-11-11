/**
 * Conversation Service
 * Refactored to follow Dependency Inversion Principle
 * Uses injected HTTP client instead of direct fetch
 */

import { IHttpClient, httpClient, HttpError } from "@/lib/http";
import { ApiResponse } from "@/utils/api-client";

export interface MarkUnusableRequest {
    username: string;
}

export interface MarkUnusableResponse {
    success?: boolean;
    message?: string;
}

export interface LogoutResponse {
    success?: boolean;
    message?: string;
}

export class ConversationService {
    constructor(private httpClient: IHttpClient) {}

    /**
     * Make a request to mark user as unusable when conversation ends
     */
    async markUnusable(
        username: string
    ): Promise<ApiResponse<MarkUnusableResponse>> {
        try {
            const response = await this.httpClient.post<MarkUnusableResponse>(
                "/api/mark-unusable",
                { username },
                { credentials: "include" }
            );

            return {
                data: response.data,
                error: undefined,
                status: response.status,
            };
        } catch (error) {
            const httpError = error as HttpError;
            return {
                data: undefined,
                error:
                    httpError.message ||
                    "Failed to mark user as unusable",
                status: httpError.status || 0,
            };
        }
    }

    /**
     * Logout user and clear session
     */
    async logout(): Promise<ApiResponse<LogoutResponse>> {
        try {
            const response = await this.httpClient.post<LogoutResponse>(
                "/api/logout",
                undefined,
                { credentials: "include" }
            );

            return {
                data: response.data,
                error: undefined,
                status: response.status,
            };
        } catch (error) {
            const httpError = error as HttpError;
            return {
                data: undefined,
                error: httpError.message || "Logout failed",
                status: httpError.status || 0,
            };
        }
    }
}

// Create a default instance with injected dependency
export const conversationService = new ConversationService(httpClient);
