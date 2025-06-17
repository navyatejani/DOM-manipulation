function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle("completed");

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.innerHTML = "&times;";
  removeBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(removeBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Allow pressing Enter to add task
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});
