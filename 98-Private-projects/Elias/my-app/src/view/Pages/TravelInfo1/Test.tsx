// import React, { useEffect, useRef, useState } from "react";

// interface IProps {
//   open?: boolean;
//   title: string;
// }

// const Test = () => {
//   // const [isOpen, setIsOpen] = useState(true);
//   // const handleFilterOpening = () => {
//   //   setIsOpen((prev) => !prev);
//   // };
//   // const ref = useRef<HTMLDivElement>(null);
//   // useEffect(() => {
//   //   if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
//   //   else setHeight(0);
//   // }, [isOpen]);

//   return (
//     <>
//     <div className="card">
//       {/* <div>
//         <div className="p-3 border-bottom d-flex justify-content-between">
//           <h6 className="font-weight-bold">title</h6>
//           <button type="button" className="btn" onClick={handleFilterOpening}>
//           {!isOpen ? (
//               '▲'
//             ) : (
//               '▼'
//             )}
//           </button>
//         </div>
//       </div>

//       <div className="border-bottom">
//         <div>{isOpen && <div className="p-3">children</div>}</div>
//       </div> */}
//     </div>
//   </>
// );
  
// }

// export default Test

import React, { useState } from 'react'

const Test = () => {
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [IsAdmin, setIsAdmin] = useState("NormalUser");

  const handleSubmit = () => {

    alert(`The name you entered was: ${Fname}`);
    alert(`The name you entered was: ${Lname}`);
    alert(`The name you entered was: ${Email}`);
    alert(`The name you entered was: ${IsAdmin}`);


    // to do --->send to DB 
  }
  

  return (


    <div className='Wrapper'>
      <h1>Admon Panel : Add new Users</h1>

      <form action="submit" method="get" id="UserInfo">
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" placeholder="First Name" value={Fname} onChange={(e:any) => setFname(e.target.value)}></input>
        <br></br>
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" placeholder="Last name"value={Lname}  onChange={(e:any) => setLname(e.target.value)}></input>
        <br></br>
        <label htmlFor="Email">Email:</label>
        <input type="text" id="Email" name="Email" placeholder="Email" value={Email}  onChange={(e:any) => setEmail(e.target.value)}></input>
        <br></br>
        <input type="checkbox" id="AdminUser" name="AdminUser" value="Admin"  onChange={(e:any) => setIsAdmin("AdminUser")}></input>
        <label htmlFor="AdminUser"> New Admin User</label>

      </form>
      <button type="submit" form="UserInfo" value="Submit"  onSubmit={handleSubmit}>Creat a new  User</button>


    </div>
  )
}

export default Test;
