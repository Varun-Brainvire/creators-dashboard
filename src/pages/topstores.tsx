import React from "react";
import {
  Button,
  ButtonContainer,
  Column,
  CombineButtonDiv,
  DatePickerInput,
  OperationButtons,
  OperationButtonsContainer,
  ProductDetailPageArrowDiv,
  StyledLink,
  TopProductDiv,
  Wrapper,
} from "@/components/styles/button.styles";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Buttons from "@/components/Buttons";
import CardComponent from "@/components/CardComponent";
import svg from "../../public/left-arrow-svgrepo-com.svg";
import Image from "next/image";
import TopStores from "../../TopStoresData.json";
import Mobile from "@/components/Mobile";

const Topstores = () => {
  const [startDate, setStartDate] = useState<Date | any>(new Date());
  const [endDate, setEndDate] = useState<Date | any>(null);
  return (
    <>
      <TopProductDiv>
        <Mobile heading="Top Stores" />
        <CombineButtonDiv>
          <Buttons
            applyGap={false}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <ProductDetailPageArrowDiv>
            <StyledLink href="/">
              <Image src={svg} alt="arrow svg" height={20} width={20} />
            </StyledLink>
            <OperationButtonsContainer>
              <StyledLink href="/topproducts">
                <OperationButtons>Top Products</OperationButtons>
              </StyledLink>
              <StyledLink href="/topposts">
                <OperationButtons>Top Post</OperationButtons>
              </StyledLink>
              <StyledLink href="/topstores">
                <OperationButtons>Top Stores</OperationButtons>
              </StyledLink>
            </OperationButtonsContainer>
          </ProductDetailPageArrowDiv>
        </CombineButtonDiv>

        <Column
          padding={true}
          margin={false}
          flex={"flex"}
          flexDirection={"column"}
          size={4}
          sizeMd={12}
          sizeLg={12}
          sizeSm={12}
          height={false}
        >
          <CardComponent
            productData={TopStores}
            title="Top Post"
            height={true}
          />
        </Column>
      </TopProductDiv>
    </>
  );
};

export default Topstores;
