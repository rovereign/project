import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const BackgroundContainer = styled.div`
  background: #71b667;
  width: 280px;
  height: 700px;
`;

export const UserLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const UsernameText = styled.h2`
  margin: 0px 20px;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  padding: 10px 30px;
`;

export const NavLogo = styled.img`
  width: 40px;
  height: 40px;
`;

export const NavLinks = styled(LinkRouter)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  margin-left: 20px;
`;
