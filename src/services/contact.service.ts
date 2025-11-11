/**
 * Contact Service
 * Refactored to follow Single Responsibility and Dependency Inversion Principles
 * Validation logic moved to validators, uses injected HTTP client
 */

import { ApiResponse } from "@/utils/api-client";
import { ContactRequest, ContactResponse } from "@/components/types";
import { IHttpClient, httpClient, HttpError } from "@/lib/http";

export class ContactService {
    private readonly apiUrl = "/contact";

    constructor(private httpClient: IHttpClient) {}

    /**
     * Submit contact form data
     */
    async submitContact(
        contactData: ContactRequest
    ): Promise<ApiResponse<ContactResponse>> {
        try {
            const response = await this.httpClient.post<ContactResponse>(
                this.apiUrl,
                contactData
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
                error: httpError.message || "Failed to submit contact form",
                status: httpError.status || 0,
            };
        }
    }
}

// Create a default instance with injected dependency
export const contactService = new ContactService(httpClient);
