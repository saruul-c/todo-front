import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomButton from './button';
import { login } from '@/lib/axios';

const LoginFormContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: 'white',
  padding: theme.spacing(5),
  maxWidth: 440,
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
  },
}));

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onForgotPasswordClick: () => void;
  onRegistrationClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onForgotPasswordClick, onRegistrationClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Call the login API with email and password
      await onLogin(email, password);
      // Handle successful login, navigate to '/project' route, etc.

    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
    }
  };

  return (
    <LoginFormContainer>
      <h2 className="self-center mt-10 text-3xl leading-10 tracking-[2.4px]">Нэвтрэх</h2>
      <TextField
        label="Имэйл"
        type="email"
        margin="normal"
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-20 leading-10 text-neutral-400"
      />
      <TextField
        label="Нууц үг"
        type="password"
        margin="normal"
        fullWidth
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-4 leading-10 text-neutral-400"
      />
      <CustomButton onClick={handleLogin} variant="contained">
        Нэвтрэх
      </CustomButton>
      <div className="flex gap-0 justify- mt-8 text-base tracking-widest leading-10">
        <Button onClick={onForgotPasswordClick} className="flex-1 pt-3.5 pb-1.5">
          Нууц үг сэргээх
        </Button>
        <Button onClick={onRegistrationClick} className="justify-end items-start px-3 pt-3.5 pb-1.5 text-orange-400 whitespace-nowrap">
          Бүртгүүлэх
        </Button>
      </div>
    </LoginFormContainer>
  );
};

export default LoginForm;
