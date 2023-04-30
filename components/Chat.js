import { auth, db } from "@/firebase";
import getRecipientEmail from "@/utils/getRecipientEmail";
import { Avatar } from "@mui/material";
import { collection, query, where } from "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";

function Chat({ id, users }) {
  const [user] = useAuthState(auth);
  const reciepientEmail = getRecipientEmail(users, user);
  const recEmailRef = query(
    collection(db, "users"),
    where("email", "==", getRecipientEmail(users, user))
  );
  const [recipientSnapshot] = useCollection(recEmailRef);
  const recipient = recipientSnapshot?.docs?.[0]?.data();
 
  return (
    <Container>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{reciepientEmail[0]}</UserAvatar>
      )}

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
