async function initApp() {
    console.log('app was initialized')
    const res = await fetch('/get-user');
    const data = await res.json();
    console.log(res)
    console.log(data)
}