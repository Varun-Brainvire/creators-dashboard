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
import { useRouter } from "next/router";

interface DateTypes {
  start: string;
  end: string;
}

const Buttons = (props: { applyGap: boolean , startDate:any, setStartDate:any,endDate:any,setEndDate:any }) => {
  // let dummy ="";
  // console.log(props)
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
  // const [startDate, setStartDate] = useState<any>(new Date());
  // const [endDate, setEndDate] = useState<Date | any>(null);
  const [defaultDate, setDefault] = useState<any>(null);
  const router = useRouter();

  var innerNames;

  const onDateChange = (dates: any) => {
    debugger;
    const [start, end] = dates;
    console.log(dates, "dates");
     props.setStartDate(start);
     props.setEndDate(end);

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
    props.setStartDate(monday);
    props.setEndDate(sunday);
  };

  const handleYesterday = () => {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    props.setStartDate(today);
    props.setEndDate(today);
  };

  const handleLastWeek = () => {
    const now = new Date();
  };

  const handleLastMonth = () => {
    const now = new Date();

    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    props.setStartDate(firstDayOfMonth);

    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    props.setEndDate(lastDayOfMonth);

    console.log(lastDayOfMonth);
  };

  const handleChange = (value: string) => {
    console.log(value);
    innerNames = value;
    handleYesterday();
    setSelectedValue(innerNames);
    console.log(selectedValue, "isSelected");
    console.log(innerNames === selectedValue);

    isSelect(innerNames === selectedValue);
  };

  return (
    <ButtonContainer
      applyGap={props.applyGap}
      scroll={`${router.route == "/" ? "true" : "false"}`}
    >
      <Button
        $isSelected={select}
        onClick={(e) => {
          handleChange(e.target.innerText);
        }}
        value="Yesterday"
      >
        Yesterday
      </Button>
      <Button
        $isSelected={select}
        onClick={(e) => {
          handleChange(e.target.innerText);
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
          startDate={props.startDate}
          endDate={props.endDate}
          selected={props.startDate}
          dateFormat="d MMM"
          selectsRange
          onChange={onDateChange}
          value={props.startDate}
          calendarClassName="rasta-stripes"
          wrapperClassName="datePicker"
        />
      </Wrapper>
    </ButtonContainer>
  );
};

export default Buttons;
