/**
 * Authentication Validation Schemas using Yup
 * Ready to use when migrating from manual validation
 *
 * Usage:
 * import { loginSchema } from '@/lib/schemas/auth.schema';
 * const result = await loginSchema.validate(data);
 */

import * as Yup from "yup";
import { LoginRequest } from "@/modules/auth/types";

export const loginSchema = Yup.object<LoginRequest>().shape({
    username: Yup.string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters")
        .trim(),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
});

// Export type-safe schema
export type LoginSchemaType = Yup.InferType<typeof loginSchema>;
