// console.log(document.domain);
// console.log(document.URL);
// console.log(document.Title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.All);
// console.log(document.All[0]);
// document.All[10].textcontent
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
// var headerTitle=(document.getElementById(header-Title));
// console.log(hederTitle);
// headerTitle.textContent='hello';
// headerTitle.innerText='goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML=<h3>hello</h3>
// headerTitle.style.borderBottom='solid 3px #000';
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
for (var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
items[1].textContent='hello';
var header=document.querySelector('list');
list[1].style.color='solid green';
var item=document.querySelectorAll('list-group-item');
list.style.backgroundColor='green';

list[1].style.backgroundColor='green';

items[2].style.backgroundcolor='green';
var itemlist=document.querySelector('#items');
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemlist.parentNode.parentNode.parentNode);
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemlist.parentElement.parentElement.parentElement);
console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[1]);
console.log(itemlist.firstchild);
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent.textContent='hello 1';
console.log(itemlist.lastChild);
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='hello 4';
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='red';
var newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title','hello div');
var newdivtext=document.createTextNode('hello world');
newdiv.appendChild(newdivtext);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
console.log(nwediv);
newdiv.style.fontsize='30px';
container.insertBefore(newdiv,h1);
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <title>Item Lister</title>
</head>
<body>
  <header id="main-header" class="bg-success text-white p-4 mb-3">
    <div class="container">
      <h1 id="header-title">Item Lister <span style="display:none">3</span></h1>
    </div>
  </header>
  <div class="container">
   <div id="main" class="card card-body">
    <h2 class="title">Add Items</h2>
    <form class="form-inline mb-3">
      <input type="text" class="form-control mr-2">
      <input type="submit" class="btn btn-dark" value="Submit">
    </form>
    <h2 class="title">Items</h2>
    <ul id="items" class="list-group">
      <li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button><button class='btn btn-danger btn-sm float-right edit'>edit</button></li>
      <li class="list-group-item">Item 2 <button class="btn btn-danger btn-sm float-right delete">X</button><button class='btn btn-danger btn-sm float-right edit'>edit</button></li>
      <li class="list-group-item">Item 3 <button class="btn btn-danger btn-sm float-right delete">X</button><button class='btn btn-danger btn-sm float-right edit'>edit</button></li>
      <li class="list-group-item">Item 4 <button class="btn btn-danger btn-sm float-right delete">X</button><button class='btn btn-danger btn-sm float-right edit'>edit</button></li>
 
    </ul>
   </div>
  </div>
 <script src="dom.js"></script>
</body>
</html>
