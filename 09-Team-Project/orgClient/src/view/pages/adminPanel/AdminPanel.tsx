import React, { useState } from 'react';

const AdminPanel = () => {
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
      <h1>اضافه مستخدم جديد</h1>

      <form action="submit" method="get" id="UserInfo">
        <label htmlFor="fname">الاسم الاول:</label>
        <input type="text" id="fname" name="fname" placeholder="الاسم الاول" value={Fname} onChange={(e:any) => setFname(e.target.value)}></input>
        <br></br>
        <label htmlFor="lname">اسم العائله:</label>
        <input type="text" id="lname" name="lname" placeholder="اسم العائله" value={Lname}  onChange={(e:any) => setLname(e.target.value)}></input>
        <br></br>
        <label htmlFor="Email">البريد الالكتروني:</label>
        <input type="text" id="Email" name="Email" placeholder="البريد الالكتروني" value={Email}  onChange={(e:any) => setEmail(e.target.value)}></input>
        <br></br>
        <input type="checkbox" id="AdminUser" name="AdminUser" value="Admin"  onChange={(e:any) => setIsAdmin("AdminUser")}></input>
        <label htmlFor="AdminUser"> اضافة مشرف جديد</label>

      </form>
      <button type="submit" form="UserInfo" value="Submit"  onSubmit={handleSubmit}>انشاء مستخدم جديد</button>


    </div>
  )
}

export default AdminPanel;
