/**
 * LoginForm using Formik
 *
 * This is an EXAMPLE implementation showing how to use Formik.
 * NOT currently in use - kept for future migration.
 *
 * To use this version:
 * 1. Replace LoginForm.tsx import with this file
 * 2. Update the import path in login page
 *
 * Benefits of Formik:
 * - Industry standard form management
 * - Built-in validation handling
 * - Less boilerplate code
 * - Better TypeScript support
 * - Automatic touched state
 * - Field-level validation
 */

"use client";

import { InputField, FormIcons, Button } from "@/components";
import { LoginRequest } from "../../types";
import { useLoginFormFormik } from "@/hooks/formik";

interface LoginFormFormikProps {
    onSubmit?: (data: LoginRequest) => Promise<void>;
    redirectTo?: string;
}

export function LoginFormFormik({
    onSubmit,
    redirectTo,
}: LoginFormFormikProps) {
    const formik = useLoginFormFormik({
        onSubmit,
        redirectTo,
    });

    return (
        <div className="col-span-12 lg:col-span-5 space-y-10">
            <div className="space-y-4">
                <h2 className="text-heading1 font-bricolage text-[#0A0A0A]">
                    Login to your
                    <br />
                    account
                </h2>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                    <InputField
                        type="text"
                        placeholder="User Id"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        icon={<FormIcons.Email />}
                        disabled={formik.isSubmitting}
                    />
                    {formik.touched.username && formik.errors.username && (
                        <div className="text-sm text-red-600 mt-1">
                            {formik.errors.username}
                        </div>
                    )}
                </div>

                <div>
                    <InputField
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        icon={<FormIcons.Password />}
                        showPasswordToggle={true}
                        disabled={formik.isSubmitting}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-sm text-red-600 mt-1">
                            {formik.errors.password}
                        </div>
                    )}
                </div>

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
                    disabled={formik.isSubmitting || !formik.isValid}
                    loading={formik.isSubmitting}
                >
                    {formik.isSubmitting ? "Signing in..." : "Login"}
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
