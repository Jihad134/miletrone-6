const loaderId=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayReult(data.results))
}
loaderId();

const displayReult=(users)=>{
    const agerdata=document.getElementById("contain-user")
    for(const user of users){
       const Div=document.createElement("div")
       Div.classList.add("style")
       Div.innerHTML=`
       <h2>name:${user.id.name}<h2>
       <h2>country:${user.location.country}<h2>
       `
       agerdata.appendChild(Div)
    }
}