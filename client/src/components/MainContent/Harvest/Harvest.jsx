import React from "react";
import {
  Container,
  VegetableWrapper,
  VegatableLogo,
  VegetableContentWrapper,
  TopSection,
  MiddleSection,
  BottomSection,
  TitleStyle,
  NeighbourhoodDemandTitle,
  FarmerProductionTitle,
} from "./HarvestElements";

const Harvest = () => {
  return (
    <Container>
      <VegetableWrapper>
        <VegatableLogo src='/spinach.png' alt='spinach' />
        <VegetableContentWrapper>
          <TopSection>
            <TitleStyle>Spinach</TitleStyle>
            <NeighbourhoodDemandTitle>Total Neighbourhood Demand : 25kg</NeighbourhoodDemandTitle>
          </TopSection>
          <MiddleSection>Bar Chart</MiddleSection>
          <BottomSection>
            <FarmerProductionTitle>Your current produce : 5kg</FarmerProductionTitle>
          </BottomSection>
        </VegetableContentWrapper>
      </VegetableWrapper>
      <VegetableWrapper>
        <VegatableLogo src='/kale.png' alt='kale' />
        <VegetableContentWrapper>
          <TopSection>
            <TitleStyle>Kale</TitleStyle>
            <NeighbourhoodDemandTitle>Total Neighbourhood Demand : 25kg</NeighbourhoodDemandTitle>
          </TopSection>
          <MiddleSection>Bar Chart</MiddleSection>
          <BottomSection>
            <FarmerProductionTitle>Your current produce : 5kg</FarmerProductionTitle>
          </BottomSection>
        </VegetableContentWrapper>
      </VegetableWrapper>
      <VegetableWrapper>
        <VegatableLogo src='/lettuce.png' alt='lettuce' />
        <VegetableContentWrapper>
          <TopSection>
            <TitleStyle>Lettuce</TitleStyle>
            <NeighbourhoodDemandTitle>Total Neighbourhood Demand : 25kg</NeighbourhoodDemandTitle>
          </TopSection>
          <MiddleSection>Bar Chart</MiddleSection>
          <BottomSection>
            <FarmerProductionTitle>Your current produce : 5kg</FarmerProductionTitle>
          </BottomSection>
        </VegetableContentWrapper>
      </VegetableWrapper>
    </Container>
  );
};

export default Harvest;
