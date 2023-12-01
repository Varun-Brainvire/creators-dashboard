import React, { useState } from "react";
import {
  CommonDivCard,
  HeadingAndArrowDiv,
  ImageAndTitleDiv,
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
import { useRouter } from "next/router";

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
  // console.log(props, "Inside Card Component");

  const [data, setData] = useState({});

  props.productData.map((items: any) => {
    // console.log(items, "items");
    // setData(items.flag)
  });

  const router = useRouter();
  // console.log(router, "ROUTER");

  return (
    <>
      <StickyTitle>
        <StyledLink href={props.title.replace(/\s/g, "").toLowerCase()}>
          <HeadingAndArrowDiv>
            <OneCardComponent>{props.title}</OneCardComponent>
            {router.route == "/" ? <Image src={Arrow} alt="arrow" /> : ""}
          </HeadingAndArrowDiv>
        </StyledLink>
      </StickyTitle>
      <MainWrapper height={props.height}>
        {props.productData.map((details) => {
          if (details.flag === "product") {
            return (
              <>
                <CommonDivCard>
                  <ImageAndTitleDiv forProductDetails={true}>
                    <Image src={image} height={50} width={50} alt="hi" />
                    <TitleDiv forDashBoard={true}>
                      <p>{details.name}</p>
                      <ProductNameDiv>
                        <PercentageDiv>{details.percent + "%"}</PercentageDiv>
                        <span>{details.type}</span>
                      </ProductNameDiv>
                    </TitleDiv>
                  </ImageAndTitleDiv>
                  <SekDiv>
                    <p>SEK 625</p>
                    <span style={{ fontWeight: "10px" }}>
                      CVR {details.cvrPercent + "%"}{" "}
                    </span>
                  </SekDiv>
                </CommonDivCard>
              </>
            );
          }
          if (details.flag === "post") {
            return (
              <CommonDivCard>
                {router.route == "/topposts" ? (
                  <ImageAndTitleDiv
                    className="topPosts"
                    forProductDetails={true}
                    width={true}
                  >
                    <Image src={PostImage} height={40} width={40} alt="post" />
                  </ImageAndTitleDiv>
                ) : (
                  <ImageAndTitleDiv
                    className="topPosts"
                    forProductDetails={true}
                  >
                    <Image src={PostImage} height={40} width={40} alt="post" />
                  </ImageAndTitleDiv>
                )}
                {router.route == "/topposts" ? (
                  <TitleDiv forDashBoard={true} width={false}>
                    <p>{details.title}</p>
                  </TitleDiv>
                ) : (
                  <TitleDiv forDashBoard={true} width={true}>
                    <p>{details.title}</p>
                  </TitleDiv>
                )}

                <SekDiv>
                  <p>{details.price}</p>
                </SekDiv>
              </CommonDivCard>
            );
          }

          if (details.flag === "stores") {
            return (
              <>
                <CommonDivCard>
                  <TitleDiv>
                    <p>{details.storeName}</p>
                  </TitleDiv>
                  <SekDiv>
                    <p style={{ margin: "0px", fontWeight: "12px" }}>
                      {details.price}
                    </p>
                  </SekDiv>
                </CommonDivCard>
              </>
            );
          }
        })}
      </MainWrapper>
    </>
  );
};

export default CardComponent;
