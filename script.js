function book(name, author, pageCount, read){
    this.name = name
    this.author= author
    this.pageNum = pageCount
    this.isRead = read
}
book.prototype.info = function(){
    console.log(`${this.name} by ${this.author} with ${this.pageNum} pages. `) 
}

const lotr = new book("lotr","J.r.r Tolkien",10000,'True');
lotr.info()


const body = document.querySelector('body');
const table = document.querySelector("#table");
const newBook = document.querySelector("#newBook");
function CreateBook(){
    let book = [];
    const inputs =document.createElement("div");
    inputs.setAttribute("id",'inputs');
    inputs.setAttribute('border','solid 2px black');
    const form = document.createElement('form');
    const title = document.createElement("input");
    title.setAttribute('type','text');
    title.setAttribute('name','title');
    title.setAttribute('id','title');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for','title');
    titleLabel.innerHTML='Title';
    form.appendChild(titleLabel);
    form.appendChild(title);
    inputs.append(form);
    body.append(inputs);
};