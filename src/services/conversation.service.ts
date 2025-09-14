import { ApiResponse } from '@/utils/api-client';

export interface MarkUnusableRequest {
  username: string;
}

export interface MarkUnusableResponse {
  success?: boolean;
  message?: string;
}

export interface LogoutResponse {
  success?: boolean;
  message?: string;
}

export class ConversationService {
  private baseUrl: string = '/api';

  /**
   * Make a request to mark user as unusable when conversation ends
   */
  async markUnusable(username: string): Promise<ApiResponse<MarkUnusableResponse>> {
    try {
      const response = await fetch(`${this.baseUrl}/mark-unusable`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // This will include cookies automatically
        body: JSON.stringify({
          username: username
        })
      });

      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson ? await response.json() : await response.text();

      if (!response.ok) {
        return {
          data: undefined,
          error: typeof data === 'string' ? data : data?.message || 'Failed to mark user as unusable',
          status: response.status,
        };
      }

      return {
        data: typeof data === 'string' ? { message: data, success: true } : data,
        error: undefined,
        status: response.status,
      };
    } catch (error) {
      let errorMessage = 'Network error occurred while marking user as unusable';
      
      if (error instanceof Error) {
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
          errorMessage = 'Unable to connect to the server. Please check your internet connection.';
        } else {
          errorMessage = error.message;
        }
      }
      
      return {
        data: undefined,
        error: errorMessage,
        status: 0,
      };
    }
  }

  /**
   * Logout user and clear session
   */
  async logout(): Promise<ApiResponse<LogoutResponse>> {
    try {
      const response = await fetch(`${this.baseUrl}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // This will include cookies automatically
      });

      const isJson = response.headers.get('content-type')?.includes('application/json');
      const data = isJson ? await response.json() : await response.text();

      if (!response.ok) {
        return {
          data: undefined,
          error: typeof data === 'string' ? data : data?.message || 'Logout failed',
          status: response.status,
        };
      }

      return {
        data: typeof data === 'string' ? { message: data, success: true } : data,
        error: undefined,
        status: response.status,
      };
    } catch (error) {
      let errorMessage = 'Network error occurred during logout';
      
      if (error instanceof Error) {
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
          errorMessage = 'Unable to connect to the server. Please check your internet connection.';
        } else {
          errorMessage = error.message;
        }
      }
      
      return {
        data: undefined,
        error: errorMessage,
        status: 0,
      };
    }
  }

  /**
   * Validate mark unusable request
   */
  validateMarkUnusableRequest(username: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!username?.trim()) {
      errors.push('Username is required');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }
}

// Create a default instance
export const conversationService = new ConversationService();
