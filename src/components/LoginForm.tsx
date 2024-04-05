import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import RegistrationForm from "./RegistrationForm"; // Import the registration form component
import { handleViewChange } from '@/pages/login';

const LoginFormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "white",
  py: 20,
  maxWidth: 440,
  "@media (max-width:600px)": {},
});

function LoginForm() {
  const MyTitle = "self-center mt-10 text-3xl leading-10 tracking-[2.4px]";
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const router = useRouter();

  const handleRegistrationClick = () => {
    setShowRegistrationForm(true); // Set state to display registration form
  };

  return (
    <LoginFormContainer>
      <div className={MyTitle}>
        Нэвтрэх
      </div>

      <TextField
        label="Имэйл"
        type="email"
        margin="normal"
        fullWidth
        required
        className="mt-20 leading-10 text-neutral-400"
      />

      <TextField
        label="Нууц үг"
        type="password"
        margin="normal"
        fullWidth
        required
        className="mt-4 leading-10 text-neutral-400"
      />

      <Button
        onClick={() => router.push("/")} //
        variant="contained"
        color="primary"
        type="submit"
        className="items-center px-24  mt-8 font-semibold text-center whitespace-nowrap bg-orange-400 rounded-lg leading-[222%]"
      >
        Нэвтрэх
      </Button>

      <div className="flex gap-0 justify-center mt-8 text-base tracking-widest leading-10">
        <div className="flex-1 pt-3.5 pb-1.5">
          <a href="#">Нууц үг сэргээх</a>
        </div>
        <div className="justify-end items-start px-3 pt-3.5 pb-1.5 text-orange-400 whitespace-nowrap">
          <Button onClick={handleRegistrationClick}>Бүртгүүлэх</Button> 
        </div>
      </div>

      {showRegistrationForm &&  <RegistrationForm onClick={() => handleViewChange("login")} />}
    </LoginFormContainer>
  );
}

export default LoginForm;
