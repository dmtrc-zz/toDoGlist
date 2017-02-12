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

var taskArr = [];

window.onload = function(){

  button.onclick = function(){
    if (input.value != 0){
      taskArr.push({
        'content' : input.value,
        'completed' : false,
        'removed' : false,
        'editing' : false
      });

      remboRender();
      input.value = "";
    }
  }

}



function remboRender(){
  listGroup.innerHTML = "";
  taskArr.forEach(function(item){
    
    var listItem = document.createElement("li");
    listItem.className = "task-item list-group-item";
    listGroup.appendChild(listItem);

    // task text field
    var textField = document.createElement("span");
    textField.className = "text-field";

    // task control buttons
    var editButton = document.createElement("span");
    editButton.className = "edit-button item-ctrl";
    editButton.innerHTML = "edit";
    var completeButton = document.createElement("span");
    completeButton.className = "complete-button item-ctrl";
    completeButton.innerHTML = "complete";
    var removeButton = document.createElement("span");
    removeButton.className = "remove-button item-ctrl";
    removeButton.innerHTML = "remove";

    // task editing input
    var editInput = document.createElement("input");
    editInput.className = "editing-input";
    editInput.value = item.content;

    listItem.appendChild(editInput);
    listItem.appendChild(removeButton);
    listItem.appendChild(completeButton);
    listItem.appendChild(editButton);
    listItem.appendChild(textField);
    textField.appendChild(document.createTextNode( item.content ));

    //Mark task as completed
    completeButton.onclick = function(){
      if (item.completed == false){
        item.completed = true;
        listItem.className += " completed";
        this.innerHTML = "undo";
      } else {
        item.completed = false;
        listItem.className = "task-item list-group-item";
        this.innerHTML = "complete";
      }
      console.log(taskArr);
      // render function!!!!!!!

    }

    //Remove task
    removeButton.onclick = function(){
      if (item.removed == false){
        item.removed = true;
        this.parentNode.remove();
      } else {
        item.removed = false;
        listItem.className = "task-item list-group-item";
      }
      // render function!!!!!!!
    }

    //Edit task
    editButton.onclick = function(){
      if (item.editing == false){
        item.editing = true;
        listItem.className += " editing";
        editInput.focus();
        this.innerHTML = "save";
      } else {
        item.editing = false;
        item.content = editInput.value;
        listItem.className = "task-item list-group-item";
        this.innerHTML = "edit";
        textField.innerHTML = item.content;
      }
      console.log(taskArr);
    }
  });
};









