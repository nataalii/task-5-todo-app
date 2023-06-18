var close = document.getElementsByClassName("close");
var numeric = 0;


function updateNoTodoDisplay() {
  var noTodo = document.querySelector('.no-todo');
  close.length !== 0 ? (noTodo.style.display = 'none') : (noTodo.style.display = 'block');
}


function deleteListItem() {
  var listItem = this.parentElement;

  if (listItem.classList.contains("checked")) {
    listItem.remove();
    close.length == 0 ? numeric = 0 : '';
    updateNoTodoDisplay();
  } else {
    alert("Cannot delete the item unless it is checked.");
  }
}

function handleCheckboxClick(li) {
  li.classList.toggle("checked");
}


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);

  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Add the numeric value to the new list item
  var numericValue = document.createElement("SPAN");
  numericValue.className = "numeric";
  numericValue.innerText = numeric == 0 ? close.length : Number(numeric[numeric.length - 1].innerHTML) + 1;
  li.appendChild(numericValue);

  numeric = document.getElementsByClassName("numeric");

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = deleteListItem;
  }
  checkbox.addEventListener("click", function () {
    li.classList.toggle("checked");
  });

  updateNoTodoDisplay();
}
