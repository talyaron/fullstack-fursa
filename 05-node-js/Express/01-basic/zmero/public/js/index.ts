console.log("hi all")

async function init() {
    console.log("init")
    const response = await fetch('/get-user');
    const user = await response.json();
    console.log(user)
}