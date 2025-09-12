export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gradient' | 'outline' | 'social';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  href?: string;
}

export interface InputFieldProps {
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface TextareaFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
}

export interface SelectFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  icon?: React.ReactNode;
  className?: string;
}

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export interface HeaderProps {
  variant?: 'landing' | 'dashboard' | 'auth';
  showNewTopic?: boolean;
  showDemo?: boolean;
  className?: string;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export interface DashboardCardProps {
  id:string,
  title: string;
  description: string;
  avatar?: string;
  languages?: string[];
  onStartConversation?: () => void;
  className?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export interface Step {
  id: number;
  label: string;
  description: string;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number;
  onStepChange: (step: number) => void;
  className?: string;
}

export interface SocialLoginProps {
  provider: 'google' | 'facebook';
  onClick?: () => void;
  className?: string;
}

// Authentication Types
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  message?: string;
  user?: User;
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
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean; // For initial auth check on app load
  isLoggingIn: boolean; // For login button action
  error: string | null;
}

// Contact Form Types
export interface ContactRequest {
  companyName: string;
  email: string;
  purpose: string;
  description: string;
}

export interface ContactResponse {
  message?: string;
  success?: boolean;
}
