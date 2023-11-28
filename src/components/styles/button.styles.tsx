import styled from "styled-components";
import DatePicker from "react-datepicker";
import Link from "next/link";

type ColumnProps = {
  size?: number;
  sizeSm?: number;
  sizeMd?: number;
  sizeLg?: number;
  sizeXl?: number;
  flex?: string;
  flexDirection?: string;
  marginTop?: number;
  marginLeft?: number;
  margin?: boolean;
  height?: boolean;
};

export const Button = styled.button<{ $isSelected?: boolean }>`
  font-family: "Strawford", sans-serif;
  background-color: white;
  border-radius: 20px;
  margin: 8px;
  padding: 0px 14px;
  height: 39px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  /* float: right; */
  color: ${({ $isSelected }) => ($isSelected ? "#3A3A3A" : "#9D9D9D")};
  border: ${({ $isSelected }) =>
    $isSelected ? "2px solid #3A3A3A" : "1px solid #9D9D9D"};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  justify-content: center;
  margin: 0 13%;
  /* height: 122vh; */
  /* align-items: center; */
  /* width: 70%; */
  /* max-width: 1440px; */
`;

export const ButtonContainer = styled.div`
  /* height: 32px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 31px;
  flex-wrap: nowrap;
  overflow-x: auto;
  .rdrMonths {
    .rdrStartEdge,
    .rdrInRange {
      background: red !important;
    }
  }
  /* max-height: 47.5vh; */
  /* overflow-x: scroll; */

  &::-webkit-scrollbar {
    /* width: 1px; */
    background: #f1f1f1;
  }

  @media (max-width: 576px) {
    overflow-x: scroll;
    justify-content: flex-start;
    /* border-radius: 0px; */
  }

  @media (max-width: 768px) {
    overflow-x: scroll;
    justify-content: flex-start;
    /* border-radius: 0px; */
  }
`;

export const DatePickerDiv = styled.div`
  float: right;
  border-radius: 10px;
  border-color: #3a3a3a;
  font-size: medium;
`;

export const DatePickerInput = styled(DatePicker)`
  font-family: "Strawford", sans-serif;
  background-color: white;
  border-radius: 20px;
  margin: 8px;
  padding: 10px;
  font-weight: 500;
  border-color: #3a3a3a;
  font-size: 14px;
`;

export const ProductComponentDiv = styled.div`
  margin-top: 16px;
  /* border: 1px solid black; */
  /* margin: 50px; */
  /* padding: 50px; */
  height: 360px;
  width: 90.3%;
  /* background-color: #efefef; */
  /* height:100px; */
`;

export const Wrapper = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range {
    background-color: #34554a;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    background-color: #34554a;
  }
`;

export const Columns = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    padding: 5% 0 5% 0;
  }
`;

export const Column = styled.div<ColumnProps>`
  flex: ${({ size }) => size};
  flex-direction: ${({ flexDirection }) => flexDirection};
  margin-top: ${({ marginTop }) => marginTop + `px`};
  /* margin-left: ${({ marginLeft }) => marginLeft + `px`}; */
  /* border:1px solid black; */
  border-radius: 5px;
  margin-left: ${({ margin }) => (margin ? "224px" : "0px 150px")};
  height: ${({ height }) => (height ? "57vh" : "")};
  min-width: 33%;
  -webkit-box-shadow: 0px 0px 22px -10px rgba(130, 120, 130, 1);
  -moz-box-shadow: 0px 0px 22px -10px rgba(130, 120, 130, 1);
  box-shadow: 0px 0px 22px -10px rgba(130, 120, 130, 1);

  @media (max-width: 576px) {
    flex: ${({ sizeSm }) => sizeSm};
    border-radius: 0px;
    margin-top: ${({ marginTop }) => marginTop + `%`};
    margin-left: ${({ marginLeft }) => marginLeft};
  }

  @media (max-width: 768px) {
    flex: ${({ sizeMd }) => sizeMd};
    border-radius: 0px;
    margin-top: ${({ marginTop }) => marginTop + `%`};
    margin-left: ${({ marginLeft }) => marginLeft};
  }

  @media (max-width: 992px) {
    flex: ${({ sizeLg }) => sizeLg};
    border-radius: 0px;
  }

  @media (max-width: 1200px) {
    flex: ${({ sizeXl }) => sizeXl};
    border-radius: 0px;
  }
`;

export const OneCardComponent = styled.p`
  font-size: 22px;
  padding: 20px;
  line-height: 26.5px;
  border-bottom: 0.8px solid #efefef;
  margin: 0px;
  color: black;
`;

export const CardsComponentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
`;

export const ProductContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-bottom: 1px solid #efefef;

  &.topProducts {
    padding: 10px 20px 10px 20px;
    /* justify-content: space-evenly; */
  }

  &.topPosts {
    padding: 15px 20px 15px 20px;
  }

  &.topStores {
    padding: 25px 24px 25px 24px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  width: 50%;

  flex-direction: column;
  /* flex-direction: column; */
  p {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0px;
  }
  span {
    font-size: 12px;
  }
`;

export const SekDiv = styled.div`
  p {
    font-size: 15px;
    margin: 0;
    line-height: normal;
    font-style: normal;
    font-weight: 500;
    color: #000;
  }
  span {
    font-size: 10px;
  }
`;
export const MainWrapper = styled.div`
  /* max-height: 47.5vh; */
  max-height: ${({ height }) => (height ? "" : "47.5vh")};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    background: #f1f1f1;
  }
`;

export const TitleContainer = styled.div`
  border-color: #0668be;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const OperationButtons = styled.button`
  font-family: "Strawford", sans-serif;
  background-color: white;
  border-radius: 20px;
  margin: 8px;
  padding: 10px;
  white-space: nowrap;
`;

export const OperationButtonsContainer = styled.div`
  display: flex;
  /* background-color: red; */
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 31px;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 450px;
  .rdrMonths {
    .rdrStartEdge,
    .rdrInRange {
      background: red !important;
    }
  }
  /* max-height: 47.5vh; */
  /* overflow-x: scroll; */

  @media (max-width: 576px) {
    overflow-x: scroll;
    justify-content: flex-start;
    background-color: red;
    /* border-radius: 0px; */
  }

  @media (max-width: 768px) {
    overflow-x: scroll;
    justify-content: flex-start;
    /* border-radius: 0px; */
  }
`;

export const CombineButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0px 150px;
  justify-content: space-between;
`;

export const ProductNameDiv = styled.div`
  display: flex;
  align-items: center;
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    margin-left: 5px;
  }
`;

export const StickyTitle = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
`;

export const PercentageDiv = styled.div`
  background-color: rgba(244, 240, 236, 1);
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #3a3a3a;
  padding: 0.3rem 0;
  white-space: nowrap;
`;

export const HeadingAndArrowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px 0px 0px;
`;

export const ProductDetailPageArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
