// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
  } else {
    alert("Thank you, " + name + ". Your message has been sent.");
    this.reset();
  }
});

// To-do List
function addTodo() {
  const input = document.getElementById("todoInput");
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => li.remove();
    document.getElementById("todoList").appendChild(li);
    input.value = "";
  }
}
