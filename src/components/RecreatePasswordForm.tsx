import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import LoginForm from "@/pages/login";

const RecreatePasswordFormContainer = styled('div')(({ theme }) => ({
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


interface RecreatePasswordProps {
  onViewChange: (view: string) => void;
}

const RecreatePasswordForm: React.FC<RecreatePasswordProps> = ({ onViewChange }) => {
  const router = useRouter();


  return (
    <RecreatePasswordFormContainer>
      <h2 className="self-center mt-10 text-3xl leading-10 tracking-[2.4px]">Нууц үг сэргээх</h2>

      <TextField
        label="Шинэ нууц үг"
        type="password"
        margin="normal"
        fullWidth
        required
        className="mt-4 leading-10 text-neutral-400"
      />

      <TextField
        label="Шинэ нууц үг давтах"
        type="password"
        margin="normal"
        fullWidth
        required
        className="mt-4 leading-10 text-neutral-400"
      />

      <Button
        onClick={() => router.push("/index")}
        variant="contained"
        color="primary"
        type="submit"
        className="items-center px-24  mt-8 font-semibold text-center whitespace-nowrap bg-orange-400 rounded-lg leading-[222%]"
      >
        Шинэчлэх
      </Button>

      <div className="flex gap-0 justify-center mt-4 text-base tracking-widest leading-10">
      <Button onClick={() => onViewChange('login')} className="flex-1 pt-3.5 pb-1.5">
          Нууц үгээ санасан уу?
        </Button>
        <Button onClick={() => onViewChange('login')} className="justify-end items-start px-3 pt-3.5 pb-1.5 text-orange-400 whitespace-nowrap">
          Нэвтрэх
        </Button>
      </div>
    </RecreatePasswordFormContainer>
  );
}

export default RecreatePasswordForm;