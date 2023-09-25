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
lotr.info();   
    
    const bookForm = document.getElementById("bookForm");
    bookForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const error = document.getElementById("error");
        const title = document.getElementById('bookTitle');
        const author = document.getElementById('authorName');
        const pageCount = document.getElementById('pageCount');
        const isRead = document.getElementById('isRead');
        if(title.value===""||author.value===""||pageCount.value===""){
            error.innerHTML="Please fill in the content";
        }
       title.value ="";
       author.value = ""
        pageCount.value = "";
    });