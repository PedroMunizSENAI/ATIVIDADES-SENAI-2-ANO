const taskInput = document.getElementById("task_input");
const addTaskBtn = document.getElementById("add_task_btn");
const progress = document.getElementById("progress");
const progressNumbers = document.getElementById("number");
const taskList = document.getElementById("task_list");

console.log("JS CONECTADO");
console.log(taskInput);
console.log(addTaskBtn);
console.log(progress);
console.log(progressNumbers);
console.log(taskList);

const addTask = (event, completed = false) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();

  if (!taskText) {
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" class="checkbox" ${
    completed ? "checked" : ""
  }>
  <span>${taskText}</span>
  <div class="task_buttons">
    <button class="edit_btn">
      <i class="fa-solid fa-pen"></i>
    </button>
    <button class="delete_btn">
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>`;

  const checkbox = li.querySelector(".checkbox");
  const editBtn = li.querySelector(".edit_btn");

  if (completed) {
    const isChecked = checkbox.isChecked;
    li.classList.add("completed", isChecked);
    editBtn.disabled = true;
    editBtn.style.opacity = isChecked ? "0.5" : 1;
    editBtn.style.pointerEvents = "none";
  }

  checkbox.addEventListener("change", () => {
    const isChecked = checkbox.isChecked;
    li.classList.toggle("completed", isChecked);
  });

  editBtn.addEventListener("click", () => {
    taskInput.value = li.querySelector("span").textContent;
    li.remove();
  });

  li.querySelector(".delete_btn").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
};

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask(e);
  }
});
