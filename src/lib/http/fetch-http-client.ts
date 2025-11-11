/**
 * Fetch HTTP Client Implementation
 * Concrete implementation using browser Fetch API
 */

import {
    IHttpClient,
    HttpRequestConfig,
    HttpResponse,
    HttpError,
} from "./http-client.interface";

export class FetchHttpClient implements IHttpClient {
    constructor(private baseUrl: string = "") {}

    private async handleResponse<T>(
        response: Response
    ): Promise<HttpResponse<T>> {
        const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");

        let data: T;
        if (isJson) {
            data = await response.json();
        } else {
            data = (await response.text()) as T;
        }

        if (!response.ok) {
            const error: HttpError = {
                message: `HTTP Error: ${response.status} ${response.statusText}`,
                status: response.status,
                statusText: response.statusText,
                data,
            };
            throw error;
        }

        return {
            data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
        };
    }

    private async request<T>(
        url: string,
        options: RequestInit,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        try {
            const fullUrl = url.startsWith("http")
                ? url
                : `${this.baseUrl}${url}`;

            const response = await fetch(fullUrl, {
                ...options,
                headers: {
                    "Content-Type": "application/json",
                    ...config?.headers,
                    ...options.headers,
                },
                credentials: config?.credentials || options.credentials,
                signal: config?.signal,
            });

            return await this.handleResponse<T>(response);
        } catch (error) {
            if (error instanceof Error) {
                const httpError: HttpError = {
                    message: error.message,
                };
                throw httpError;
            }
            throw error;
        }
    }

    async get<T>(
        url: string,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        return this.request<T>(url, { method: "GET" }, config);
    }

    async post<T>(
        url: string,
        data?: unknown,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        return this.request<T>(
            url,
            {
                method: "POST",
                body: data ? JSON.stringify(data) : undefined,
            },
            config
        );
    }

    async put<T>(
        url: string,
        data?: unknown,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        return this.request<T>(
            url,
            {
                method: "PUT",
                body: data ? JSON.stringify(data) : undefined,
            },
            config
        );
    }

    async delete<T>(
        url: string,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        return this.request<T>(url, { method: "DELETE" }, config);
    }

    async patch<T>(
        url: string,
        data?: unknown,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>> {
        return this.request<T>(
            url,
            {
                method: "PATCH",
                body: data ? JSON.stringify(data) : undefined,
            },
            config
        );
    }
}

// Default instance
export const httpClient = new FetchHttpClient(
    process.env.NEXT_PUBLIC_API_URL || ""
);
