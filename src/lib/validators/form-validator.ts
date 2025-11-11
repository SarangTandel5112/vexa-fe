/**
 * Form Validator
 * Generic validator implementation
 */

import {
    IValidator,
    ValidationResult,
    ValidationError,
    ValidationRule,
} from "./validation.interface";

export class FormValidator<T extends Record<string, unknown>>
    implements IValidator<T>
{
    private rules: Map<keyof T, ValidationRule<unknown>[]> = new Map();

    addRule(
        field: keyof T,
        ...rules: ValidationRule<unknown>[]
    ): FormValidator<T> {
        const existingRules = this.rules.get(field) || [];
        this.rules.set(field, [...existingRules, ...rules]);
        return this;
    }

    validate(data: T): ValidationResult {
        const errors: ValidationError[] = [];

        this.rules.forEach((rules, field) => {
            const value = data[field];

            for (const rule of rules) {
                const error = rule(value);
                if (error) {
                    errors.push({
                        field: String(field),
                        message: error,
                    });
                }
            }
        });

        return {
            isValid: errors.length === 0,
            errors,
        };
    }

    getFieldErrors(data: T, field: keyof T): string[] {
        const rules = this.rules.get(field);
        if (!rules) return [];

        const errors: string[] = [];
        const value = data[field];

        for (const rule of rules) {
            const error = rule(value);
            if (error) {
                errors.push(error);
            }
        }

        return errors;
    }
}
