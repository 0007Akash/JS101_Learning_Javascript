// select button with id "userBtn" to add event listner
let fetchBtn = document.querySelector("#userBtn");
// select a div with class "userData" to append fetched data
let userData = document.querySelector(".userData");

// function which invoked on button click and executes fetch reqres API to get user data
fetchBtn.addEventListener("click", ()=>{
    fetch("https://reqres.in/api/users")
    .then((res)=>{
        return res.json();
    }).then((wholedata)=>{
        console.log(wholedata);
        let data = wholedata.data;
        data.forEach((ele)=>{
            let div = document.createElement("div");
            div.className = "card";
            let name = document.createElement("h2");
            let email = document.createElement("p");
            let image = document.createElement("img");
            name.textContent = ele.first_name +" "+ ele.last_name;
            email.textContent = ele.email;
            image.src = ele.avatar; 
            div.append(image,name, email);
            userData.append(div);
        })
    })
})