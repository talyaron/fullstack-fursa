import Rola from "../Images/Rola.jpeg";
import "./Header.scss";
interface headerProp {
  page: string;
}
function Header(prop: headerProp) {
  return (
    <div className="header ">
      <div className="menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <h3>
        <span style={{ color: "#ff4500" }}>{prop.page}</span>{" "}
      </h3>
      <div className="flex">
        <img src={Rola} />
      </div>
    </div>
  );
}

export default Header;
