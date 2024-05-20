import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import CustomButton from "./button";
import { register } from "@/lib/axios/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "white",
  padding: theme.spacing(5),
  maxWidth: 440,
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

interface RegistrationFormProps {
  onBackToLogin: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onBackToLogin,
}) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const notify = () => toast("Wow so easy!");
  const handleRegister = async () => {
    try {
      const data = await register(username, email, password);
      console.log("Registration successful", data);

      router.push("/login"); // Navigate to login page or dashboard as required
    } catch (error) {
      setErrorMessage("Registration failed ");
    }
  };

  const newLocal =
    "justify-end items-end px-3 pt-3.5 pb-1.5 text-orange-400 whitespace-nowrap";

  return (
    <>
      <FormContainer>
        <h2 className="self-center mt-10 text-3xl leading-10 tracking-[2.4px]">
          Бүртгүүлэх
        </h2>
        <TextField
          label="Бүтэн нэр"
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          fullWidth
          required
          className="mt-20 leading-10 text-neutral-400"
        />
        <TextField
          label="Имэйл"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          fullWidth
          required
          className="mt-4 leading-10 text-neutral-100"
        />
        <TextField
          label="Нууц үг"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          fullWidth
          required
          className="mt-4 leading-10 text-neutral-400"
        />
        <CustomButton onClick={handleRegister}>Бүртгүүлэх</CustomButton>
        <div className="flex gap-0 justify-center mt-8 text-base tracking-widest leading-10">
          <Button
            onClick={onBackToLogin}
            className="flex-1 justify-start pt-3.5 text-grey whitespace-nowrap"
          >
            Бүртгэл бий юу?
          </Button>
          <Button onClick={onBackToLogin} className={newLocal}>
            Нэвтрэх
          </Button>
        </div>
      </FormContainer>
    </>
  );
};

export default RegistrationForm;
