// button through which data should be fetched
let btn = document.querySelector("#fetchBtn");
// data must be appended here
let dataTo = document.querySelector("#fetchedData");

// adding event on button to fetch data
btn.addEventListener("click", ()=>{
    // an api call is made
    let dataFetched = fetch("https://jsonplaceholder.typicode.com/todos");
    dataFetched.then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        // iterated over each data
        data.forEach((ele)=>{
            // created a div for each data
            let dataDiv = document.createElement("div");
            let p = document.createElement("p");
            // checkbox to identify if task is done or not
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.style.width = "20px";
            checkbox.style.height = "20px";

            p.textContent =ele.title;
            
            // data is displayed to dom
            dataDiv.append(p);
            dataDiv.append(checkbox);
            dataTo.append(dataDiv);
        })
    })
})