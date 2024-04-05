import LoginForm from "@/components/LoginForm";
import RegistrationForm from "@/components/RegistrationForm";
import ForgotPasswordForm from "@/components/PasswordForgotForm";
import RecreatePasswordForm from "@/components/RecreatePasswordForm";
import React, { useState } from 'react';

interface CenteredContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface LoginPageProps {
    onViewChange: (view: string) => void;
  }
  

const CenteredContainer: React.FC<CenteredContainerProps> = ({ children, className }) => {
  return <div className={`container flex justify-center items-center h-screen ${className}`}>{children}</div>;
};
export default function Home(): React.ReactElement {
    const [currentView, setCurrentView] = useState('login'); 
  
    export const handleViewChange = (view: string) => {
      setCurrentView(view);
  };
  
    return (
        <CenteredContainer className="mx-auto my-auto">
            {currentView === 'login' && <LoginForm onClick={()=>handleViewChange("registration")  } className="bg-red-500"/>}
            {currentView === 'registration' && <RegistrationForm />}
            {currentView === 'forgotPassword' && <ForgotPasswordForm />}
            {currentView === 'recreatePassword' && <RecreatePasswordForm />}
        </CenteredContainer>
    );
}
