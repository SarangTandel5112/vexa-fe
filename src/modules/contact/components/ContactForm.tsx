"use client";

import { useState } from "react";
import {
    InputField,
    TextareaField,
    SelectField,
    FormIcons,
    Button,
} from "@/components";
import { ContactRequest } from "../types";

interface ContactFormProps {
    onSubmit?: (data: ContactRequest) => Promise<void>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
    const [formData, setFormData] = useState<ContactRequest>({
        companyName: "",
        email: "",
        purpose: "",
        description: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [successMessage, setSuccessMessage] = useState<string>("");

    const purposeOptions = [
        { value: "Demo", label: "Demo" },
        { value: "Support", label: "Technical Support" },
        { value: "Sales", label: "Sales Question" },
        { value: "Partnership", label: "Partnership" },
        { value: "General", label: "General Inquiry" },
    ];

    const handleInputChange = (field: keyof ContactRequest, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        // Clear errors when user starts typing
        if (errors.length > 0) {
            setErrors([]);
        }
        if (successMessage) {
            setSuccessMessage("");
        }
    };

    // Basic validation helper
    const validateContactData = (
        data: ContactRequest
    ): { isValid: boolean; errors: string[] } => {
        const errors: string[] = [];

        if (!data.companyName?.trim()) {
            errors.push("Company name is required");
        }

        if (!data.email?.trim()) {
            errors.push("Email is required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errors.push("Please enter a valid email address");
        }

        if (!data.purpose?.trim()) {
            errors.push("Purpose is required");
        }

        if (!data.description?.trim()) {
            errors.push("Description is required");
        } else if (data.description.length < 10) {
            errors.push("Description must be at least 10 characters long");
        }

        return {
            isValid: errors.length === 0,
            errors,
        };
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset previous states
        setErrors([]);
        setSuccessMessage("");

        // Validate form data
        const validation = validateContactData(formData);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }

        setIsSubmitting(true);

        try {
            if (onSubmit) {
                await onSubmit(formData);
            } else {
                // Mock submission
                await new Promise((resolve) => setTimeout(resolve, 1000));
                setSuccessMessage(
                    "Thank you for your message! We will get back to you soon."
                );
                // Reset form
                setFormData({
                    companyName: "",
                    email: "",
                    purpose: "",
                    description: "",
                });
            }
        } catch {
            setErrors(["An unexpected error occurred. Please try again."]);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="space-y-10">
            {/* Success Message */}
            {successMessage && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800 text-sm">{successMessage}</p>
                </div>
            )}

            {/* Error Messages */}
            {errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <ul className="text-red-800 text-sm space-y-1">
                        {errors.map((error, index) => (
                            <li key={index}>• {error}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                    type="text"
                    placeholder="Enter your Company Name"
                    value={formData.companyName}
                    onChange={(e) =>
                        handleInputChange("companyName", e.target.value)
                    }
                    icon={<FormIcons.User />}
                    disabled={isSubmitting}
                />

                <InputField
                    type="email"
                    placeholder="Enter your Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    icon={<FormIcons.Email />}
                    disabled={isSubmitting}
                />

                <SelectField
                    placeholder="Select Purpose"
                    value={formData.purpose}
                    onChange={(e) =>
                        handleInputChange("purpose", e.target.value)
                    }
                    options={purposeOptions}
                    icon={<FormIcons.Document />}
                />

                <TextareaField
                    placeholder="Add description"
                    value={formData.description}
                    onChange={(e) =>
                        handleInputChange("description", e.target.value)
                    }
                    rows={6}
                />

                <Button
                    type="submit"
                    variant="primary"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full py-[18px] rounded-full"
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
            </form>
        </div>
    );
}
