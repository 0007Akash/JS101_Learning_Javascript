// api URL from which data is fetched

let api = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`;
let countryBox = document.querySelector(".countryData");
let sort = document.querySelector("#sort");

// async function to fetch data from api
let countryData = async(sortVal = "") =>{
    let res = await fetch(`${api}${sortVal}`);
    let data = await res.json();
    console.log(data.data);
    // displays the data fetched
    displayData(data.data);
}

// this function adds the data on DOM
let displayData = (data) =>{
    countryBox.innerHTML = "";
    data.forEach((ele) =>{
        let box = document.createElement("div");
        let name = document.createElement("h1");
        let id = document.createElement("h3");
        let rank = document.createElement("h3");
        let population = document.createElement("h3");
        name.textContent = ele.country;
        id.textContent = ele.id;
        rank.textContent = `Rank: ${ele.Rank}`
        population.textContent = `Population: ${ele.population}`;

        box.append(name, id, rank, population);
        countryBox.append(box);
    })
}

// this function is created to sort the data based on population
sort.addEventListener("change", ()=>{
    let sortVal = document.querySelector("#sort").value;
    console.log(sortVal);
    countryData(`?sort=population&order=${sortVal}`);
})

countryData();