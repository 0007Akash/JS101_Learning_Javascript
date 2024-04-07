

const apiKey = '4ffb6381';


let btn = document.querySelector("#btn");
let movieData = document.querySelector("#movieInfo");


btn.addEventListener("click", () => {
  movieData.textContent = "";
  let name = document.querySelector("#movieName").value;
  console.log(name);
  fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${name}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let dataArray = data.Search;

      dataArray.forEach((ele) => {
        
        let cardDiv = document.createElement("div");
        cardDiv.className = "cardContainer";
        let infoDiv = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("h3");
        let type = document.createElement("p");
        let year = document.createElement("p");
        let imdbId = document.createElement("p");
        image.src = ele.Poster;
        title.textContent = `Title : ${ele.Title}`;
        type.textContent = `Type : ${ele.Type}`;
        year.textContent = `Year : ${ele.Year}`;
        imdbId.textContent = `imdbID : ${ele.imdbID}`;
        infoDiv.append(title, type, year, imdbId);
        cardDiv.append(image, infoDiv);
        movieData.append(cardDiv);


      })
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
})

