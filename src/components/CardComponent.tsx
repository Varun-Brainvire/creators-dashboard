import React, { useState } from "react";
import {
  HeadingAndArrowDiv,
  MainWrapper,
  OneCardComponent,
  PercentageDiv,
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
import Arrow from "../../public/reshot-icon-arrow-chevron-right-WDGHUKQ634.svg";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  percent: number;
  cvrPercent: number;
}

interface Post {
  id: number;
  title: string;
  price: number;
  flag: string;
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
          <HeadingAndArrowDiv>
            <OneCardComponent>{props.title}</OneCardComponent>
            <Image src={Arrow} alt="arrow" />
          </HeadingAndArrowDiv>
        </StyledLink>
      </StickyTitle>
      <MainWrapper>
        {props.productData.map((details) => {
          if (details.flag === "product") {
            return (
              <>
                <ProductContent className="topProducts">
                  <Image src={image} height={50} width={50} alt="hi" />
                  <TitleDiv>
                    <p>{details.name}</p>
                    <ProductNameDiv>
                      <PercentageDiv>{details.percent + "%"}</PercentageDiv>
                      <span>{details.type}</span>
                    </ProductNameDiv>
                  </TitleDiv>
                  <SekDiv>
                    <p>SEK 625</p>
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
                <ProductContent className="topPosts">
                  <Image src={PostImage} height={40} width={40} alt="post" />
                  <TitleDiv>
                    <p>{details.title}</p>
                    {/* <span>{details.price}</span> */}
                  </TitleDiv>
                  <SekDiv>
                    <p>{details.price}</p>
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
                <ProductContent className="topStores">
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
