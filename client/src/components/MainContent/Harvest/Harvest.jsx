import React from "react";
import { Container, VegetableWrapper, VegatableLogo, VegetableContentWrapper } from "./HarvestElements";

const Harvest = () => {
  return (
    <Container>
      <VegetableWrapper>
        <VegatableLogo src='/spinach.png' alt='spinach' />
        <VegetableContentWrapper>
          spinach
          {/* <TopSection></TopSection>
          <MiddleSection></MiddleSection>
          <BottomSection></BottomSection> */}
        </VegetableContentWrapper>
      </VegetableWrapper>
      <VegetableWrapper>
        <VegatableLogo src='/kale.png' alt='kale' />
        <VegetableContentWrapper>kale</VegetableContentWrapper>
      </VegetableWrapper>
      <VegetableWrapper>
        <VegatableLogo src='/lettuce.png' alt='lettuce' />
        <VegetableContentWrapper>lettuce</VegetableContentWrapper>
      </VegetableWrapper>
    </Container>
  );
};

export default Harvest;
