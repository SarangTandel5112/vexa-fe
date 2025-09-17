"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
    MainContent,
    FeatureCard,
    FeatureIcons,
    InputField,
    FormIcons,
    Button,
} from "@/components";
import { useAuth } from "@/contexts/AuthContext";
import { LoginRequest } from "@/components/types";
// import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const { login, isLoggingIn, error, clearError } = useAuth();
    const [formData, setFormData] = useState<LoginRequest>({
        username: "",
        password: "",
    });

    // Show toast for login errors
    useEffect(() => {
        if (error) {
            toast.error(error);
            clearError();
        }
    }, [error, clearError]);

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

        // Clear any previous errors
        clearError();

        const success = await login(formData);

        if (success) {
            toast.success("Login successful! Redirecting...");

            // Check if there's a stored redirect path
            const redirectPath = sessionStorage.getItem("redirectAfterLogin");
            sessionStorage.removeItem("redirectAfterLogin"); // Clean up

            // Redirect to the stored path or home page
            router.push(redirectPath || "/");
        }
        // Error will be shown via useEffect above
    };

    return (
        <MainContent>
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Content */}
                    <div className="col-span-12 lg:col-span-7 space-y-12 lg:pr-8">
                        {/* Hero Text */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="font-bricolage text-[32px] md:text-[40px] font-bold text-[#0A0A0A] leading-[1.2] tracking-[-0.04em]">
                                    Hello, I am Vexa,
                                    <br />
                                    Let’s get you ready for the interview!
                                </h2>
                                <p className="font-roboto text-[20px] md:text-[27px] font-normal text-[#776F69] leading-[1.26]">
                                    I turn surveys into real conversations -
                                    natural, unbiased, and smart. Helping you
                                    uncover insights that truly matter.
                                </p>
                            </div>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
                            <FeatureCard
                                icon={
                                    <FeatureIcons.PersonalizedConversations />
                                }
                                title="Personalised Conversations"
                                description="Chats that adapt to each user, making surveys feel natural."
                            />

                            <FeatureCard
                                icon={<FeatureIcons.SmartModeration />}
                                title="Smart Moderation"
                                description="Keeps discussions unbiased, clear, and easy to follow."
                            />

                            <FeatureCard
                                icon={<FeatureIcons.ActionableInsights />}
                                title="Actionable Insights"
                                description="Delivers clean reports with the insights that matter most."
                            />
                        </div>
                    </div>

                    {/* Right Content - Login Form */}
                    <div className="col-span-12 lg:col-span-5 space-y-10">
                        <div className="space-y-4">
                            <h2 className="font-bricolage text-[32px] md:text-[40px] font-bold text-[#0A0A0A] leading-[1.2] tracking-[-0.04em]">
                                Login to your
                                <br />
                                account
                            </h2>
                            {/* <p className="font-sf-pro text-base font-normal text-[#776F69]">
                Don&apos;t have an account? <Link href="/register" className="text-[#612A74] font-semibold cursor-pointer hover:underline">Sign Up</Link>
              </p> */}
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
                                    className="font-sf-pro text-sm font-semibold text-[#612A74] hover:underline cursor-pointer"
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
                                    className="underline cursor-pointer hover:text-[#612A74]"
                                >
                                    Terms & Conditions
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </MainContent>
    );
}
