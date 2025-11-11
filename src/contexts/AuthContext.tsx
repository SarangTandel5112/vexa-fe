"use client";

import React, {
    createContext,
    useContext,
    useReducer,
    useEffect,
    ReactNode,
} from "react";
import { AuthState, User, LoginRequest } from "@/components/types";

// Auth Actions
type AuthAction =
    | { type: "LOGIN_START" }
    | { type: "LOGIN_SUCCESS"; payload: User }
    | { type: "LOGIN_FAILURE"; payload: string }
    | { type: "LOGOUT" }
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_LOGGING_IN"; payload: boolean }
    | { type: "CLEAR_ERROR" };

// Initial state
const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    isLoggingIn: false,
    error: null,
};

// Auth reducer
function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case "LOGIN_START":
            return {
                ...state,
                isLoggingIn: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
                isLoading: false,
                isLoggingIn: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoggingIn: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                isLoggingIn: false,
                error: null,
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.payload,
            };
        case "SET_LOGGING_IN":
            return {
                ...state,
                isLoggingIn: action.payload,
            };
        case "CLEAR_ERROR":
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

// Auth context interface
interface AuthContextType extends AuthState {
    login: (credentials: LoginRequest) => Promise<boolean>;
    logout: () => Promise<void>;
    clearError: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // Check if user is already authenticated on mount (mock - no API call)
    useEffect(() => {
        dispatch({ type: "SET_LOADING", payload: false });
        // No API call - user starts unauthenticated
    }, []);

    // Login function (mock - no API call)
    const login = async (credentials: LoginRequest): Promise<boolean> => {
        dispatch({ type: "LOGIN_START" });

        // Basic validation
        if (!credentials.username?.trim()) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: "Username is required",
            });
            return false;
        }

        if (!credentials.password?.trim()) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: "Password is required",
            });
            return false;
        }

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Mock successful login
        const user: User = {
            username: credentials.username,
            email: credentials.username.includes("@")
                ? credentials.username
                : undefined,
            agent_id: "XabqnwlhQf0xe3M4Ew7p", // Mock agent ID
            agent_name: "Mock Agent",
        };

        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        return true;
    };

    // Logout function (mock - no API call)
    const logout = async (): Promise<void> => {
        dispatch({ type: "SET_LOADING", payload: true });

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Clear local state
        dispatch({ type: "LOGOUT" });
    };

    // Clear error function
    const clearError = () => {
        dispatch({ type: "CLEAR_ERROR" });
    };

    const contextValue: AuthContextType = {
        ...state,
        login,
        logout,
        clearError,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use auth context
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
