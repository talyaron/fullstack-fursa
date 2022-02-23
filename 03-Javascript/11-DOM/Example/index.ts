const h1 = document.getElementById('rootH1');
h1.style.color = 'pink';

console.dir(document)
console.log(document.location.pathname)
console.log(document.location.hostname)
console.log(document.location.port)

document.body.style.backgroundColor = 'teal';
console.dir(h1)

h1.addEventListener('click',((ev:any)=>{
    console.log(ev)
}))