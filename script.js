function confirmbtn() {
  var ul = document.getElementById('ul');
  var li = document.createElement('li');

  var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.value = 1;
      checkbox.name = "todo[]";
      checkbox.class = "styleCheckbox"; //checkbox configuration in css?

  li.appendChild(checkbox);
  //checkbox
  var titletxt = document.getElementById('title');
  var desctxt = document.getElementById('desc');
  li.appendChild(document.createTextNode(titletxt.value + " - " + desctxt.value))
  ul.appendChild(li);
  document.getElementById('title').value = '';
  document.getElementById('desc').value = '';
  //adds title and description to list with seperator


  document.getElementById("MyPopUp").style.display = "none";
  //automatically close popup after adding new item

}
function openWindow() {
  document.getElementById("MyPopUp").style.display = "block";
  //open popup
}
function closeWindow() {
  document.getElementById("MyPopUp").style.display = "none";
  //close popup
}
function store() {
  localStorage.setItem()
}
function myClear(){
  var list = document.getElementById("ul");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
// localStorage [disabled due to failed implementation]
//
//   var list = document.querySelector('#ul'),
//       form = document.querySelector('form'),
//       titleq = document.querySelector('#title'),
//       descq =document.querySelector('#title'),
//       item = titleq + ", " + descq;
//
//     form.addEventListener('submit',function(e){
//       e.preventDefault();
//       list.innerHTML += '<li>' + item.value + '</li>';
//       store();
//       item.value = '';
//     },false)
//
//
// function store() {
//   window.localStorage.todo = list.innerHTML;
//   //store data in localStorage
// }
// function getData() {
//   var storedData = window.localStorage.todo;
//     if(!storedData) {
//       list.innerHTML =  '<li id="li1">Example: Title - Description</li><br>'
//     }
//     else {
//       list.innerHTML = storedData;
//     }
//   //look for data in locaStorage and add them to the list if present, else load default
// }
// getData();
