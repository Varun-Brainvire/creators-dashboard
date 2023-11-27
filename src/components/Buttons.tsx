import { useState, useEffect } from "react";
import {
  Button,
  ButtonContainer,
  DatePickerDiv,
  DatePickerInput,
  Wrapper,
} from "@/components/styles/button.styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import format from "date-fns/format";

interface DateTypes {
  start: string;
  end: string;
}

const Buttons = () => {
  // let dummy ="";
  const [dummy, setDummy] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [selectedValue, setSelectedValue] = useState("");
  const [select, isSelect] = useState(false);
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<Date | any>(null);
  const [defaultDate, setDefault] = useState<any>(null);

  var innerNames;

  // useEffect(() => {
  //   const defaultSelected = () => {
  //     debugger
  //     const today = new Date();
  //     const day = today.getDay();
  //     const diff = today.getDate() - day + (day === 0 ? -6 : 1);
  //     console.log(day);
  //     const monday = new Date(today.setDate(diff));

  //     // console.log(format(monday, "do LLL"), "do LLL");
  //     // format(monday,"do LLL")

  //     let formatMonthDate = format(monday, "do LLL");

  //     const sunday = new Date(monday);
  //     sunday.setDate(sunday.getDate() + 6);

  //     let formatSundayDate = format(sunday, "do LLL");

  //     setDummy(formatMonthDate + "-" + formatSundayDate);
  //     console.log(dummy);
  //     setStartDate(monday);
  //     setDefault(sunday);
  //   };
  //   defaultSelected();
  // },[]);

  const onDateChange = (dates: any) => {
    debugger;
    const [start, end] = dates;
    console.log(dates, "dates");
    setStartDate(start);
    setEndDate(end);

    const date = new Date(2009, 10, 10); // 2009-11-10
    const month = date.toLocaleString("default", { month: "short" });
    // setStartDate(date)
    console.log(month);

    let monentDate = moment().format("MMM Do");
    console.log(monentDate);
    // setStartDate(monentDate)
  };

  const handleThisWeekClick = () => {
    const today = new Date();
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    console.log(day);
    const monday = new Date(today.setDate(diff));

    // console.log(format(monday, "do LLL"), "do LLL");
    // format(monday,"do LLL")

    let formatMonthDate = format(monday, "do LLL");

    const sunday = new Date(monday);
    sunday.setDate(sunday.getDate() + 6);

    let formatSundayDate = format(sunday, "do LLL");

    setDummy(formatMonthDate + "-" + formatSundayDate);
    console.log(dummy);
    setStartDate(monday);
    setEndDate(sunday);

    // console.log(monday);
    // console.log(sunday);
  };

  const handleYesterday = () => {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    setStartDate(today);
    setEndDate(today);

    // setStartDate([{today},{today}]);

    //setEndDate(null);
  };

  const handleLastWeek = () => {
    const now = new Date();
  };

  const handleLastMonth = () => {
    const now = new Date();

    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    setStartDate(firstDayOfMonth);

    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    setEndDate(lastDayOfMonth);

    console.log(lastDayOfMonth);
  };

  const handleChange =  (value: string) => {
    console.log(value);
    innerNames = value;
    handleYesterday() 
    setSelectedValue(innerNames);
    console.log(selectedValue,"isSelected");
    console.log(innerNames === selectedValue)

    isSelect(innerNames === selectedValue)
  }

  return (
    <ButtonContainer>
      <Button
      $isSelected={select}
        onClick={(e) => {
          handleChange(e.target.innerText)
        }}
        
        // isSelected
        value="Yesterday"
      >
        Yesterday
      </Button>
      <Button
        $isSelected={select}
        onClick={(e) => {
          handleChange(e.target.innerText)
        }}
        $isSelected={select}
      >
        Last Week
      </Button>
      <Button onClick={handleLastMonth}>Last Month</Button>
      <Button onClick={handleThisWeekClick}>This Week</Button>
      <Wrapper>
        <DatePickerInput
          id="dynamic"
          startDate={startDate}
          endDate={endDate}
          selected={startDate}
          dateFormat="d MMM"
          // onLoad={defaultSelected}
          // inline
          selectsRange
          onChange={onDateChange}
          value={startDate}
          calendarClassName="rasta-stripes"
          wrapperClassName="datePicker"
        />
      </Wrapper>
      {/* <DateRange
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={state}
        onChange={(item) => setState([item.selection])}
        // rangeColors="green"
      /> */}
    </ButtonContainer>
  );
};

export default Buttons;
