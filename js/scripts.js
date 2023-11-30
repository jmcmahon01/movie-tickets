// Business Logic for Ticket object
function Ticket(movie, timeOfDay, age) {
  this.movie = movie;
  this.timeOfDay = timeOfDay;
  this.age = age;
}

Ticket.prototype.calculatePrice = function () {
  let baseMoviePrice = 10;
  if (this.movie === "old movie") {
    return baseMoviePrice -= 2;
  }
  if (this.timeOfDay === "matinee") {
    return baseMoviePrice -= 1;
  }
  if (this.age >= 65) {
    return baseMoviePrice -= 3
  }
}




