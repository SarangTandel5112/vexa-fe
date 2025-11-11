/**
 * useContactForm Hook
 * Specific hook for contact form logic
 * Extracts business logic from ContactForm component
 */

import { toast } from "react-hot-toast";
import { ContactRequest } from "@/modules/contact/types";
import { ContactValidator } from "@/lib/validators";
import { useForm } from "./useForm";

export interface UseContactFormOptions {
    onSubmit?: (data: ContactRequest) => Promise<void>;
    onSuccess?: () => void;
}

export function useContactForm({
    onSubmit,
    onSuccess,
}: UseContactFormOptions = {}) {
    const handleContactSubmit = async (values: ContactRequest) => {
        if (onSubmit) {
            await onSubmit(values);
            toast.success("Message sent successfully!");
            onSuccess?.();
        } else {
            // Mock submission
            await new Promise((resolve) => setTimeout(resolve, 1000));
            toast.success("Message sent successfully!");
            onSuccess?.();
        }
    };

    const form = useForm<ContactRequest & Record<string, unknown>>({
        initialValues: {
            companyName: "",
            email: "",
            purpose: "",
            description: "",
        },
        onSubmit: handleContactSubmit,
        validate: ContactValidator.validateContact as (values: ContactRequest & Record<string, unknown>) => { isValid: boolean; errors: string[] },
    });

    return form;
}
