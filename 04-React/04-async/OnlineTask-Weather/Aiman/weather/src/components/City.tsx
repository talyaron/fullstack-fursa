import { useEffect, useState } from "react";
import { weather } from "../App";
import '../components/City.scss'
const api = {
  key: "07532edf67c74158bf3194746221502",
  base: "http://api.weatherapi.com/v1/current.json?key=07532edf67c74158bf3194746221502",
};
function City(prop: weather) {

  const { city,src } = prop;
  console.log(city);
  const [temp, setTemp] = useState<{temp_c: string; temp_f: string}>();
  useEffect(() => {
    const fetch_by_city = async () => {
      try {
        const data2 = await fetch(`${api.base}&q=${city}&aqi=no`)
          .then((response) => response.json())
          .then((res) =>
            setTemp({ temp_c: res.current.temp_c, temp_f: res.current.temp_f })
          );
      } catch (err) {
        console.log(err);
      }
    };
    fetch_by_city();
  }, []);
  return (
    <div className="card" style={{backgroundImage:`url(${src})`,backgroundSize:'cover'}}>
      <h1>{city}</h1>
      <h2>{temp?.temp_c}C</h2>
      <h2>{temp?.temp_f}F</h2>
    </div>
  );
}
export default City;
