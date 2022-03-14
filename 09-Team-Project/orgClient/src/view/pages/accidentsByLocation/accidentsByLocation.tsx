import React, { useState } from 'react'
import axios from 'axios';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import '../accidentsInfo/AccidentsInfo.scss';
import './accidentsByLocation.scss';
import MenuAppBar from '../../Components/header/appBar';

function AccidenstByLocation() {
  
  interface Accident{
  _id:string,
  type: string,
  emergency : boolean,
  date: string,
  description: string,
}
  const [location,setLocation] = useState("");
  const [accidents,setAccidents]=useState<Array<Accident>>([]);

  async function handleSearchByLocation(e:any){
    e.preventDefault();
    let a:any=await axios.post("/accidents/getAccidenstByLocation", {location:location});
    //const v:any= await axios.get("/accidents/getAllAccidents");
    console.log(a);
    console.log(a.data.accidents);
    setAccidents(a.data.accidents);
  }
  return (
   <div>
      {/* <div className='menu'>
        <HomeIcon sx={{ paddingLeft: '20px', fontSize: 35, paddingTop: '10px' }} />
        <SettingsIcon sx={{ float: 'right', fontSize: 35, paddingRight: '20px', paddingTop: '10px' }} />
      </div> */}
      <MenuAppBar />
    <div className='SearchBar'>

    <SearchIcon/>
    <input type="text" placeholder='search by location' onKeyUp={(e:any)=>{setLocation(e.target.value)}} />

    <button className='searchBtn' onClick={handleSearchByLocation}> Go </button>
    
    </div>
    <div>

    {accidents.map((accident, index) => {
          return (
            <div key={index}>
            <p >id: {accident._id} type:{accident.type} date:{accident.date} description:{accident.description}  </p> 
            </div>
          );
        })}

     </div>

   </div>

  );

}

export default AccidenstByLocation;