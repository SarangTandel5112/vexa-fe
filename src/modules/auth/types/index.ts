// Authentication Types
export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    message?: string;
    username?: string;
    agent_id?: string;
    agent_name?: string;
    success?: boolean;
}

export interface SessionResponse {
    loggedIn: boolean;
    username?: string;
}

export interface User {
    id?: string;
    username: string;
    email?: string;
    name?: string;
    agent_id?: string;
    agent_name?: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    isLoggingIn: boolean;
    error: string | null;
}
