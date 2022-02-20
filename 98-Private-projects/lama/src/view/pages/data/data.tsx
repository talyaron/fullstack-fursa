import {useEffect} from 'react';
import axios from 'axios';
import logo from '../../../logo.svg';
import './data.scss';
import { useState } from "react";
// import 'db.json';

function Data() {
    // const [details, setdetails] = useState<Array<{ value: string }>>([]);
    const [details, setdetails] = useState([{ id: 0, name: "", participants:0, cost: 0}]);

 
  function handleAxios(){
    // axios.get('http://localhost:3004/courses').then(({data})=>setdetails(data));
//    console.log(data);
    axios.get('http://localhost:3004/courses/1').then(({data})=>setdetails(data));


    // axios.post('http://localhost:3004/posts',{'title':'bad book'}).then(({data})=>console.log(data));

    //axios.put('http://localhost:3004/posts/2',{'title':'best book', author:'best author'}).then(({data})=>console.log(data));
    // axios.patch('http://localhost:3004/posts/2',{ author:'best ever author'}).then(({data})=>console.log(data));
    // axios.patch('http://localhost:3004/posts/2', {readers:['Jame',"bob", 'alis']}).then(({data})=>console.log(data))

    // axios.delete('http://localhost:3004/posts/3').then(({data})=>console.log(data));
  }

  function Deletedata(){
    axios.get('http://localhost:3004/courses').then(({data})=>console.log(data));
    // axios.patch('http://localhost:3004/posts/2',{ author:'best ever author'}).then(({data})=>console.log(data));
    // axios.patch('http://localhost:3004/posts/2', {readers:['Jame',"bob", 'alis']}).then(({data})=>console.log(data))

    // axios.delete('http://localhost:3004/posts/3').then(({data})=>console.log(data));


  }


  const numbers = ['course1','course2','course3'];
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  return (
      
 <div>

     <p>courses</p>
     <p>{listItems}</p>
<div>
  <p>aaaaaaaa</p>
     {/* <p>{details}</p> */}
     {details.map((data, key) => {
          return (
            <div key={key}>
              {data.id +
                " , " +
                data.name +
                " ," +
                data.participants +
                ", " +
                data.cost}
            </div>
          );
        })}
     </div>

      
        <button onClick={handleAxios}>Activate</button>
        <button onClick={Deletedata}>Delete</button>

        {/* <p>the course details : {details}</p>  */}
        </div>
  );
}

export default Data;
