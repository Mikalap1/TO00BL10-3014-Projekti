// Javascript




// Sulje nappi

var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Sulje nappi piilottaa tehtävän
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Listaan lisääminen napista
function newTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Kirjoita jotain!");
    } else {
      document.getElementById("lista").appendChild(li);
    }
    document.getElementById("input").value = "";
  
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    // Lisätään TODO local storageen
    saveLocalTodos(inputValue);





// Check merkki klikkauksella
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('tehty');
  }
}, false);
}
// Local storage
function saveLocalTodos(newTask){
  // TARKISTUS: Onko listalla jo asioita
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }
  else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  // Jos ei ole tallessa, tee uusi
  todos.push(newTask);
  localStorage.setItem('todos', JSON.stringify(todos));


function GetTodos() {
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }
  else {
    todos = JSON.parse(localStorage.getItem('todos'));
}}


// Listan päivittäminen LocalStoragesta
localStorage.getItem(todos);
document.createElement("li");


}


