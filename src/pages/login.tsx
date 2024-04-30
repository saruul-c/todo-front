import React, { useState } from 'react';
import LoginForm from "@/components/LoginForm";
import RegistrationForm from "@/components/RegistrationForm";
import ForgotPasswordForm from "@/components/PasswordForgotForm";
import RecreatePasswordForm from "@/components/RecreatePasswordForm";

const CenteredContainer: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  return <div className={`container flex justify-center items-center h-screen ${className}`}>{children}</div>;
};

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('login');

  return (
    <CenteredContainer className="mx-auto my-auto">
      {currentView === 'login' && <LoginForm
        onLogin={() => console.log('Logged in')}
        onForgotPasswordClick={() => setCurrentView('forgotPassword')}
        onRegistrationClick={() => setCurrentView('registration')}
      />}
      {currentView === 'registration' && <RegistrationForm onBackToLogin={() => setCurrentView('login')} />}
      {currentView === 'forgotPassword' && <ForgotPasswordForm onBackToLogin={() => setCurrentView('login')} />}
      {currentView === 'recreatePassword' && <RecreatePasswordForm onViewChange={() => setCurrentView('login')} />}
    </CenteredContainer>
  );
};

export default Home;
