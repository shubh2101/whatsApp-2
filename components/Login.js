import { auth, provider } from "@/firebase";
import { Button } from "@mui/material";
import { getAuth, signInWithPopup } from "firebase/auth";
import Head from "next/head";
import React from "react";
import styled from "styled-components";

function Login() {
  const signIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png" />
        <Button variant="outlined" onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
`;
