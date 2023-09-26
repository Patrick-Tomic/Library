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
    let bookArray = [];
    const bookForm = document.getElementById("bookForm");
    bookForm.addEventListener('submit',(e)=>{
         e.preventDefault();  
        const title = document.getElementById('bookTitle');
        const author = document.getElementById('authorName');
        const pageCount = document.getElementById('pageCount');
        const isRead = document.getElementById('isRead');
       let bool =isRead.checked;
      
        
          const obj = new book(title.value,author.value,pageCount.value,bool);
          bookArray.push(obj);
        addNewBook(obj);
       title.value ="";
       author.value = "";
        pageCount.value = "";
       
    });
    const button = document.createElement('button');
    button.innerHTML = "delete";
    button.setAttribute('style','width:8vw;height:5vh;color:white;background-color:#007FFF;padding:8px;');
    
function addNewBook(book){
    const gridWrap = document.getElementById("gridWrapper");
    const tableDiv = document.getElementById('table');
    const table = document.getElementById('myTable');
    const tr = table.insertRow(-1);

    let objVal = Object.values(book);
    
    for(let i=0;i<=objVal.length;i++){
       
        
      
        const td = tr.insertCell(i);
        td.setAttribute('style','width:8vw;padding: 15px;border-bottom:dashed black; text-align:center;');
        if(i === 3){
           
            if(objVal[i]==true){
                objVal[i] = '<svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="21.1107" height="5.00231" transform="matrix(0.762286 0.64724 -0.449986 0.893036 3.5004 12.4375)" fill="#02FF2B"/> <rect width="28.3421" height="4.47" transform="matrix(0.475419 -0.879759 0.738497 0.674256 15.0821 25.7802)" fill="#02FF2B"/> </svg>';
              
            }else{
              objVal[i] ='<svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="31.898" height="5.70542" transform="matrix(0.722122 -0.691766 0.857633 0.514262 1.16681 22.0659)" fill="#FF0404"/> <rect width="32.6729" height="5.58018" transform="matrix(0.779204 0.62677 -0.813795 0.581152 4.54114 0.677856)" fill="#FF0404"/> </svg>';
             
             }
        }
        if(i===objVal.length){
            td.appendChild(button);
            break;
           }
        td.innerHTML = objVal[i];
       
    }

    tableDiv.appendChild(table);
    gridWrap.append(tableDiv);
}