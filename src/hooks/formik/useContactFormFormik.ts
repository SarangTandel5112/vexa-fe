/**
 * Contact Form Hook using Formik
 * Alternative to manual useContactForm
 *
 * Usage:
 * import { useContactFormFormik } from '@/hooks/formik/useContactFormFormik';
 * const formik = useContactFormFormik({ onSubmit, onSuccess });
 *
 * Then in component:
 * <form onSubmit={formik.handleSubmit}>
 *   <input
 *     name="companyName"
 *     value={formik.values.companyName}
 *     onChange={formik.handleChange}
 *     onBlur={formik.handleBlur}
 *   />
 *   {formik.touched.companyName && formik.errors.companyName && (
 *     <div>{formik.errors.companyName}</div>
 *   )}
 * </form>
 */

import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { ContactRequest } from "@/components/types";
import { contactSchema } from "@/lib/schemas/contact.schema";

export interface UseContactFormFormikOptions {
    onSubmit?: (data: ContactRequest) => Promise<void>;
    onSuccess?: () => void;
}

export function useContactFormFormik({
    onSubmit,
    onSuccess,
}: UseContactFormFormikOptions = {}) {
    const formik = useFormik<ContactRequest>({
        initialValues: {
            companyName: "",
            email: "",
            purpose: "",
            description: "",
        },
        validationSchema: contactSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                if (onSubmit) {
                    await onSubmit(values);
                    toast.success("Message sent successfully!");
                    resetForm();
                    onSuccess?.();
                } else {
                    // Mock submission
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    toast.success("Message sent successfully!");
                    resetForm();
                    onSuccess?.();
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
