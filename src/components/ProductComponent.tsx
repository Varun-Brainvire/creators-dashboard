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
import TopPost from "../../TopPostData.json";
import TopStores from "../../TopStoresData.json";

const ProductComponent = () => {
  return (
    <CardsComponentContainer>
      <Columns>
        <Column
          marginTop={4}
          flex={"flex"}
          flexDirection={"column"}
          size={4}
          sizeMd={12}
          sizeLg={12}
          sizeSm={12}
          height={true}
          margin={true}
        >
          <CardComponent productData={TopProductData} title="Top Products" />
        </Column>
        <Column
          flex={"flex"}
          flexDirection={"column"}
          size={4}
          sizeMd={12}
          sizeLg={12}
          sizeSm={12}
          height={true}
          marginTop={4}
          marginLeft={0}
          margin={true}
        >
          <CardComponent productData={TopPost} title="Top Posts" />
        </Column>
        <Column
          flex={"flex"}
          flexDirection={"column"}
          size={4}
          sizeMd={12}
          sizeLg={12}
          sizeSm={12}
          height={true}
          marginTop={4}
          margin={true}
          marginLeft={0}
        >
          <CardComponent productData={TopStores} title="Top Stores" />
        </Column>
      </Columns>
    </CardsComponentContainer>
  );
};

export default ProductComponent;
