/**
 * Common Validation Rules
 * Reusable validation functions following SRP
 */

export const isRequired = (fieldName: string) => (value: unknown): string | null => {
    const strValue = value as string | undefined | null;
    if (!strValue || typeof strValue !== 'string' || !strValue.trim()) {
        return `${fieldName} is required`;
    }
    return null;
};

export const isEmail = (value: unknown): string | null => {
    const strValue = value as string | undefined | null;
    if (!strValue) return null;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(strValue)) {
        return "Please enter a valid email address";
    }
    return null;
};

export const minLength = (min: number, fieldName: string) => (value: unknown): string | null => {
    const strValue = value as string | undefined | null;
    if (!strValue) return null;

    if (strValue.length < min) {
        return `${fieldName} must be at least ${min} characters`;
    }
    return null;
};

export const maxLength = (max: number, fieldName: string) => (value: unknown): string | null => {
    const strValue = value as string | undefined | null;
    if (!strValue) return null;

    if (strValue.length > max) {
        return `${fieldName} must not exceed ${max} characters`;
    }
    return null;
};

export const isPhone = (value: unknown): string | null => {
    const strValue = value as string | undefined | null;
    if (!strValue) return null;

    const phoneRegex = /^[+]?[\d\s\-()]+$/;
    if (!phoneRegex.test(strValue) || strValue.replace(/\D/g, "").length < 10) {
        return "Please enter a valid phone number";
    }
    return null;
};

export const matches = (pattern: RegExp, message: string) => (value: unknown): string | null => {
    const strValue = value as string | undefined | null;
    if (!strValue) return null;

    if (!pattern.test(strValue)) {
        return message;
    }
    return null;
};
