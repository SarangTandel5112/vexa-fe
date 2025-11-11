/**
 * useForm Hook
 * Generic hook for form state management
 * Follows Single Responsibility Principle
 */

import { useState, useCallback, ChangeEvent } from "react";

export interface UseFormOptions<T> {
    initialValues: T;
    onSubmit?: (values: T) => void | Promise<void>;
    validate?: (values: T) => { isValid: boolean; errors: string[] };
}

export interface UseFormReturn<T> {
    values: T;
    errors: string[];
    isSubmitting: boolean;
    isValid: boolean;
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => void;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    setFieldValue: (field: keyof T, value: unknown) => void;
    resetForm: () => void;
    setErrors: (errors: string[]) => void;
}

export function useForm<T extends Record<string, unknown>>({
    initialValues,
    onSubmit,
    validate,
}: UseFormOptions<T>): UseFormReturn<T> {
    const [values, setValues] = useState<T>(initialValues);
    const [errors, setErrors] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback(
        (
            e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
        ) => {
            const { name, value } = e.target;
            setValues((prev) => ({
                ...prev,
                [name]: value,
            }));
            // Clear errors on change
            setErrors([]);
        },
        []
    );

    const setFieldValue = useCallback((field: keyof T, value: unknown) => {
        setValues((prev) => ({
            ...prev,
            [field]: value,
        }));
    }, []);

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            setErrors([]);

            // Validate if validator provided
            if (validate) {
                const validation = validate(values);
                if (!validation.isValid) {
                    setErrors(validation.errors);
                    return;
                }
            }

            // Submit
            if (onSubmit) {
                setIsSubmitting(true);
                try {
                    await onSubmit(values);
                } catch (error) {
                    if (error instanceof Error) {
                        setErrors([error.message]);
                    }
                } finally {
                    setIsSubmitting(false);
                }
            }
        },
        [values, onSubmit, validate]
    );

    const resetForm = useCallback(() => {
        setValues(initialValues);
        setErrors([]);
        setIsSubmitting(false);
    }, [initialValues]);

    const isValid = errors.length === 0;

    return {
        values,
        errors,
        isSubmitting,
        isValid,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
        setErrors,
    };
}
