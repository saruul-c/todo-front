// layout/auth.tsx
import React, { useState } from "react";
import LoginForm from "@/components/LoginForm";
import RegistrationForm from "@/components/RegistrationForm";
import ForgotPasswordForm from "@/components/PasswordForgotForm";
import { login } from "@/lib/axios/api";

const Auth = ({ children }: { children: React.ReactNode }) => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'forgotPassword'>('login');

  const handleLogin = async (username: string, password: string) => {
    try {
      console.log('Logging in...');
      await login(username, password); 
      setAuthorized(true); 
    } catch (error) {
      console.error('Login failed:', error);
      setAuthorized(false);
    }
  };

  const handleViewChange = (view: 'login' | 'register' | 'forgotPassword') => {
    setCurrentView(view);
  };

  if (authorized) {
    return <>{children}</>;
  } else {
    switch (currentView) {
      case 'login':
        return (
          <LoginForm
            onLogin={handleLogin}
            onForgotPasswordClick={() => handleViewChange('forgotPassword')}
            onRegistrationClick={() => handleViewChange('register')}
          />
        );
      case 'register':
        return <RegistrationForm onBackToLogin={() => handleViewChange('login')} />;
      case 'forgotPassword':
        return <ForgotPasswordForm onBackToLogin={() => handleViewChange('login')} />;
      default:
        return null;
    }
  }
};

export default Auth;
