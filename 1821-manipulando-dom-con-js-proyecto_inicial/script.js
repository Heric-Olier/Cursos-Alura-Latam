const btnCreate = document.querySelector("[data-form-btn]");

const createTask = (event) => {
  event.preventDefault();
  const formInput = document.querySelector("[data-form-input]");
  const value = formInput.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  if (value === "") {
    alert("Debes ingresar una tarea");
  } else {
    task.classList.add("card");
    formInput.value = "";
    const content = `<div>
    ${checkTask().outerHTML}
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>
  <i class="fas fa-edit editIcon icon"></i>`;
    task.innerHTML += content;
    list.appendChild(task);

    const trashIcon = task.querySelector(".trashIcon");
    trashIcon.addEventListener("click", deleteTask);
    
    const checkIcon = task.querySelector(".checkIcon");
    checkIcon.addEventListener("click", completeTask);


    // console.log(formInput.value);
    // console.log(content);
  }
};

btnCreate.addEventListener("click", createTask);

const checkTask = () => {
  const i = document.createElement("i");
  i.classList.add( "fas", "fa-check-circle", "checkIcon", "icon");
  return i;
};

const completeTask = (event) => {
    const task = event.target.parentElement;
    const taskText = task.querySelector(".task");
    taskText.classList.toggle("checked");
};

const deleteTask = (event) => {
    const task = event.target.parentElement;
    task.remove();
    };
