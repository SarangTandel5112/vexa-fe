/**
 * useLoginForm Hook
 * Specific hook for login form logic
 * Extracts business logic from LoginForm component
 */

import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { LoginRequest } from "@/modules/auth/types";
import { AuthValidator } from "@/lib/validators";
import { useForm } from "./useForm";

export interface UseLoginFormOptions {
    onSubmit?: (data: LoginRequest) => Promise<void>;
    redirectTo?: string;
}

export function useLoginForm({
    onSubmit,
    redirectTo = "/",
}: UseLoginFormOptions = {}) {
    const router = useRouter();

    const handleLogin = async (values: LoginRequest) => {
        if (onSubmit) {
            await onSubmit(values);
        } else {
            // Mock login fallback
            await new Promise((resolve) => setTimeout(resolve, 1000));
            toast.success("Login successful! Redirecting...");
            router.push(redirectTo);
        }
    };

    const form = useForm<LoginRequest & Record<string, unknown>>({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: handleLogin,
        validate: AuthValidator.validateLogin as (values: LoginRequest & Record<string, unknown>) => { isValid: boolean; errors: string[] },
    });

    return form;
}
