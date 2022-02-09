interface AssignmentProp {
    month:string;
    day:string;
    time:number;
    background:string;
  }
  
  function Assignment(prop: AssignmentProp) {
    const {month, day, time,background} = prop;
    return (
      <div className="calendar">
      <div className="month background">{month}</div>
      <div className="day">{day}</div>
      <div className="date">{time}<span className="date-after">th</span></div>
      <div className="time background">{background}</div>
      
    </div>
    );
  }
  
  export default Assignment;
  