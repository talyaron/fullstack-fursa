import { useState } from "react";
import "./App.scss";

//components
import Card from "./view/components/card/Card";

const students: Array<Place> = [
  {
    name: "Saleem",
    place: "Mashad",
    img: "https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1",
  },
  {
    name: "Mona",
    place: "Nazereth",
    img: "https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200",
  },
  {
    name: "Saleem",
    place: "Mashad",
    img: "https://i0.wp.com/www.hoshvilim.com/wp-content/uploads/2009/08/757.jpg?resize=465%2C330&ssl=1",
  },
  {
    name: "Mona",
    place: "Nazereth",
    img: "https://img.haarets.co.il/img/1.9037848/4234772148.jpg?width=1200&height=1200",
  },
];

interface Place {
  name: string;
  place: string;
  img: string;
}

function App() {
  const [genralCounter, setGeneralCounter] = useState(0);
  const [info, setInfo] = useState({ text: "", phone: "" });

  function handleTextInput(ev: any) {
    console.log(ev.target.value);
    setInfo({ ...info, text: ev.target.value });
  }

  function handlePhoneInput(ev: any) {
    setInfo({ ...info, phone: ev.target.value });
  }

  function handleSubmit(ev: any) {
    ev.preventDefault();
    console.dir(ev);
    const form = ev.target;
    const obj: any = {};
    for (let i = 0; i < form.length; i++) {
      console.log(form[i].value, form[i].name, form[i].type);
      if (form[i].type !== "submit") {
        obj[form[i].name] = form[i].value;
      }
    }
    console.log(obj);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Number of counts:{genralCounter}</h1>
        <h2>Enter info</h2>
        <input type="text" name="" id="" onBlur={handleTextInput} />
        <input
          type="text"
          placeholder="phone number"
          onBlur={handlePhoneInput}
        />
        <p>{info.text}</p>
        <p>{info.phone}</p>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" />
          <input type="text" name="phone" placeholder="phone number" />
          <input type="email" name="email" placeholder="email"/>
          <button type="submit"></button>
        </form>
        <h2>Places</h2>
        {students.map((student, index) => {
          const { name, place, img } = student; //deconstractor

          return (
            <Card
              key={index}
              info={{ name, place, img }}
              setGeneralCounter={setGeneralCounter}
              genralCounter={genralCounter}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
