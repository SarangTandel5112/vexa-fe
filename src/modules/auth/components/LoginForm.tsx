"use client";

import { InputField, FormIcons, Button } from "@/components";
import { LoginRequest } from "../types";
import { useLoginForm } from "@/hooks";

interface LoginFormProps {
    onSubmit?: (data: LoginRequest) => Promise<void>;
    redirectTo?: string;
}

export function LoginForm({ onSubmit, redirectTo }: LoginFormProps) {
    const { values, errors, isSubmitting, handleChange, handleSubmit } =
        useLoginForm({
            onSubmit,
            redirectTo,
        });

    return (
        <div className="col-span-12 lg:col-span-5 space-y-4 md:space-y-6">
            <div className="space-y-2 md:space-y-3">
                <h2 className="text-heading1 font-bricolage text-[#0A0A0A]">
                    Login to your
                    <br />
                    account
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <InputField
                    type="text"
                    placeholder="User Id"
                    name="username"
                    value={values.username as string}
                    onChange={handleChange}
                    icon={<FormIcons.Email />}
                    disabled={isSubmitting}
                />

                <InputField
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={values.password as string}
                    onChange={handleChange}
                    icon={<FormIcons.Password />}
                    showPasswordToggle={true}
                    disabled={isSubmitting}
                />

                {errors.length > 0 && (
                    <div className="text-sm text-red-600">
                        {errors.map((error, index) => (
                            <div key={index}>{error}</div>
                        ))}
                    </div>
                )}

                <div className="text-right">
                    <button
                        type="button"
                        className="font-sf-pro text-sm font-semibold text-[#E95D3C] hover:underline cursor-pointer"
                    >
                        Forgot Password?
                    </button>
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    className="w-full rounded-full"
                    size="md"
                    disabled={
                        isSubmitting || !values.username || !values.password
                    }
                    loading={isSubmitting}
                >
                    {isSubmitting ? "Signing in..." : "Login"}
                </Button>

                <p className="text-center font-sf-pro text-sm text-[#776F69]">
                    By Signing in you agree to the{" "}
                    <a
                        href="/terms"
                        className="underline cursor-pointer hover:text-[#E95D3C]"
                    >
                        Terms & Conditions
                    </a>
                </p>
            </form>
        </div>
    );
}
