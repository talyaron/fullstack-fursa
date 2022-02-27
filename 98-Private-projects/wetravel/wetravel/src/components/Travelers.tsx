import { travelers } from "../components/Mainpage";
import "../components/Travelers.scss";
function Travelers(prop: travelers) {
  return (
    <div className="traveler">
      <img src={prop.imgUrl} />
      <h2>{prop.name}</h2>
      <h3>{prop.country}</h3>
      <h3>Followers :{prop.followers}</h3>
    </div>
  );
}
export default Travelers;
