// Business Logic for Ticket object
function Ticket(movie, timeOfDay, age) {
  this.movie = movie;
  this.timeOfDay = timeOfDay;
  this.age = age;
}

Ticket.prototype.calculatePrice = function () {
  let basePrice = 10;
  let oldMovie = 0;
  let matineeDiscount = 0;
  let seniorDiscount = 0;


  if (this.movie === "All Dogs Go To Heaven" || this.movie === "CasaBlanca" || this.movie === "The Princess Bride") {
    oldMovie = 2;
  }
  if (this.timeOfDay === "matinee") {
    matineeDiscount = 1;
  }
  if (this.age >= 65) {
    seniorDiscount = 3;
  }
  let totalPrice = basePrice - oldMovie - matineeDiscount - seniorDiscount;
  return totalPrice;
};
//UI logic
document.getElementById('calculateButton').addEventListener('click', function () {
  const movie = document.getElementById('movie').value;
  const timeOfDay = document.getElementById('timeOfDay').value;
  const age = document.getElementById('age').value;

  const ticket = new Ticket(movie, timeOfDay, age);

  // Display the result on the webpage
  document.getElementById('displayMovie').textContent = movie;
  document.getElementById('displayTimeOfDay').textContent = timeOfDay;
  document.getElementById('displayAge').textContent = age;
  document.getElementById('displayPrice').textContent = ticket.calculatePrice();

  // Show the ticket details section
  document.getElementById('ticketDetails').style.display = 'block';
  document.getElementById('resubmitButton').addEventListener('click', function () {
    // Reset the form
    document.getElementById('ticketForm').reset();

    // Hide the ticket details section
    document.getElementById('ticketDetails').style.display = 'none';
  });
});



