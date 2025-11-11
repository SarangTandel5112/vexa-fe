/**
 * Authentication Validator
 * Specific validator for auth forms
 */

import { LoginRequest } from "@/modules/auth/types";
import { FormValidator } from "./form-validator";
import { isRequired, minLength } from "./common-rules";

export class AuthValidator {
    static validateLogin(data: LoginRequest): {
        isValid: boolean;
        errors: string[];
    } {
        const validator = new FormValidator<LoginRequest & Record<string, unknown>>();

        validator
            .addRule("username", isRequired("Username"), minLength(3, "Username"))
            .addRule("password", isRequired("Password"), minLength(6, "Password"));

        const result = validator.validate(data as LoginRequest & Record<string, unknown>);

        return {
            isValid: result.isValid,
            errors: result.errors.map((e) => e.message),
        };
    }
}
