function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => show(data))
}

function show(users){
const sectionContainer=document.getElementById("container")

for(const item of users ){
    const conDiv=document.createElement("div");
    conDiv.innerHTML=`
    <h1>userId: ${item.id}</h1>
    <h2>title: ${item.title}</h2>

    
    `

    sectionContainer.appendChild(conDiv)
}f



}