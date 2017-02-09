var app = document.getElementById("app");

//CREATE ELEMENTS
var panel = document.createElement("div");
panel.id = "list-container";
panel.className = "panel panel-default";

var panelHeading = document.createElement("div");
panelHeading.className = "panel-heading";

var panelBody = document.createElement("div");
panelBody.className = "panel-body";

var panelHeadingTitle = document.createElement("h1");
panelHeadingTitle.innerHTML = "ToDo shit";

var formGroup = document.createElement("div");
formGroup.className = "form-group";

var inputGroup = document.createElement("div");
inputGroup.className = "input-group";

var input = document.createElement("input");
input.className = "form-control";
input.id = "input";
input.setAttribute('placeholder', 'Please enter some shit here');

var inputGroupBtn = document.createElement("div");
inputGroupBtn.className = "input-group-btn";

var button = document.createElement("button");
button.className = "btn btn-success";
button.id = "addTask";
button.innerHTML = "Add this shit";

var listGroup = document.createElement("ul");
listGroup.className = "list-group";

var completeButton = document.createElement("span");
completeButton.className = "complete-button";
completeButton.innerHTML = "complete";
var removeButton = document.createElement("span");
removeButton.className = "remove-button";
removeButton.innerHTML = "remove";

panelHeading.appendChild(panelHeadingTitle);
panelBody.appendChild(formGroup);
  formGroup.appendChild(inputGroup);
    inputGroup.appendChild(input);
    inputGroup.appendChild(inputGroupBtn);
      inputGroupBtn.appendChild(button);
panelBody.appendChild(listGroup);

panel.appendChild(panelHeading);
panel.appendChild(panelBody);
app.appendChild(panel);







// TODOGLIST WORKS AS FUCK
window.onload = function(){

  button.onclick = function(){

    //Add new task
    if( input.value.length > 0 ){
      var listItem = document.createElement("li");
      listItem.className = "task-item list-group-item";
      listGroup.appendChild(listItem);
      listItem.appendChild(removeButton);
      listItem.appendChild(completeButton);
      listItem.innerHTML += input.value;
      input.value = "";
    }

    //Mark task as completed
    completeButton.onclick = function(){
      console.log("triceps");
    }

  }

}





















