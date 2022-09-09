const loadPage=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => disply(data))
}

const disply=(rest)=>{
const agerdata=document.getElementById("container")
rest.forEach(res => {
    const div=document.createElement("div")
    div.innerHTML=`country: ${res.name.common}
    <button onclick="secondl('${res.cca2}')">button </button>`
    agerdata.appendChild(div)
});
    
}
const secondl=(code)=>{
    console.log("jihad",code)
    const url=`https://restcountries.com/v3.1/alpha/${code}`
fetch(url)
.then(res => res.json())
.then(data => load3(data[0]))
}
const load3=rest=>{
    const agertable=document.getElementById("con")
    const div=document.createElement('div')
    div.innerHTML=`<h1>${rest.name.common}</h1>`
    agertable.appendChild(div)
}
loadPage();