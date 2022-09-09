const loadPage=()=>{
    fetch("www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(res => res.json())
    .then(data => display(data.meals))
}
const display=meals=>{
    meals.forEach(meal => {
        console.log(meal)
    });
}
loadPage();