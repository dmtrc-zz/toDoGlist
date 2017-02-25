

//CREATE ELEMENTS


// var taskArr = [];

// window.onload = function(){


// }

// function remboRender(){
//   listGroup.innerHTML = "";
//   taskArr.forEach(function(item){

//     var listItem = document.createElement("li");

//     listGroup.appendChild(listItem);

//     // task text field
//     var textField = document.createElement("span");
//     textField.className = "text-field";

//     // task control buttons
//     var editButton = document.createElement("span");
//     editButton.className = "edit-button item-ctrl";
//     editButton.innerHTML = "edit";
//     var completeButton = document.createElement("span");
//     completeButton.className = "complete-button item-ctrl";
//     completeButton.innerHTML = "complete";
//     var removeButton = document.createElement("span");
//     removeButton.innerHTML = "remove";
//     removeButton.className = "remove-button item-ctrl";
    
//     // task editing input
//     var editInput = document.createElement("input");
//     editInput.className = "editing-input";
//     editInput.value = item.content;

//     listItem.appendChild(editInput);
//     listItem.appendChild(removeButton);
//     listItem.appendChild(completeButton);
//     listItem.appendChild(editButton);
//     listItem.appendChild(textField);
//     textField.appendChild(document.createTextNode( item.content ));


//     if (!item.removed && !item.completed && !item.editing){
//       listItem.className = "task-item task-item list-group-item";
//     } else if (item.removed){
//       listItem.className = " removed task-item task-item list-group-item";
//     } else if (item.completed){
//       listItem.className = " completed task-item task-item list-group-item";
//       completeButton.innerHTML = "undo";
//     } else if (item.editing){
//       listItem.className = " editing task-item task-item list-group-item";
//       editButton.innerHTML = "save";
//       editInput.focus();
//     }

//     //Remove task
//     removeButton.onclick = function(){
//       item.removed = !item.removed;
//       remboRender();
//     }

//     //Mark task as completed
//     completeButton.onclick = function(){
//       item.completed = !item.completed;
//       remboRender();
//     }

//     //Edit task
//     editButton.onclick = function(){
//       item.editing = !item.editing;
//       item.content = editInput.value;
//       remboRender();
//     }
//   });
// };






// SOME SERIOUS OBJECTS HERE

// function ListContainer(){
//   var taskArr = [];

//   this.render = function(){

//     var panel = document.createElement("div");
//     panel.id = "list-container";
//     panel.className = "panel panel-default";

//     var panelHeading = document.createElement("div");
//     panelHeading.className = "panel-heading";

//     var panelBody = document.createElement("div");
//     panelBody.className = "panel-body";

//     var panelHeadingTitle = document.createElement("h1");
//     panelHeadingTitle.innerHTML = "ToDo some shit";

//     var formGroup = document.createElement("div");
//     formGroup.className = "form-group";

//     var inputGroup = document.createElement("div");
//     inputGroup.className = "input-group";

//     var input = document.createElement("input");
//     input.className = "form-control";
//     input.id = "input";
//     input.setAttribute('placeholder', 'Please enter some shit here');

//     var inputGroupBtn = document.createElement("div");
//     inputGroupBtn.className = "input-group-btn";

//     var button = document.createElement("button");
//     button.className = "btn btn-success";
//     button.id = "addTask";
//     button.innerHTML = "Add this shit";

//     var listGroup = document.createElement("ul");
//     listGroup.className = "list-group";

//     panelHeading.appendChild(panelHeadingTitle);
//     panelBody.appendChild(formGroup);
//       formGroup.appendChild(inputGroup);
//         inputGroup.appendChild(input);
//         inputGroup.appendChild(inputGroupBtn);
//           inputGroupBtn.appendChild(button);
//     panelBody.appendChild(listGroup);

//     panel.appendChild(panelHeading);
//     panel.appendChild(panelBody);
//     app.appendChild(panel);
//   }

//   this.addTask = function(task){
//     button.onclick = function(){
//       if (input.value.length){
//         taskArr.push({
//           'content' : input.value,
//           'completed' : false,
//           'removed' : false,
//           'editing' : false
//         });
//         remboRender();
//         input.value = "";
//       }
//     }

//     input.onkeydown = function(e) {
//       if (e.keyCode == 13) {
//         button.click();
//       }
//     }
//   }
// }

var app = document.getElementById("app");




function List(content){
  this.content = content;
  var self = this;
  this.taskArr = [
    {
      'content': content,
      'completed': false,
      'removed': false,
      'editing': false
    }
  ];

  console.log(this.taskArr);

  this.addItem = function(){
    console.log(ListItem);
  }

  this.render = function(){
    var panel = document.createElement("div");
    panel.id = "list-container";
    panel.className = "panel panel-default";

    var panelHeading = document.createElement("div");
    panelHeading.className = "panel-heading";

    var panelBody = document.createElement("div");
    panelBody.className = "panel-body";

    var panelHeadingTitle = document.createElement("h1");
    panelHeadingTitle.innerHTML = "ToDo some shit";

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


    button.onclick = function(){
      self.addItem();
    }
  }

}

function ListItem(object){
  this.object = object;
  var object = this.object;
  var self = this;

  //Remove task
  this.remove = function(){
    object.removed = !object.removed;
    this.render();
  }
  //Mark task as completed
  this.complete = function(){
    object.completed = !object.completed;
    this.render();
  }
  //Edit task
  this.edit = function(){
    object.editing = !object.editing;
    this.render();
  }
  // Render
  this.render = function(){

    var listItem = document.createElement("li");
    listItem.className = 'list-group-item';
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
    removeButton.innerHTML = "remove";
    removeButton.className = "remove-button item-ctrl";
    
    // task editing input
    var editInput = document.createElement("input");
    editInput.className = "editing-input";
    editInput.value = object.content;

    listItem.appendChild(editInput);
    listItem.appendChild(removeButton);
    listItem.appendChild(completeButton);
    listItem.appendChild(editButton);
    listItem.appendChild(textField);
    textField.appendChild(document.createTextNode( object.content ));

    if (!object.removed && !object.completed && !object.editing){
      listItem.className = "task-item list-group-item";
    } else if (object.removed){
      listItem.className = " removed task-item list-group-item";
    } else if (object.completed){
      listItem.className = " completed task-item list-group-item";
      completeButton.innerHTML = "undo";
    } else if (object.editing){
      listItem.className = " editing task-item list-group-item";
      editButton.innerHTML = "save";
      editInput.focus();
    }

    removeButton.onclick = function(){
      listGroup.innerHTML = "";
      self.remove();
    }
    completeButton.onclick = function(){
      listGroup.innerHTML = "";
      self.complete();
    }
    editButton.onclick = function(){
      listGroup.innerHTML = "";
      object.content = editInput.value;
      self.edit();
    }


    // console.log(taskArr[0].content);
  }
}
