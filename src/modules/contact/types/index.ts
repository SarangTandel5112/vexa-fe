// Contact Form Types
export interface ContactRequest {
    companyName: string;
    email: string;
    purpose: string;
    description: string;
}

export interface ContactResponse {
    message?: string;
    success?: boolean;
}
