import {
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
import TopProductData from "../../TopProductData.json";
import svg from "../../public/left-arrow-svgrepo-com.svg";
import Image from "next/image";
import Mobile from "@/components/Mobile";

function Topproducts() {
  const [startDate, setStartDate] = useState<Date | any>(new Date());
  const [endDate, setEndDate] = useState<Date | any>(null);
  return (
    <>
      <TopProductDiv>
        <Mobile heading="Top Products"/>
        <CombineButtonDiv>
          <Buttons applyGap={false} startDate={startDate} setStartDate={setStartDate}  endDate={endDate} setEndDate={setEndDate}/>
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
            productData={TopProductData}
            title="Top Products"
            height={true}
          />
        </Column>
      </TopProductDiv>
    </>
  );
}

export default Topproducts;
