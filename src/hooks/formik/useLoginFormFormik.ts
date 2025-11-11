/**
 * Login Form Hook using Formik
 * Alternative to manual useLoginForm
 *
 * Usage:
 * import { useLoginFormFormik } from '@/hooks/formik/useLoginFormFormik';
 * const formik = useLoginFormFormik({ onSubmit, redirectTo });
 *
 * Then in component:
 * <form onSubmit={formik.handleSubmit}>
 *   <input
 *     name="username"
 *     value={formik.values.username}
 *     onChange={formik.handleChange}
 *     onBlur={formik.handleBlur}
 *   />
 *   {formik.touched.username && formik.errors.username && (
 *     <div>{formik.errors.username}</div>
 *   )}
 * </form>
 */

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { LoginRequest } from "@/modules/auth/types";
import { loginSchema } from "@/lib/schemas/auth.schema";

export interface UseLoginFormFormikOptions {
    onSubmit?: (data: LoginRequest) => Promise<void>;
    redirectTo?: string;
}

export function useLoginFormFormik({
    onSubmit,
    redirectTo = "/",
}: UseLoginFormFormikOptions = {}) {
    const router = useRouter();

    const formik = useFormik<LoginRequest>({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                if (onSubmit) {
                    await onSubmit(values);
                } else {
                    // Mock login fallback
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    toast.success("Login successful! Redirecting...");
                    router.push(redirectTo);
                }
            } catch (error) {
                if (error instanceof Error) {
                    toast.error(error.message);
                }
            } finally {
                setSubmitting(false);
            }
        },
    });

    return formik;
}
