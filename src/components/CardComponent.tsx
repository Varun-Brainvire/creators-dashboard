import React, { useState } from "react";
import {
  MainWrapper,
  OneCardComponent,
  ProductContent,
  ProductNameDiv,
  SekDiv,
  StickyTitle,
  StyledLink,
  TitleDiv,
} from "./styles/button.styles";
import Image from "next/image";
import image from "../../public/productimg/curvsoftcurvlong.svg";
import PostImage from "../../public/postimg/twogirl.png";
import Arrow from "../../public/reshot-icon-arrow-chevron-right-WDGHUKQ634.svg"

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  percent: number;
  cvrPercent: number;
}

interface Post{
  id: number;
  title:string;
  price:number;
  flag:string
}

const CardComponent = (props: Product | Post, title: string) => {
  console.log(props, "Inside Card Component");

  const [data, setData] = useState({});

  props.productData.map((items: any) => {
    console.log(items, "items");

    // setData(items.flag)
  });

  return (
    <>
    <StickyTitle>
      <StyledLink href={props.title.replace(/\s/g, "").toLowerCase()}>
      <OneCardComponent>{props.title}</OneCardComponent>
      </StyledLink>
      {/* <svg>
        <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707">
        </polygon>
      </svg> */}
      {/* {Arrow} */}
    </StickyTitle>
      <MainWrapper height = {true}>
        {props.productData.map((details) => {
          if (details.flag === "product") {
            return (
              <>
                <ProductContent>
                  <TitleDiv>
                  <Image src={image} height={80} width={80} alt="hi" />
                  <ProductNameDiv>
                    <p style={{ margin: "0px", fontWeight: "2px" }}>
                      {details.name}
                    </p>
                    <span>{details.percent + "%" + " " + details.type} </span>
                  </ProductNameDiv>
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
          }
          if (details.flag === "post") {
            return (
              <>
                <ProductContent>
                  <Image src={PostImage} height={50} width={50} alt="post" />
                  <TitleDiv>
                    <p>
                      {details.title}
                    </p>
                    {/* <span>{details.price}</span> */}
                  </TitleDiv>
                  <SekDiv>
                    <p>
                      {details.price}
                    </p>
                    {/* <span style={{ fontWeight: "10px" }}>
                      CVR {details.cvrPercent + "%"}{" "}
                    </span> */}
                  </SekDiv>
                </ProductContent>
              </>
            );
          }

          if (details.flag === "stores") {
            return (
              <>
                <ProductContent>
                  {/* <Image src={PostImage} height={50} width={50} alt="post" /> */}
                  <TitleDiv>
                    <p>{details.storeName}</p>
                    {/* <span>{details.price}</span> */}
                  </TitleDiv>
                  <SekDiv>
                    <p style={{ margin: "0px", fontWeight: "12px" }}>
                      {details.price}
                    </p>
                    {/* <span style={{ fontWeight: "10px" }}>
                      CVR {details.cvrPercent + "%"}{" "}
                    </span> */}
                  </SekDiv>
                </ProductContent>
              </>
            );
          }
        })}
      </MainWrapper>
    </>
  );
};

export default CardComponent;
