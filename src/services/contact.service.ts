import { apiClient, ApiResponse } from '@/utils/api-client';
import { ContactRequest, ContactResponse } from '@/components/types';

export class ContactService {
  private readonly apiUrl = '/contact';

  /**
   * Submit contact form data
   */
  async submitContact(contactData: ContactRequest): Promise<ApiResponse<ContactResponse>> {
    return apiClient.post<ContactResponse>(this.apiUrl, contactData);
  }

  /**
   * Validate contact form data
   */
  validateContactData(contactData: ContactRequest): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!contactData.companyName?.trim()) {
      errors.push('Company name is required');
    }

    if (!contactData.email?.trim()) {
      errors.push('Email is required');
    } else if (!this.isValidEmail(contactData.email)) {
      errors.push('Please enter a valid email address');
    }

    if (!contactData.purpose?.trim()) {
      errors.push('Purpose is required');
    }

    if (!contactData.description?.trim()) {
      errors.push('Description is required');
    } else if (contactData.description.length < 10) {
      errors.push('Description must be at least 10 characters long');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  /**
   * Basic email validation
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Create a default instance
export const contactService = new ContactService();
