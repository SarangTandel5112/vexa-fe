import { apiClient, ApiResponse } from '@/utils/api-client';
import { LoginRequest, LoginResponse, SessionResponse } from '@/components/types';

export class AuthService {
  /**
   * Login user with username and password
   */
  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    return apiClient.post<LoginResponse>('/login', credentials);
  }

  /**
   * Logout user and clear session
   */
  async logout(): Promise<ApiResponse<unknown>> {
    return apiClient.post('/logout');
  }

  /**
   * Check if user is authenticated by verifying session
   */
  async checkSession(): Promise<ApiResponse<SessionResponse>> {
    return apiClient.get<SessionResponse>('/session');
  }

  /**
   * Validate login credentials
   */
  validateCredentials(credentials: LoginRequest): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!credentials.username?.trim()) {
      errors.push('Username is required');
    }

    if (!credentials.password?.trim()) {
      errors.push('Password is required');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

// Create a default instance
export const authService = new AuthService();
