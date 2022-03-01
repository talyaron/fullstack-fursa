async function initApp() {
    console.log("app was initiated");
    const res = await fetch("/get-user");
    const data = await res.json();
    console.log(res);
    console.log(data)
  }
  
  async function handleAddUser(){
      const newUser = {name:`${Math.random()}`,id:`${Math.floor(Math.random()*1e8)}`};
  
      const res = await axios.post('add-user',newUser);
      console.log(res)
  }
  