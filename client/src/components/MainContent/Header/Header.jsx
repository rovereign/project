import React from "react";
import { Container, TitleSection, NeighbourhoodText, NeighbourhoodWrapper } from "./HeaderElements";
import NeighbourhoodDropDown from "./Neighbourhood/Neighbourhood";

const Header = () => {
  return (
    <Container>
      <TitleSection>Edit Harvest Capacity</TitleSection>
      <NeighbourhoodWrapper>
        <NeighbourhoodText>Select neighbourhood:</NeighbourhoodText>
        <NeighbourhoodDropDown />
      </NeighbourhoodWrapper>
    </Container>
  );
};

export default Header;
