import react from 'react'
import "style/calendar.scss"
export default function Calendar(){
    return(
<div className="calendar">
  <ol className="day-names">
    <li>
      Sunday
    </li>
    <li>
      Monday
    </li>
    <li>
      Tuesday
    </li>
    <li>
      Wednesday
    </li>
    <li>
      Thursday
    </li>
    <li>
      Friday
    </li>
    <li>
      Saturday
    </li>
  </ol>
  <ol className="days">
    <li>
      <div className="date">
        1
      </div>
      <div className="event">
        Event with Long Name
      </div>
    </li>
    <li>
      <div className="date">
        2
      </div>
    </li>
    <li>
      <div className="date">
        3
      </div>
    </li>
    <li>
      <div className="date">
        4
      </div>
    </li>
    <li>
      <div className="date">
        5
      </div>
    </li>
    <li>
      <div className="date">
        6
      </div>
    </li>
    <li>
      <div className="date">
        7
      </div>
    </li>
    <li>
      <div className="date">
        8
      </div>
    </li>
    <li>
      <div className="date">
        9
      </div>
    </li>
    <li>
      <div className="date">
        10
      </div>
    </li>
    <li>
      <div className="date">
        11
      </div>
    </li>
    <li>
      <div className="date">
        12
      </div>
    </li>
    <li>
      <div className="date">
        13
      </div>
      <div className="event all-day begin span-2">
        Event Name
      </div>
    </li>
    <li>
      <div className="date">
        14
      </div>
    </li>
    <li>
      <div className="date">
        15
      </div>
      <div className="event all-day end">
        Event Name
      </div>
    </li>
    <li>
      <div className="date">
        16
      </div>
    </li>
    <li>
      <div className="date">
        17
      </div>
    </li>
    <li>
      <div className="date">
        18
      </div>
    </li>
    <li>
      <div className="date">
        19
      </div>
    </li>
    <li>
      <div className="date">
        20
      </div>
    </li>
    <li>
      <div className="date">
        21
      </div>
      <div className="event">
        Event Name
      </div>
      <div className="event">
        Event Name
      </div>
    </li>
    <li>
      <div className="date">
        22
      </div>
      <div className="event span-2">
        Event with Longer Name
      </div>
    </li>
    <li>
      <div className="date">
        23
      </div>
      <div className="event clear">
        &nbsp;
      </div>
      <div className="event">
        Event Name
      </div>
    </li>
    <li>
      <div className="date">
        24
      </div>
    </li>
    <li>
      <div className="date">
        25
      </div>
    </li>
    <li>
      <div className="date">
        26
      </div>
    </li>
    <li>
      <div className="date">
        27
      </div>
    </li>
    <li>
      <div className="date">
        28
      </div>
    </li>
    <li>
      <div className="date">
        29
      </div>
    </li>
    <li>
      <div className="date">
        30
      </div>
    </li>
    <li>
      <div className="date">
        31
      </div>
    </li>
    <li className="outside">
      <div className="date">
        1
      </div>
    </li>
    <li className="outside">
      <div className="date">
        2
      </div>
    </li>
    <li className="outside">
      <div className="date">
        3
      </div>
    </li>
    <li className="outside">
      <div className="date">
        4
      </div>
    </li>
  </ol>
</div>
    )

}