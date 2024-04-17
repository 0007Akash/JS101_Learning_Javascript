// button through which data should be fetched
let btn = document.querySelector("#fetchBtn");
// data must be appended here
let dataTo = document.querySelector("#fetchedData");
let paginationWrapper = document.querySelector(".paginationWrap");

let url = `https://jsonplaceholder.typicode.com/todos`;

const getData= async(url , queryParams="") =>{
    
    try {
        let res = await fetch(`${url}${queryParams}`);
        pagination();
        let data = await res.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

// getData(url);
getData(url ,"?_page=1&_limit=5");


const displayData = (data)=>{
    dataTo.innerHTML = "";
    data.forEach((ele)=>{
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
}

const pagination = () =>{
    paginationWrapper.innerHTML = "";
    for(let i=1;i<=(200/5);i++){
        let btn = document.createElement("button");
        btn.textContent = i;
        btn.id = "btnId";
        btn.addEventListener("click", ()=>{
            getData(`${url}`,`?_page=${i}&_limit=5`);

        })
        paginationWrapper.append(btn);
    }
}