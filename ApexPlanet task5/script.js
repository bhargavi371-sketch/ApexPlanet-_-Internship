
// Section navigation
function showPage(id) {
  document.querySelectorAll('.page').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// To-Do List (Local Storage)
function addNote() {
  const input = document.getElementById("noteInput");
  const note = input.value.trim();
  if (note) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    displayNotes();
  }
}

function displayNotes() {
  const list = document.getElementById("noteList");
  list.innerHTML = "";
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach((note, i) => {
    const li = document.createElement("li");
    li.textContent = note;
    li.onclick = () => {
      notes.splice(i, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      displayNotes();
    };
    list.appendChild(li);
  });
}
displayNotes();

// Product Listing
const products = [
  { name: "Mountain Adventure", type: "adventure", price: 200 },
  { name: "Beach Leisure", type: "leisure", price: 150 },
  { name: "Jungle Safari", type: "adventure", price: 250 },
  { name: "City Tour", type: "leisure", price: 100 },
];

function displayProducts(filtered = products) {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${p.name}</strong> - $${p.price}`;
    div.style.margin = "0.5rem 0";
    list.appendChild(div);
  });
}
displayProducts();

function filterProducts() {
  const filter = document.getElementById("filterSelect").value;
  const filtered = filter === "all" ? products : products.filter(p => p.type === filter);
  displayProducts(filtered);
}

function sortProducts() {
  const sort = document.getElementById("sortSelect").value;
  let sorted = [...products];
  if (sort === "price") sorted.sort((a, b) => a.price - b.price);
  displayProducts(sorted);
}

// Contact Form Message
function submitContact(e) {
  e.preventDefault();
  document.getElementById("contactMessage").textContent = "Thank you for contacting us!";
}
