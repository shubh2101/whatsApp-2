import { Avatar, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import * as EmailValidator from "email-validator";
import { addChatUsers, chatAlreadyExists } from "@/firebase-calls";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { collection, query, where } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from "./Chat";

function SideBar() {
  const [user] = useAuthState(auth);
  const userChatRef = query(
    collection(db, "chats"),
    where("users", "array-contains", user.email)
  );
  const [chatSnapshot] = useCollection(userChatRef)

  const createChat = async () => {
    const input = prompt(
      "Please enter an email address for the user you wish to chat with"
    );

    const isChatExists = await chatAlreadyExists(user.email, input);

    if (!input) return null;

    if (
      EmailValidator.validate(input) &&
      !isChatExists &&
      input !== user.email
    ) {
      addChatUsers([user.email, input]);
    }
    if (isChatExists) {
      console.log("sorry about that: chat already exists");
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>
      <SideBarButton onClick={createChat}>Start a new chat</SideBarButton>
      {chatSnapshot?.docs.map((chat)=> (
        <Chat key={chat.id} id ={chat.id} users={chat.data().users} />
      ))}
    </Container>
  );
}

export default SideBar;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid whitesmoke;
  background-color: white;
  height: 80px;
`;

const IconsContainer = styled.div``;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  border: none;
  outline-width: 0;
  flex: 1;
`;

const SideBarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
