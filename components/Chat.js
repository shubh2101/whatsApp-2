import { auth } from "@/firebase";
import getRecipientEmail from "@/utils/getRecipientEmail";
import { Avatar } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

function Chat({ id, users }) {
  const [user] = useAuthState(auth);
  const reciepientEmail = getRecipientEmail(users, user);
  return (
    <Container>
      <UserAvatar />
      <p>{reciepientEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 10px;
  margin-right: 15px;
`;
