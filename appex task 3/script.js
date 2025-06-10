
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmation").textContent = "Thank you! Your trip is booked.";
});
