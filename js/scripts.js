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


  if (this.movie === "old movie") {
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




