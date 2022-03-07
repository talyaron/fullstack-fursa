import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker() {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [value, onChange] = useState(new Date());
  let dt = new Date('02 15 2020');
  const includeDatesArray = [new Date('02-27-2022'), new Date('02-28-2022')]
  const maxDate = dt.setDate(dt.getDate() + 5);
  //  const date=new Date(any);

  function changeStartDate(date:any){
    // date=>setStartDate(date)
    setStartDate(date);
  }
  function changeEndDate(date:any){
    setEndDate(date);
  }
  const changeDate = (e: any) => {
    setEndDate(e)
  }

  const filterDays = (date:any) => {
      // Disable Weekends
      if (date.getDay() === 0 || date.getDay() === 6) {
          return false;
      } else {
          return true;
      }
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <DatePicker
 isClearable
 placeholderText="Select Start Date"
 showTimeSelect
 dateFormat="MMMM d, yyyy h:mmaa"
 selected={startDate}
 selectsStart
 startDate={startDate}
 endDate={endDate}
 includeDates={includeDatesArray}
 filterDate={filterDays}
//  maxDate={maxDate}
 onChange={changeStartDate}
  
/> 
       <DatePicker
 isClearable
 placeholderText="Select End Date"
 showTimeSelect
 dateFormat="MMMM d, yyyy h:mmaa"
 selected={endDate}
 selectsEnd
 startDate={startDate}
 endDate={endDate}
 minDate={startDate}
 includeDates={includeDatesArray}
 filterDate={filterDays}
//  maxDate={maxDate}
 onChange={changeDate}
/>

      </div>
      <div>Selected start date={startDate ? startDate.toString() : null}</div>
      <div>Selected end date={endDate ? endDate.toString() : null}</div>


      {/* <input type="datetime-local" id="meeting-time"
        name="meeting-time"></input> */}
    </div>
  );
}