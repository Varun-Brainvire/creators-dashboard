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
  Wrapper,
} from "@/components/styles/button.styles";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
// import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";
import Buttons from "@/components/Buttons";
import CardComponent from "@/components/CardComponent";
import TopProductData from "../../TopProductData.json";
import svg from "../../public/left-arrow-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";

function Topproducts() {
  return (
    <>
      <CombineButtonDiv>
        <Buttons />
        <ProductDetailPageArrowDiv>
          <StyledLink href="/">
            <Image src={svg} alt="arrow svg" height={20} width={20} />
          </StyledLink>
          <OperationButtonsContainer>
            <OperationButtons>Top Products</OperationButtons>
            <OperationButtons>Top Post</OperationButtons>
            <OperationButtons>Top Stores</OperationButtons>
          </OperationButtonsContainer>
        </ProductDetailPageArrowDiv>
      </CombineButtonDiv>

      <Column
        margin={true}
        flex={"flex"}
        flexDirection={"column"}
        size={4}
        sizeMd={12}
        sizeLg={12}
        sizeSm={12}
        height={false}
      >
        <CardComponent productData={TopProductData} title="Top Products" />
      </Column>
    </>
  );
}

export default Topproducts;
