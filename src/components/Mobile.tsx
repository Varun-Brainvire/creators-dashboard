import React from "react";
import {
  StyledLink,
  TopNavigationContainer,
  TopNavigationTextAndIcons,
} from "@/components/styles/button.styles";
import Image from "next/image";
import svg from "../../public/left-arrow-svgrepo-com.svg";
import { IoMdClose } from "react-icons/io";

const Mobile = (props: any) => {
  console.log(props, "Heading");
  return (
    <TopNavigationTextAndIcons>
      <StyledLink href="/">
        <Image alt="" src={svg} height={20} width={20} />
      </StyledLink>
      {props.heading == null ? (
        <span>My DashBoard</span>
      ) : (
        <span>{props.heading}</span>
      )}

      <IoMdClose style={{ fontSize: "20px" }} />
    </TopNavigationTextAndIcons>
  );
};

export default Mobile;
