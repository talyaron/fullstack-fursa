import React, {useState} from "react";
import './App.css';
import Ajv from "ajv";
const ajv = Ajv();

function App()
{
    const[ city, setcity] = useState("");
    const[ temp, settemp] = useState("");
    const[ temp_max, settemp_max] = useState("");
    const[ temp_min, settemp_min] = useState("");
    const[ search, setSearch] = useState("");

    const CitySchema = {
      type: "array",
      properties: {
        temp: { type: "number" },
        temp_min: { type: "number" },
        temp_max: { type: "number" },
      },
      required: ["temp", "temp_min","temp_max"],
      additionalProperties: false,
    };
    
    const dataSchema = {
      type: "object",
      items: CitySchema,
    };
    const validate = ajv.compile(dataSchema);
    
  function findCity() {
      
        return new Promise((resolve, reject) => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4ebb9418ca605fa1931880e565ec065c`)
              .then((response) => response.json())
              .then((dataDB) => {
                const valid = validate(dataDB);
                console.log(valid);
                if (valid) resolve(dataDB)
                else reject(validate.errors);
              })
              .catch((err) => {
                reject(err);
              });
          });
        }
    function setData()
    {
        findCity().then((whetherDB: any) => {
            settemp(whetherDB.main.temp);
        settemp_max(whetherDB.main.temp_max);
        settemp_min(whetherDB.main.temp_min);
        setcity(search);
        console.log(temp_max)

            console.log(whetherDB);
           
          }).catch(err=>{
            console.log(err)
          });
    }

    return (
        <div className="box">
            <div className="InputData">
                <h2>insert your city</h2>
                <input 
                value={search}
                type="search"
                
                className="InputField"
                onChange = { (event) => {
                    setSearch(event.target.value)

                }} 
                
                 />
                 <input 
                 value="Submit"
                type="button"
                className="btn"
                onClick = {setData}

                 />

            {
                !city?
                (   <div>
                    <h3><b>No Data Found</b></h3>
      
            </div>
                ) :
                (
                    <div>
                   
                    <h1 className="temp">
                   curernt temp  {temp}
                    </h1>
                    <h3 className="tempmin_max">min temp:{temp_min} Cel</h3>          
                    <h3 className="tempmin_max">max temp:{temp_max}Cel</h3>
                
                
                
               
            </div> 

                )
            }

            </div> 
        </div>
    )
}

export default App;