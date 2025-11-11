/**
 * Validation Interfaces
 * Provides abstraction for validation logic
 */

export interface ValidationResult {
    isValid: boolean;
    errors: ValidationError[];
}

export interface ValidationError {
    field: string;
    message: string;
}

export interface IValidator<T> {
    validate(data: T): ValidationResult;
}

export type ValidationRule<T> = (value: T) => string | null;
