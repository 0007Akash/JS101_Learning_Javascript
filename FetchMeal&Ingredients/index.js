// select the button with id "get-category-data"
let categoryBtn = document.querySelector("#get-category-data");
// select the button with id "get-ingredient-data"
let ingredientBtn = document.querySelector("#get-ingredient-data");

// add an event to button , when clicked executes the getCategoriesData function
categoryBtn.addEventListener("click", getCategoriesData);


// function to fetch meal data for a specific category (e.g., seafood) and log the result into console
function getCategoriesData(){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((resolve)=>{
        return resolve.json();
    }).then((data)=>{
        console.log(data);
    }).catch(()=>{
        console.log("Something went wrong!")
    })
}

// add an event to button , when clicked executes the getIngredientData function
ingredientBtn.addEventListener("click", getIngredientData);

// function to fetch meal data for a specific category (e.g., chicken_breast) and log the result into console

function getIngredientData(){
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
    .then((resolve)=>{
        return resolve.json();
    }).then((data)=>{
        console.log(data);
    }).catch(()=>{
        console.log("Something went wrong!")
    })
}