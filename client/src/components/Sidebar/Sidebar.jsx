import React from "react";
import {
  BackgroundContainer,
  UserLogo,
  SidebarContainer,
  NavLinks,
  UserWrapper,
  UsernameText,
  NavWrapper,
  NavLogo,
} from "./SidebarElements";

const Sidebar = () => {
  return (
    <BackgroundContainer>
      <SidebarContainer>
        <UserWrapper>
          <UserLogo src='./user.png' alt='userlogo' />
          <UsernameText>Farmer</UsernameText>
        </UserWrapper>
        <NavWrapper>
          <NavLogo src='/harvest.png' />
          <NavLinks to='/harvest'>Manage Harvest</NavLinks>
        </NavWrapper>
        <NavWrapper>
          <NavLogo src='/village.png' />
          <NavLinks to='/demand'>View Demand</NavLinks>
        </NavWrapper>
        <NavWrapper>
          <NavLogo src='./user.png' />
          <NavLinks to='/profile'>Profile Settings</NavLinks>
        </NavWrapper>
      </SidebarContainer>
    </BackgroundContainer>
  );
};

export default Sidebar;
