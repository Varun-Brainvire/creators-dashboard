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
  // console.log(TopProductData);
  return (
    <CardsComponentContainer>
      {/* <ContentDiv /> */}
      <Columns>
        <Column
          flex={"flex"}
          flexDirection={"column"}
          size={4}
          sizeMd={12}
          sizeLg={12}
          sizeSm={12}
          margin={true}
          height={true}
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

          margin={true}
        >
          <CardComponent productData={TopStores} title="Top Stores" />
        </Column>
      </Columns>
    </CardsComponentContainer>
  );
};

export default ProductComponent;
