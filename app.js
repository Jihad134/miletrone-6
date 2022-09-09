function aray(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userDisplay(data))
}

function userDisplay(users){
    const ul=document.getElementById("ul")
    for(const item of users ){
        // console.log(item.name)
        const li=document.createElement("li")
        li.innerText=item.email

        ul.append(li)
    }
}