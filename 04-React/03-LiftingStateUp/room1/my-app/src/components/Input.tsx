import React from "react";
import { useState } from "react";
import "../components/Input.scss";

function Input() {
  const [Sentance, setSentance] = useState("");
  const [Arrinput, SetArrinput] = useState<Array<{ value: string }>>([]);

  function handleChange(e: any) {
    setSentance(e.target.value);
  }

  function handleSubmit(ev: any) {
    ev.preventDefault();

    if (Sentance) {
      SetArrinput([...Arrinput, { value: Sentance }]);
      setSentance('');
      ev.target.reset()
    }
    console.log(Arrinput);
  }
  return (
    <div>
      <div className="ResMessage">
        {Arrinput.map((elemnent, index) => {
          return <div key={index}>{elemnent.value}</div>;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" defaultValue={Sentance} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Input;
