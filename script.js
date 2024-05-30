const library = [];
const authNames = [];
const pageNumb = [];
const hasRead = [];


const title = document.getElementById("bookTitle");
const authors = document.getElementById("authorName");
const pages = document.getElementById("pageNum");
const read = document.getElementById("yesRead","noRead");
const btn = document.getElementById("submitBtn");
const cards = document.querySelector(".gridContainer");


btn.addEventListener("click", () => {
  library.push(title.value);
  console.log(library);
  title.value = "";

  authNames.push(authors.value);
  console.log(authNames);
  authors.value = "";

  pageNumb.push(pages.value);
  console.log(pageNumb);
  pages.value = "";

  hasRead.push(read.checked);
  console.log(hasRead);

  
  const cards = document.querySelector(".gridContainer");

  
  const newCard = document.createElement("div")
    newCard.classList.add("card");
  const newBtn = document.createElement("button");
    newBtn.classList.add("button");
  const text = document.createTextNode("Delete");
  const bookName = document.createElement("div");
    bookName.classList.add("bookName");
    bookName.textContent = library[(library.length)-1];

    
    const authorName = document.createElement("span");
      authorName.classList.add("authorNames");
      authorName.textContent = authNames[(authNames.length)-1];
  
    const pageNumber = document.createElement("span");
      pageNumber.classList.add("pageNumber");
      pageNumber.textContent = pageNumb[(pageNumb.length)-1];

  const bookRead = document.createElement("span");
  bookRead.classList.add("bookRead");

  if (hasRead[(hasRead.length)-1] === true) {
    bookRead.textContent = "I have read this book!";
    newCard.style.backgroundColor = "lightgreen";
  } else if (hasRead[(hasRead.length)-1] === false) {
    bookRead.textContent = "I have not read this book!";
    newCard.style.backgroundColor = "indianred";
  } else {
    bookRead.textContent = "";
  }

  
  
  newBtn.appendChild(text);
  newCard.appendChild(newBtn);
  newCard.appendChild(bookRead);
  newCard.appendChild(pageNumber);
  newCard.appendChild(authorName);
  newCard.appendChild(bookName);

  

  
  cards.appendChild(newCard); 
  


  const delBtn = document.querySelectorAll(".button");

  delBtn.forEach((element) => {
    element.addEventListener("click", () => {
        cards.removeChild(newCard) ;
        library.pop();
      console.log(library);

    });
    
  });


});



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return (this.title + ' by ' + this.author + ', ' + this.pages + ', ' + this.read);
  }
}

function displayLibrary() {
  for (const books of library) {
    console.log(books);
  }
}

displayLibrary();

