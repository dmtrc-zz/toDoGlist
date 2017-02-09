

window.onload = function(){

  addTask.onclick = function(){


    // input elements
    var input = document.getElementById("input");
    var inputValue = input.value;
    var addTask = document.getElementById("addTask");

    // list elements 
    var list = document.getElementById("list");
    var taskItem =  document.getElementsByClassName('task-item');
    var newTask = document.createElement("li");
    newTask.innerHTML = "<li class='task-item list-group-item'>" + inputValue + "<span class='ctrls'><span class='completeButton'>complete</span><span class='removeButton'>remove</span></span></li>";

    if ( inputValue.length > 0) {
      input.value="";
      while (newTask.firstChild) {
        list.appendChild(newTask.firstChild);
      }
    }

    // COMPLETE/REMOVE
    var completeButton = document.getElementsByClassName("completeButton");
    var removeButton = document.getElementsByClassName("removeButton");

    var completeTask = function(){

    }
    var removeTask = function(){
      elem.remove();
    }

    // remove
    removeButton.onclick = function(){
      removeTask(this);
    }
    // complete
    completeButton.onclick = function(){
      console.log(this);
      var thisTask = this.parentNode.parentNode;
      for(var i = 0; i < taskItem.length; i++){
        
        if (taskItem[i].className.indexOf("completed") == -1){
          thisTask.className += " completed";
        } else {
          thisTask.className = "task-item list-group-item";
        }
      }
    }



  }

}


var task = {
  "content": "",
  "isCompleted": false,
  "isRemoved" : false
}


