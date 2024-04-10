import React from 'react';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';

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

interface ForgotPasswordFormProps {
  onViewChange: (view: string) => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onViewChange }) => {
  const router = useRouter();
  
  return (
    <FormContainer>
      <h2 className="self-center mt-10 text-3xl leading-10 tracking-[2.4px]">Нууц үг мартсан</h2>
      <TextField
        label="И-Мэйл"
        type="text"
        margin="normal"
        fullWidth
        required
        className="mt-20 leading-10 text-neutral-400"
      />
      <Button
        onClick={() => onViewChange('recreatePassword')}
        variant="contained"
        color="primary"
        type="submit"
        className="items-center px-24 mt-8 font-semibold text-center whitespace-nowrap bg-orange-400 rounded-lg leading-[222%]"
      >
        Илгээх
      </Button>
      <div className="flex gap-0 justify-center mt-8 text-base tracking-widest leading-10">
        <button onClick={() => onViewChange('login')}className="flex-1 pt-3.5 pb-1.5">
          Нууц үгээ санасан уу?
        </button>
        <button onClick={() => onViewChange('login')}className="justify-end items-start px-3 pt-3.5 pb-1.5 text-orange-400 whitespace-nowrap">
          Нэвтрэх
        </button>
      </div>
    </FormContainer>

  );
};

export default ForgotPasswordForm;
