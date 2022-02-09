interface AssignmentProp {
    month:string;
    day:string;
    time:number;
    background:string;
  }
  
  function Assignment(prop: AssignmentProp) {
    return (
      <div class="calendar">
      <div class="month background">{prop.month}</div>
      <div class="day">{prop.day}</div>
      <div class="date">{prop.time}<span class="date-after">th</span></div>
      <div class="time background">{prop.background}</div>
      
    </div>
    );
  }
  
  export default Assignment;
  