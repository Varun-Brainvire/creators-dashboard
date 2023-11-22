import styled from "styled-components";
import DatePicker from "react-datepicker";

export const Button = styled.button`
  font-family: "Strawford", sans-serif;
  background-color: white;
  border-radius: 20px;
  margin: 8px;
  padding: 10px;
  /* float: right; */

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`

export const ButtonContainer = styled.div`
    height: 32px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .rdrMonths {
      .rdrStartEdge, .rdrInRange {
        background: red !important;
      }
    }
`

export const DatePickerDiv = styled.div`
  float: right;
  border-radius: 10px;
`

export const DatePickerInput = styled(DatePicker)`
    font-family: "Strawford", sans-serif;
  background-color: white;
  border-radius: 20px;
  margin: 8px;
  padding: 10px;
`
export const ProductComponent = styled.div`
  
`

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