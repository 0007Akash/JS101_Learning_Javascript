// selected div to display data over DOM
let userCard = document.querySelector(".userCard");
// selected botton container to show paginated button
let pageBtn = document.querySelector(".pageBtn");
// base url to fetch data from
let url = `https://jsonplaceholder.typicode.com/users`;

// function to fetch data from given API
const getData = async(url, queryParams="") =>{
    try {
        let res = await fetch(`${url}${queryParams}`);
        console.log(res);
        // function called for applying pagination
        pagination();
        let data = await res.json();
        // console.log(data);
        displayData(data);
    } catch (error) {
        // handling error
        console.log(error);
    }
}

// global function called
getData(url, "?_page=1&_limit=6");

// function to display fetched data on DOM
const displayData = (data) =>{
    userCard.innerHTML = "";
    data.forEach(({name, address, company ,username, email, phone, website})=>{
        let firstDivBox = document.createElement("div");
        firstDivBox.id = "fDiv";
        let box = document.createElement("div");
        let name1 = document.createElement("h2");
        name1.textContent = "Name: " + name;
        let email1 = document.createElement("h3");
        email1.textContent = "Email: "+email;
        let username1 = document.createElement("h3");
        username1.textContent = "Username: "+username;
        let phone1 = document.createElement("h3");
        phone1.textContent ="Phone: "+ phone;
        let website1 = document.createElement("h3");
        website1.textContent = "Website: "+website;


        let combinedDiv = document.createElement("div");
        combinedDiv.id = "commonDiv";
        
        let addr = document.createElement("div");
        addr.id = "addrId";
        let {city , geo: {lat, lng}, street ,zipcode, suite} = address;

        let addrText = document.createElement("h3");
        addrText.textContent = "Address :-";

        let city1 = document.createElement("p"); 
        city1.textContent = "City: "+city;
        let location = document.createElement("p"); 
        location.textContent = "Location: "+ "Lat- "+lat+" lng- "+lng;
        let zipCode = document.createElement("p"); 
        zipCode.textContent = "Zipcode: "+zipcode;
        let street1 = document.createElement("p"); 
        street1.textContent = "Street: "+street;
        let suite1 = document.createElement("p"); 
        suite1.textContent = "Suite: "+suite;

        let {name:nm, catchPhrase, bs} = company;
        let comDiv = document.createElement("div");
        comDiv.id = "addrId";
        let comName = document.createElement("p");
        comName.textContent = nm;
        let comPhrase = document.createElement("p");
        comPhrase.textContent = catchPhrase;
        let comBs = document.createElement("p");
        comBs.textContent = bs;
        let compText = document.createElement("h3");
        compText.textContent = "Company :-";

        comDiv.append(compText, comName, comPhrase, comBs);

        addr.append(addrText,city1,zipCode, street1, suite1,location);

        firstDivBox.append(name1, username1, email1, phone1, website1);
        combinedDiv.append(addr, comDiv);
        

        box.append(firstDivBox,combinedDiv);
        userCard.append(box);
    })

    
}

// pagination function to apply pagination
const pagination = () => {
    pageBtn.innerHTML = "";
    let total = Math.ceil(10/6);
    for(let i=1;i<=total;i++){
        let btn = document.createElement("button");
        btn.textContent = i; 
        btn.id = "btnId";
        pageBtn.append(btn);
        btn.addEventListener("click", ()=>{
            getData(`${url}`,`?_page=${i}&_limit=6`);
        })
    }
}