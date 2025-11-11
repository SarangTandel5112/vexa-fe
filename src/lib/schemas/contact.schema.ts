/**
 * Contact Form Validation Schemas using Yup
 * Ready to use when migrating from manual validation
 *
 * Usage:
 * import { contactSchema } from '@/lib/schemas/contact.schema';
 * const result = await contactSchema.validate(data);
 */

import * as Yup from "yup";
import { ContactRequest } from "@/components/types";

export const contactSchema = Yup.object<ContactRequest>().shape({
    companyName: Yup.string()
        .required("Company name is required")
        .trim(),
    email: Yup.string()
        .required("Email is required")
        .email("Please enter a valid email address")
        .trim(),
    purpose: Yup.string()
        .required("Purpose is required")
        .trim(),
    description: Yup.string()
        .required("Description is required")
        .min(10, "Description must be at least 10 characters")
        .trim(),
});

// Export type-safe schema
export type ContactSchemaType = Yup.InferType<typeof contactSchema>;
