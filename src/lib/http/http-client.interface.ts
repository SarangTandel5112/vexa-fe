/**
 * HTTP Client Interface
 * Provides abstraction for HTTP requests following Dependency Inversion Principle
 */

export interface HttpRequestConfig {
    headers?: Record<string, string>;
    credentials?: RequestCredentials;
    signal?: AbortSignal;
}

export interface HttpResponse<T = unknown> {
    data: T;
    status: number;
    statusText: string;
    headers: Headers;
}

export interface HttpError {
    message: string;
    status?: number;
    statusText?: string;
    data?: unknown;
}

/**
 * HTTP Client Interface
 * All HTTP implementations must implement this interface
 */
export interface IHttpClient {
    get<T>(url: string, config?: HttpRequestConfig): Promise<HttpResponse<T>>;
    post<T>(
        url: string,
        data?: unknown,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>>;
    put<T>(
        url: string,
        data?: unknown,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>>;
    delete<T>(url: string, config?: HttpRequestConfig): Promise<HttpResponse<T>>;
    patch<T>(
        url: string,
        data?: unknown,
        config?: HttpRequestConfig
    ): Promise<HttpResponse<T>>;
}
