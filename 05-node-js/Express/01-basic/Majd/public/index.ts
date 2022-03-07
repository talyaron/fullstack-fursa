async function initApp(){
    console.log("app was initiated");
    const res= await fetch("/get-user");
    const data = await res.json();
    console.log(data);
    console.log(res);
}