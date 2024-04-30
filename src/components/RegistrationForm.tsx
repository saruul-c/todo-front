import React from 'react';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import CustomButton from './button';

const FormContainer = styled('div')(({ theme }) => ({
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

interface RegistrationFormProps {
  onBackToLogin: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onBackToLogin  }) => {
  const router = useRouter();

  const newLocal = "justify-end items-end px-3 pt-3.5 pb-1.5 text-orange-400 whitespace-nowrap";
  return (
    <FormContainer>
      <h2 className="self-center mt-10 text-3xl leading-10 tracking-[2.4px]">Бүртгүүлэх</h2>
      <TextField
        label="Бүтэн нэр"
        type="text"
        margin="normal"
        fullWidth
        required
        className="mt-20 leading-10 text-neutral-400"
      />
      <TextField
        label="Имэйл"
        type="email"
        margin="normal"
        fullWidth
        required
        className="mt-4 leading-10 text-neutral-100"
      />
      <TextField
        label="Нууц үг"
        type="password"
        margin="normal"
        fullWidth
        required
        className="mt-4 leading-10 text-neutral-400"
      />
      <CustomButton onClick={onBackToLogin}>
        Бүртгүүлэх
      </CustomButton>
      <div className="flex gap-0 justify-center mt-8 text-base tracking-widest leading-10">
        <Button onClick={onBackToLogin} className="flex-1 justify-start pt-3.5 text-grey whitespace-nowrap">
          Бүртгэл бий юу?
        </Button>
        <Button onClick={onBackToLogin} className={newLocal}>
          Нэвтрэх
        </Button>
      </div>
    </FormContainer>
  );
};

export default RegistrationForm;
