let books=[];

function Author(name, birthYear, nationality){
    this.name= name,
    this.birthYear = birthYear,
    this.nationality = nationality
}


function Book(title , author , genre , price){
    this.title = title,
    this.author = author,
    this.genre = genre,
    this.price = price,

    this.bookInfo = function(){
        console.log(this.title);
        console.log("Written By : "+ this.author.name);
        console.log("Genre : "+genre);
        console.log("Price : "+price);
    }

    books.push(this);
}

let author1= new Author("Khushwant Singh" , 1915 , "Indian");
let book1= new Book("Train to Pakistan" , author1 , "Novel" , 999);
let author2= new Author("Arundhati Roy" , 1961 , "Indian");
let book2= new Book("The God of Small Things" , author2 , "Novel" , 700);
let author3= new Author("R. K. Narayan" , 1906 , "Indian");
let book3= new Book("The Ramayana: A Shortened Modern" , author3 , "Itihasa" , 800);
let author4= new Author("Amitav Ghosh" , 1956 , "Indian");
let book4= new Book("The Shadow Lines" , author4 , "Political Fiction" , 560);

// console.log(book1)
// book1.bookInfo();


for(let i=0;i<books.length;i++){
    books[i].bookInfo();
    console.log("");
}