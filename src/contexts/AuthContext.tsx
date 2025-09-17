'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { AuthState, User, LoginRequest } from '@/components/types';
import { authService } from '@/services/auth.service';

// Auth Actions
type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_LOGGING_IN'; payload: boolean }
  | { type: 'CLEAR_ERROR' };

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
    case 'LOGIN_START':
      return {
        ...state,
        isLoggingIn: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        isLoggingIn: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoggingIn: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        isLoggingIn: false,
        error: null,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_LOGGING_IN':
      return {
        ...state,
        isLoggingIn: action.payload,
      };
    case 'CLEAR_ERROR':
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

  // Check if user is already authenticated on mount
  useEffect(() => {
    const checkInitialAuth = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      try {
        const response = await authService.checkSession();
        if (response.data && !response.error && response.data.loggedIn && response.data.username) {
          // Create user object from session data
          // Response format: { "loggedIn": true, "username": "anuj@greybatter.com" }
          const user: User = {
            username: response.data.username,
            email: response.data.username.includes('@') ? response.data.username : undefined,
          };
          dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        } else {
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      } catch {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    checkInitialAuth();
  }, []);

  // Login function
  const login = async (credentials: LoginRequest): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });

    // Validate credentials
    const validation = authService.validateCredentials(credentials);
    if (!validation.isValid) {
      dispatch({ type: 'LOGIN_FAILURE', payload: validation.errors.join(', ') });
      return false;
    }

    try {
      const response = await authService.login(credentials);
      
      if (response.error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: response.error });
        return false;
      }

      // Check if login was successful based on the message
      if (response.data?.message === 'Login successful' || response.data?.message === 'User already conversed') {
        // Create user object from login response data
        const user: User = {
          username: response.data?.username || credentials.username,
          email: credentials.username.includes('@') ? credentials.username : undefined,
          agent_id: response.data?.agent_id,
          agent_name: response.data?.agent_name,
        };

        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        return true;
      } else {
        // Handle failed login with specific error messages
        let errorMessage: string;
        
        if (response.data?.message) {
          // Use the message from the API response
          errorMessage = response.data.message;
        } else if (response.status >= 500) {
          // Server error
          errorMessage = 'Internal server error occurred. Please try again later.';
        } else if (response.status === 401 || response.status === 403) {
          // Unauthorized/Forbidden
          errorMessage = 'Invalid credentials. Please check your username and password.';
        } else {
          // Generic error
          errorMessage = 'Login failed. Please try again.';
        }
        
        dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });
        return false;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      dispatch({ type: 'LOGIN_FAILURE', payload: errorMessage });
      return false;
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      await authService.logout();
    } catch (error) {
      // Even if logout API fails, we should clear local state
      console.error('Logout API failed:', error);
    } finally {
      dispatch({ type: 'LOGOUT' });
    }
  };

  // Clear error function
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
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
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
