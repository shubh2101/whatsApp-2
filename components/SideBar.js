import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";

function SideBar() {
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
      <SideBarButton>Start a new chat</SideBarButton>
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
