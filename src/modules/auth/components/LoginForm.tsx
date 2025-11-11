"use client";

import { InputField, FormIcons, Button } from "@/components";
import { LoginRequest } from "../types";
import { useLoginForm } from "@/hooks";

interface LoginFormProps {
    onSubmit?: (data: LoginRequest) => Promise<void>;
    redirectTo?: string;
}

export function LoginForm({ onSubmit, redirectTo }: LoginFormProps) {
    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    } = useLoginForm({
        onSubmit,
        redirectTo,
    });

    return (
        <div className="col-span-12 lg:col-span-5 space-y-10">
            <div className="space-y-4">
                <h2 className="font-bricolage text-[32px] md:text-[40px] font-bold text-[#0A0A0A] leading-[1.2] tracking-[-0.04em]">
                    Login to your
                    <br />
                    account
                </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full py-[18px] rounded-full"
                    disabled={
                        isSubmitting ||
                        !values.username ||
                        !values.password
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
