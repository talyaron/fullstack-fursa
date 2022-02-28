async function initApp() {
    console.log("init app!");
    const res = await fetch('/get-user');
    const data = await res.json();
    console.log(data);
}