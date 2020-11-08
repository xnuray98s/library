const books = document.querySelector("#books");
const newBooks = document.querySelector("#newBooks");
const btn = document.querySelector("#new");
const form = document.querySelector("#form");
const submit = document.querySelector("#submit");

let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
    this.status = status;
}

Book.prototype.read = function (){
    this.status = true;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function objToParagraph(obj, attr) {
    switch(attr){
        case 0:
            return obj.title;
        case 1:
            return obj.author;
        case 2:
            return obj.pages;
        case 3:
            return obj.status ? "finished"
                                :"in Progress";
    }
}

function display() {
    for(let i = 0; i < myLibrary.length; i++){
        let div = document.createElement('div');
        for (let index = 0; index < 4; index++) {
            let p = document.createElement('p');
            p.innerHTML = objToParagraph(myLibrary[i], index);
            index === 0 ? p.style.cssText = `padding-top: 10%; font-size: 35px;
                                             border:1px black solid; border-radius: 9px; height:100px;
                                             margin-top: -10.4%; background-color: #63B0CD; 
                                             font-family: 'Quicksand', sans-serif;`
                        :p.style.cssText = "font-family: 'Raleway', sans-serif;;";
            div.appendChild(p);
        }
        div.className = "book_cards";
        div.style.cssText = `border: 3px solid black; width: 350px; 
                             height: 400px; font-size: 30px; padding-top: 10%;
                             border-radius: 10px; box-shadow: 20px 20px #68686823`;
        books.appendChild(div);
    }
}
function addToDisplay(book) {
    let div = document.createElement('div');
    for (let index = 0; index < 4; index++) {
        let p = document.createElement('p');
        p.innerHTML = objToParagraph(book, index);
        index === 0 ? p.style.cssText = `padding-top: 10%; font-size: 35px;
                                         border:1px black solid; border-radius: 9px; height:100px;
                                         margin-top: -10.4%; background-color: #63B0CD; 
                                         font-family: 'Quicksand', sans-serif;`
                    :p.style.cssText = "font-family: 'Raleway', sans-serif;;";
        div.appendChild(p);
    }
    div.className = "book_cards";
        div.style.cssText = `border: 3px solid black; width: 350px; 
                             height: 400px; font-size: 30px; padding-top: 10%;
                             border-radius: 10px; box-shadow: 20px 20px #68686823`;
        books.appendChild(div);
}

btn.addEventListener("click", function(){
    form.style.display === "none" ? form.style.display = "block"
                                    :form.style.display = "none"
});

submit.addEventListener("click", function(){
    let book;
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let state = document.querySelector("#finished").checked;
    if(state === true){
        book = new Book(title, author, pages, true);
        addBookToLibrary(book);
        addToDisplay(book);
    }else{
        book = new Book(title, author, pages, false);
        addBookToLibrary(book);
        addToDisplay(book);
    }
});

let mockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
let gatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 218, false);
let solitude = new Book("One Hundred Years of Solitude","Gabriel García Márquez", 417, true);
let war = new Book("War and Peace", "Leo Tolstoy", 1392, false);
let crime = new Book("Crime and Punishment", "Fyodor Dostoyevsky", 671, true);
addBookToLibrary(mockingbird);
addBookToLibrary(gatsby);
addBookToLibrary(solitude);
addBookToLibrary(war);
addBookToLibrary(crime);
display();