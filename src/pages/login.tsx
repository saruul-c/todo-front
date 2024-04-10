import React, { useState } from 'react';

import LoginForm from "@/components/LoginForm";
import RegistrationForm from "@/components/RegistrationForm";
import ForgotPasswordForm from "@/components/PasswordForgotForm";
import RecreatePasswordForm from "@/components/RecreatePasswordForm";

interface CenteredContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CenteredContainer: React.FC<CenteredContainerProps> = ({ children, className }) => {
  return <div className={`container flex justify-center items-center h-screen ${className}`}>{children}</div>;
};

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>('login');

  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };

  return (
    <CenteredContainer className="mx-auto my-auto">
      {currentView === 'login' && <LoginForm onViewChange={handleViewChange} />}
      {currentView === 'registration' && <RegistrationForm onViewChange={handleViewChange} />}
      {currentView === 'forgotPassword' && <ForgotPasswordForm onViewChange={handleViewChange} />}
      {currentView === 'recreatePassword' && <RecreatePasswordForm onViewChange={handleViewChange} />}
    </CenteredContainer>
  );
};

export default Home;
