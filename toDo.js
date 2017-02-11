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



window.onload = function(){

  button.onclick = function(){
    
    var taskArr = [];

    taskArr.push({
      'content' : input.value,
      'completed' : false,
      'removed' : false,
      'editing' : false
    });

    input.value = "";

    // BUILD LIST
    for (var i = 0; i<taskArr.length; i++){
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
      editInput.value = taskArr[i].content;

      listItem.appendChild(editInput);
      listItem.appendChild(removeButton);
      listItem.appendChild(completeButton);
      listItem.appendChild(editButton);
      listItem.appendChild(textField);
      textField.appendChild(document.createTextNode( taskArr[i].content ));
    }

    //Mark task as completed
    completeButton.onclick = function(){
      if (listItem.className.indexOf("completed") == -1){
        listItem.className += " completed";
        this.innerHTML = "undo";
      } else {
        listItem.className = "task-item list-group-item";
        this.innerHTML = "complete";
      }
    }

    //Remove task
    removeButton.onclick = function(){
      if (listItem.className.indexOf("removed") == -1){
        listItem.className += " removed";
      } else {
        listItem.className = "task-item list-group-item";
      }
    }

    //Edit task
    editButton.onclick = function(){
      if (listItem.className.indexOf("editing") == -1){
        listItem.className += " editing";
        editInput.focus();
        this.innerHTML = "save";
      } else {
        textField.innerHTML = editInput.value;
        listItem.className = "task-item list-group-item";
        this.innerHTML = "edit";
      }
    }
  }

}










// TODOGLIST WORKS AS FUCK
// window.onload = function(){

//   button.onclick = function(){

//     //ADD NEW TASK
//     if( input.value.length > 0 ){
//       var listItem = document.createElement("li");
//       listItem.className = "task-item list-group-item";
//       listGroup.appendChild(listItem);

//       // task text field
//       var textField = document.createElement("span");
//       textField.className = "text-field";

//       // task control buttons
//       var editButton = document.createElement("span");
//       editButton.className = "edit-button item-ctrl";
//       editButton.innerHTML = "edit";
//       var completeButton = document.createElement("span");
//       completeButton.className = "complete-button item-ctrl";
//       completeButton.innerHTML = "complete";
//       var removeButton = document.createElement("span");
//       removeButton.className = "remove-button item-ctrl";
//       removeButton.innerHTML = "remove";

//       // task editing input
//       var editInput = document.createElement("input");
//       editInput.className = "editing-input";
//       editInput.value = input.value;

//       listItem.appendChild(editInput);
//       listItem.appendChild(removeButton);
//       listItem.appendChild(completeButton);
//       listItem.appendChild(editButton);
//       listItem.appendChild(textField);
//       textField.appendChild(document.createTextNode(input.value));
//       input.value = "";
//     }

//     //Mark task as completed
//     completeButton.onclick = function(){
//       if (listItem.className.indexOf("completed") == -1){
//         listItem.className += " completed";
//         this.innerHTML = "undo";
//       } else {
//         listItem.className = "task-item list-group-item";
//         this.innerHTML = "complete";
//       }
//     }

//     //Remove task
//     removeButton.onclick = function(){
//       if (listItem.className.indexOf("removed") == -1){
//         listItem.className += " removed";
//       } else {
//         listItem.className = "task-item list-group-item";
//       }
//     }

//     //Edit task
//     editButton.onclick = function(){
//       if (listItem.className.indexOf("editing") == -1){
//         listItem.className += " editing";
//         editInput.focus();
//         this.innerHTML = "save";
//       } else {
//         textField.innerHTML = editInput.value;
//         listItem.className = "task-item list-group-item";
//         this.innerHTML = "edit";
//       }
//     }
//   }

// }




















