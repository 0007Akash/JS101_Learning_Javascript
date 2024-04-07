let btn = document.querySelector("#fetchBtn");
let dataTo = document.querySelector("#fetchedData");

btn.addEventListener("click", ()=>{
    let dataFetched = fetch("https://jsonplaceholder.typicode.com/todos");
    dataFetched.then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        data.forEach((ele)=>{
            let dataDiv = document.createElement("div");
            let p = document.createElement("p");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.style.width = "20px";
            checkbox.style.height = "20px";

            p.textContent =ele.title;

            dataDiv.append(p);
            dataDiv.append(checkbox);
            dataTo.append(dataDiv);
        })
    })
})