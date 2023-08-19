document.querySelector("#push").onclick = function(){
    if(document.querySelector('input').value.length == 0){
        alert("Please enter a task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
    <div class="task">
        <input type="checkbox" id="myCheck" onclick="myFunction()"> 
        <span id="taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
            Delete
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
    
`;

    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
       current_tasks[i].onclick = function(){
           this.parentNode.remove();
       }
    
    }document.querySelector('#newtask input').value = "";
}}

function myFunction() {
    var checkBox = event.target;
    var taskName = checkBox.nextElementSibling;
    var deleteButton = taskName.nextElementSibling;
    if (checkBox.checked == true) {
      taskName.style.textDecoration = "line-through";
      deleteButton.style.textDecoration = "line-through";
    } else {
      taskName.style.textDecoration = "none";
      deleteButton.style.textDecoration = "none";
    }
  }    
