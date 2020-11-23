
// Add class to h1 tag from JS
var h1 = document.querySelector("h1");
h1.className = "coolTitle";

// get button and input field
var addBtn = document.getElementById("addBtn");
var userInput = document.getElementById("userInput");
var ul = document.querySelector("ul");
var itemlist = document.querySelector("li");


function getInputLength(){
	return userInput.value.length;
}

function createListElement(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(userInput.value));
		ul.appendChild(li);
		createDeleteBtn(li);
		userInput.value = "";
}

function addItemOnClick(){
	if(getInputLength() > 0){
		createListElement();
	}
}

function addItemOnEnter(event) {
	if(getInputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

function createDeleteBtn(li) {
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteBtn);
	deleteBtn.className="deleteBtn"
	deleteBtn.onclick = removeParent;
}

// Add an event listener to add button click
addBtn.addEventListener("click", addItemOnClick);

userInput.addEventListener("keypress", addItemOnEnter);

ul.addEventListener("click", toggleLineListener);

//For every list element, toggle line when clicked
function toggleLineListener(event) {
	var target = event.target;
	target.classList.toggle("done");
}


function removeParent(event){
	event.target.parentNode.remove();
}




