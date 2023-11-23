import React from "react";
import {
  CardsComponentContainer,
  Column,
  Columns,
  OneCardComponent,
  ProductComponentDiv,
} from "./styles/button.styles";
import CardComponent from "./CardComponent";
import TopProductData from "../../TopProductData.json";

const ProductComponent = () => {
  console.log(TopProductData);
  return (
    <CardsComponentContainer>
      {/* <ContentDiv /> */}
      <Columns>
        <Column flex={"flex"} flexDirection={"column"} size={3}>
          <CardComponent productData={TopProductData} title="Top Products" />
        </Column>
        <Column flex={"flex"} flexDirection={"column"} size={3}>
          <CardComponent productData={TopProductData} title="Top Posts" />
        </Column>
        <Column flex={"flex"} flexDirection={"column"} size={3}>
          <CardComponent productData={TopProductData} title="Top Stores" />
        </Column>
      </Columns>
    </CardsComponentContainer>
  );
};

export default ProductComponent;
