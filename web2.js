const taskList = [];

document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();
  if (taskValue === "") return;

  taskList.push(taskValue);

  const li = document.createElement("li");
  li.textContent = taskValue;

  // Remove on click (optional)
  li.addEventListener("click", () => {
    li.remove();
    const index = taskList.indexOf(taskValue);
    if (index !== -1) taskList.splice(index, 1);
  });

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!name || !emailPattern.test(email) || !message) {
    alert("Please enter valid contact information.");
    return;
  }

  // ✅ Don't reset the taskList — just display it again
  const resultDiv = document.getElementById("submittedData");
  resultDiv.innerHTML = `
    <h3>Submitted Contact Details:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <h4>To-Do Tasks:</h4>
    <ul>${taskList.map(task => `<li>${task}</li>`).join("")}</ul>
  `;

  // Optional: Reset only the contact form fields (not the task list)
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});
