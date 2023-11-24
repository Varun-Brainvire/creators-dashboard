import styled from "styled-components";
import DatePicker from "react-datepicker";

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
};

export const Button = styled.button`
  font-family: "Strawford", sans-serif;
  background-color: white;
  border-radius: 20px;
  margin: 8px;
  padding: 10px;
  white-space: nowrap;
  /* float: right; */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  justify-content: center;
  margin: auto;
  /* height: 122vh; */
  /* align-items: center; */
  /* width: 70%; */
  max-width: 1440px;
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
`;

export const DatePickerInput = styled(DatePicker)`
  font-family: "Strawford", sans-serif;
  background-color: white;
  border-radius: 20px;
  margin: 8px;
  padding: 10px;
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
  margin: 10px;
  height: 57vh;
  -webkit-box-shadow: 0px 0px 22px -10px rgba(130, 120, 130, 1);
  -moz-box-shadow: 0px 0px 22px -10px rgba(130, 120, 130, 1);
  box-shadow: 0px 0px 22px -10px rgba(130, 120, 130, 1);

  @media (max-width: 576px) {
    flex: ${({ sizeSm }) => sizeSm};
    border-radius: 0px;
  }

  @media (max-width: 768px) {
    flex: ${({ sizeMd }) => sizeMd};
    border-radius: 0px;
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
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #efefef;
`;

export const TitleDiv = styled.div`
  p {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    font-size: 12px;
    background-color: #f4f0ec;
  }
`;

export const SekDiv = styled.div`
  p {
    font-size: 15px;
  }
  span {
    font-size: 10px;
  }
`;
export const MainWrapper = styled.div`
  max-height: 47.5vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    background: #f1f1f1;
  }
`;

export const TitleContainer = styled.div`
  border-color: #0668be;
`;
