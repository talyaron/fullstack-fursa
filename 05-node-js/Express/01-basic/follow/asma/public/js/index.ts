async function initApp() {
    console.log("Its Working!!");
    const res = await fetch("/get-user");
    const data = await res.json();
    console.log(res);
    console.log(data);



}