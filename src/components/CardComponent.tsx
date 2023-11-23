import React, { useState } from "react";
import {
    MainWrapper,
  OneCardComponent,
  ProductContent,
  SekDiv,
  TitleDiv,
} from "./styles/button.styles";
import Image from "next/image";
import image from "../../public/productimg/curvsoftcurvlong.svg";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  percent: number;
  cvrPercent: number;
}

const CardComponent = (props: Product,title:string) => {
  console.log(props, "Inside Card Component");

  const [data, setData] = useState({});

  props.productData.map((items: any) => {
    console.log(items, "items");

    // setData(items.flag)
  });

  return (
    <>
      <OneCardComponent>{props.title}</OneCardComponent>
      <MainWrapper>
      {props.productData.map((details) => {
        return (
          <>
           
              <ProductContent>
                <Image src={image} height={80} width={80} alt="hi" />
                <TitleDiv>
                  <p style={{ margin: "0px", fontWeight: "2px" }}>
                    {details.name}
                  </p>
                  <span>{details.percent + "%" + " " + details.type} </span>
                </TitleDiv>
                <SekDiv>
                  <p style={{ margin: "0px", fontWeight: "12px" }}>SEK 625</p>
                  <span style={{ fontWeight: "10px" }}>
                    CVR {details.cvrPercent + "%"}{" "}
                  </span>
                </SekDiv>
              </ProductContent>
            
          </>
        );
      })}
      </MainWrapper>
     
    </>
  );
};

export default CardComponent;
