import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/views/Card";
interface Cards {
  title: string;
  src: string;
}
const arr: Array<Cards> = [
  {
    title: "Nature",
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
  },

  {
    title: "Liverpool",
    src: "https://imageio.forbes.com/specials-images/imageserve/1153850565/Liverpool-Parade-to-Celebrate-Winning-UEFA-Champions-League/960x0.jpg?fit=bounds&format=jpg&width=960",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {arr.map((card, index) => {
          return <Card key={index} src={card.src} title={card.title} />;
        })}
      </header>
    </div>
  );
}

export default App;