import styled from "styled-components";
import DatePicker from "react-datepicker";
import Link from "next/link";

interface Types {
  applyGap?: boolean;
  scroll?: boolean;
  forProductDetails?: boolean;
  paddingapply?: boolean;
  width?: boolean;
}

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
  padding?:boolean
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
  color: ${({ $isSelected }) => ($isSelected ? "#3A3A3A" : "#9D9D9D")};
  border: ${({ $isSelected }) =>
    $isSelected ? "2px solid #3A3A3A" : "1px solid #9D9D9D"};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1320px;
  margin: auto;
  @media only screen and (max-width: 1400px) {
    max-width: 1200px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 1000px;
  }

  @media only screen and (max-width: 1000px) {
    max-width: 770px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 500px) {
    max-width: 90%;
  }
`;

export const ButtonContainer = styled.div<Types>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: ${({ applyGap }) => (applyGap ? "31px" : "0px")};
  flex-wrap: nowrap;
  .rdrMonths {
    .rdrStartEdge,
    .rdrInRange {
      background: red !important;
    }
  }

  overflow-x: ${({ scroll }) => (scroll ? "" : "auto")};

  @media (max-width: 992px) {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      background: #f1f1f1;
    }
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
  height: 360px;
  width: 90.3%;
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
  border-radius: 5px;
  margin-left: ${({ margin }) => (margin ? "10px" : "0px 150px")};
  height: ${({ height }) => (height ? "57vh" : "")};
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

  @media (min-width: 992px) {
    margin: ${({ margin }) =>
      margin ? "4px 10px 10px 10px" : "0px 100px 0px 100px"};
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
  justify-content: space-between;
`;

export const ProductContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #efefef;

  &.topProducts {
    padding: 10px 20px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* justify-content: space-evenly; */
  }

  &.topPosts {
    padding: 15px 20px 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.topStores {
    padding: 25px 24px 25px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TitleDiv = styled.div<Types>`
  display: flex;
  width: ${({ width }) => (width ? "60%" : "66%")};
  flex-direction: column;
  line-height: 21px;
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
  @media (max-width: 992px) {
    width: 33%;
    font-size: 15px;
    font-weight: 500;
  }

  @media (max-width: 576px) {
    width: 33%;
    font-size: 15px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 33%;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const SekDiv = styled.div`
  width: 25%;
  text-align: right;
  p {
    font-size: 14px;
    margin: 0;
    font-style: normal;
    font-weight: 500;
    color: #000;
    line-height: 21px;
  }
  span {
    font-family: Strawford;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (min-width: 992px) {
    font-size: 15px;
    font-weight: 500;
  }

  @media (max-width: 576px) {
    font-size: 15px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    font-weight: 500;
  }
`;

interface Height {
  height: boolean;
}

export const MainWrapper = styled.div<Height>`
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
  padding: 0px 14px;
  height: 39px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  color: #9d9d9d;
  border: 1px solid #9d9d9d;
`;

export const OperationButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  .rdrMonths {
    .rdrStartEdge,
    .rdrInRange {
    }
  }

  @media (max-width: 576px) {
    overflow-x: scroll;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;

export const CombineButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0px 150px;
  justify-content: space-between;
  overflow-x: auto;

  @media (max-width: 768px) {
    overflow-x: auto;
    margin-bottom: 15px;

    &::-webkit-scrollbar {
      height: 5px;
      border-radius: 5px;
      background-color: lightgray;
    }
  }

  @media (max-width: 576px) {
    overflow-x: auto;
    margin-bottom: 15px;

    &::-webkit-scrollbar {
      height: 5px;
      border-radius: 5px;
      background-color: lightgray;
    }
  }
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
  gap: 60px;
  justify-content: space-between;
`;

export const ImageAndTitleDiv = styled.div<Types>`
  width: ${({ width }) => (width ? "0%" : "15%")};
  display: ${({ forProductDetails }) => (forProductDetails ? "flex" : "block")};
  align-items: center;
  gap: ${({ applyGap }) => (applyGap ? "16px" : "10px")};
  padding: ${({ paddingapply }) => (paddingapply ? "10px 32px" : "0px")};
`;

export const CommonDivCard = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 32px;
  border-bottom: 1px solid #dddddd;
`;

export const TopProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0px 32px;
`;

export const TopNavigationContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10.37px;
  padding: 0px 33.19px;
`;

export const TopNavigationTextAndIcons = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0px 31px 0px;

  @media (max-width: 576px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10.37px;
    margin: 5px 0px 31px 0px;
    span {
      color: #000;
      text-align: center;
      font-family: Strawford;
      font-size: 18.67px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  margin: 5px 0px 31px 0px;
`;
