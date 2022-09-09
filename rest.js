
const loadpage=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => countries(data))
}

const countries=countriey=>{
    const agerdata=document.getElementById("container")
    countriey.forEach(contry => {
       const div=document .createElement("div")
       div.innerHTML=`<h1>contry: ${contry.name.common}</h1>
       <button onclick="button('${contry.cca2}')">details</button>
       `
       agerdata.appendChild(div)

    });
}

const button=(code)=>{
    // console.log("jihad",code)
    const url=`https://restcountries.com/v3.1/alpha/${code}`
  fetch(url)
  .then(res => res.json())
  .then(data => newLoad(data[0]))
}
const newLoad=contry=>{
   const aDDNumber=document.getElementById("contain")
   aDDNumber.innerHTML=`<h1>jihad: ${contry.name.common}</h1>
   <img src='${contry.flags.png}'>
   `
}

loadpage();