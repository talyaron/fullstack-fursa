interface AssignmentProp {
    month:string;
    day:string;
    time:number;
    background:string;
  }
  
  function Assignment(prop: AssignmentProp) {
    return (
      <div className="calendar">
      <div className="month background">{prop.month}</div>
      <div className="day">{prop.day}</div>
      <div className="date">{prop.time}<span className="date-after">th</span></div>
      <div className="time background">{prop.background}</div>
      
    </div>
    );
  }
  
  export default Assignment;
  