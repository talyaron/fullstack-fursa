import { isPropertySignature } from "typescript";

interface BarProp {
    title: string;
    subtitle: string;
  }

function Bar(prop: BarProp) {
    return (
      <div className="bar">
        <button>
        <p>{prop.title}</p>
        <p>{prop.subtitle}</p>
        </button>
      </div>
    );
  }
  
  export default Bar;
  