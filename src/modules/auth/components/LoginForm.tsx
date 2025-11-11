"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { InputField, FormIcons, Button } from "@/components";
import { LoginRequest } from "../types";

interface LoginFormProps {
    onSubmit?: (data: LoginRequest) => Promise<void>;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
    const router = useRouter();
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [formData, setFormData] = useState<LoginRequest>({
        username: "",
        password: "",
    });

    const handleInputChange =
        (field: keyof LoginRequest) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({
                ...prev,
                [field]: e.target.value,
            }));
        };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (onSubmit) {
            setIsLoggingIn(true);
            try {
                await onSubmit(formData);
            } catch (error) {
                console.error("Login error:", error);
            } finally {
                setIsLoggingIn(false);
            }
        } else {
            // Mock login - just show UI
            setIsLoggingIn(true);
            setTimeout(() => {
                setIsLoggingIn(false);
                toast.success("Login successful! Redirecting...");
                router.push("/");
            }, 1000);
        }
    };

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
                    value={formData.username}
                    onChange={handleInputChange("username")}
                    icon={<FormIcons.Email />}
                    disabled={isLoggingIn}
                />

                <InputField
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange("password")}
                    icon={<FormIcons.Password />}
                    showPasswordToggle={true}
                    disabled={isLoggingIn}
                />

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
                        isLoggingIn ||
                        !formData.username.trim() ||
                        !formData.password.trim()
                    }
                    loading={isLoggingIn}
                >
                    {isLoggingIn ? "Signing in..." : "Login"}
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
