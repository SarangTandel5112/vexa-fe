import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                footerBg: "#F4F3EC",
            },
            fontFamily: {
                "space-grotesk": "var(--body-font)",
                // abacaxi: ["abacaxi-latin-variable", "sans-serif"]
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, theme, addComponents, addUtilities }) {
            // Set default font family for body
            addBase({
                body: {
                    // fontFamily: theme("fontFamily.space-grotesk"), // Space Grotesk as default font
                },
            });

            // Custom Typography Components
            addComponents({
                ".text-heading1": {
                    fontSize: "18px", // XS (default/mobile)
                    lineHeight: "1.2",
                    fontWeight: "600", // Semibold
                    letterSpacing: "-0.02em",
                    "@screen sm": {
                        fontSize: "24px", // SM
                    },
                    "@screen md": {
                        fontSize: "32px", // MD
                    },
                    "@screen lg": {
                        fontSize: "40px", // LG
                    },
                },
                ".text-heading2": {
                    fontSize: "18px", // XS (default/mobile)
                    lineHeight: "1.2",
                    fontWeight: "600", // Semibold
                    letterSpacing: "-0.02em",
                    "@screen sm": {
                        fontSize: "22px", // SM
                    },
                    "@screen md": {
                        fontSize: "24px", // MD
                    },
                    "@screen lg": {
                        fontSize: "24px", // LG
                    },
                },
                ".text-heading3": {
                    fontSize: "17px", // Default (mobile)
                    lineHeight: "115%",
                    fontWeight: "500", // Medium
                    letterSpacing: "-0.02em",
                    fontFamily: theme("fontFamily.abacaxi"),
                    "@screen md": {
                        fontSize: "24px", // Desktop
                    },
                },
                ".text-body1": {
                    fontSize: "17px", // Default (mobile)
                    lineHeight: "140%",
                    fontWeight: "400", // Regular
                    letterSpacing: "-0.02em",
                    fontFamily: theme("fontFamily.abacaxi"),
                    "@screen md": {
                        fontSize: "24px", // Desktop
                    },
                },
                ".text-body2": {
                    fontSize: "14px", // Default (mobile)
                    lineHeight: "150%",
                    fontWeight: "400", // Regular
                    letterSpacing: "-0.02em",
                    fontFamily: theme("fontFamily.abacaxi"),
                    "@screen md": {
                        fontSize: "17px", // Desktop
                    },
                },
                ".text-footer": {
                    fontSize: "12px", // Default (mobile)
                    lineHeight: "120%",
                    fontWeight: "500", // Regular
                    letterSpacing: "0em",
                    fontFamily: theme("fontFamily.abacaxi"),
                    "@screen md": {
                        fontSize: "14px", // Desktop
                    },
                },
            });

            // Custom border style (refactored for clarity)
            addUtilities({
                // Dotted Border for all sides
                ".dotted-border": {
                    position: "relative",
                    "--dotted-color": "currentColor",
                },
                ".dotted-border::before": {
                    content: '""',
                    position: "absolute",
                    inset: "0", // Applies to all sides
                    pointerEvents: "none", // Prevents interaction
                    backgroundImage:
                        "var(--tw-gradient-dotted, radial-gradient(circle, var(--dotted-color, currentColor) 35%, rgba(255, 255, 255, 0) 40%))",
                    backgroundSize: theme("backgroundSize.dotted-mobile"),
                    backgroundRepeat: "repeat",
                    zIndex: "1",
                    "@screen sm": {
                        backgroundSize: theme("backgroundSize.dotted-small"),
                    },
                },

                // Dotted Spaced Borders (specific sides)
                ".dotted-border-top": {
                    position: "relative",
                },
                ".dotted-border-top::before": {
                    content: '""',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "4px",
                    marginTop: "-2px",
                    pointerEvents: "none", // Prevents interaction
                    backgroundImage:
                        "var(--tw-gradient-dotted, radial-gradient(circle, var(--dotted-color, currentColor) 35%, rgba(255, 255, 255, 0) 40%))",
                    backgroundSize: theme("backgroundSize.dotted-mobile"),
                    backgroundRepeat: "repeat-x",
                    zIndex: "1",
                    "@screen sm": {
                        backgroundSize: theme("backgroundSize.dotted-small"),
                    },
                },
                ".dotted-border-right": {
                    position: "relative",
                },
                ".dotted-border-right::before": {
                    content: '""',
                    position: "absolute",
                    top: "0",
                    right: "0",
                    width: "4px",
                    height: "100%",
                    marginRight: "-2px",
                    pointerEvents: "none", // Prevents interaction
                    backgroundImage:
                        "var(--tw-gradient-dotted, radial-gradient(circle, var(--dotted-color, currentColor) 35%, rgba(255, 255, 255, 0) 40%))",
                    backgroundSize: theme("backgroundSize.dotted-mobile"),
                    backgroundRepeat: "repeat-y",
                    zIndex: "1",
                    "@screen sm": {
                        backgroundSize: theme("backgroundSize.dotted-small"),
                    },
                },
                ".dotted-border-bottom": {
                    position: "relative",
                },
                ".dotted-border-bottom::before": {
                    content: '""',
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "2px",
                    pointerEvents: "none", // Prevents interaction
                    backgroundImage:
                        "var(--tw-gradient-dotted, radial-gradient(circle, var(--dotted-color, currentColor) 35%, rgba(255, 255, 255, 0) 40%))",
                    backgroundSize: theme("backgroundSize.dotted-mobile"),
                    backgroundRepeat: "repeat-x",
                    zIndex: "1",
                    "@screen sm": {
                        backgroundSize: theme("backgroundSize.dotted-small"),
                        height: "4px",
                    },
                },
                ".dotted-border-left": {
                    position: "relative",
                },
                ".dotted-border-left::before": {
                    content: '""',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "4px",
                    height: "100%",
                    marginLeft: "-2px",
                    pointerEvents: "none", // Prevents interaction
                    backgroundImage:
                        "var(--tw-gradient-dotted, radial-gradient(circle, var(--dotted-color, currentColor) 35%, rgba(255, 255, 255, 0) 40%))",
                    backgroundSize: theme("backgroundSize.dotted-mobile"),
                    backgroundRepeat: "repeat-y",
                    zIndex: "1",
                    "@screen sm": {
                        backgroundSize: theme("backgroundSize.dotted-small"),
                    },
                },
            });
        }),
    ],
};

export default config;
