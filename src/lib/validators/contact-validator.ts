/**
 * Contact Form Validator
 * Specific validator for contact forms
 */

import { ContactRequest } from "@/modules/contact/types";
import { FormValidator } from "./form-validator";
import { isRequired, isEmail } from "./common-rules";

export class ContactValidator {
    static validateContact(data: ContactRequest): {
        isValid: boolean;
        errors: string[];
    } {
        const validator = new FormValidator<ContactRequest & Record<string, unknown>>();

        validator
            .addRule("companyName", isRequired("Company name"))
            .addRule("email", isRequired("Email"), isEmail)
            .addRule("purpose", isRequired("Purpose"))
            .addRule("description", isRequired("Description"));

        const result = validator.validate(data as ContactRequest & Record<string, unknown>);

        return {
            isValid: result.isValid,
            errors: result.errors.map((e) => e.message),
        };
    }
}
