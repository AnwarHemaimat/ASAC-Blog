'user strick'
let form=document.getElementById('form');
let get= document.getElementById('get');

form.addEventListener('submit',function(event){
event.preventDefault();
let authorName=event.target.authorName.value;
let article=event.target.article.value;
let subject=event.target.subject.value;

let date=event.target.date.value;
let month=event.target.month.value;
let year=event.target.year.value;
let content=event.target.Content.value;

if(!authorName || !article || !subject || !date || !month || !year || !content){
    alert('Please you should full all ! ');
}else{
    let list=document.createElement('p');
    list.textContent='Author'+authorName +'<br>'; 
    get.appendChild(list);
    let date=document.createElement('p');
    date.textContent='Date'+ date + "-" + month+"-"+year+'<br>';
    get.appendChild(date);
    let authorContent=document.createElement('p')
    authorContent.textContent=content;
    get.appendChild(authorContent);
}
})