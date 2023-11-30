## Tests
Describe: Ticket(); 
Test: "create a constructor function that makes object 'Tickets' and assigns properties: movie, timeOfDay, and age"
Code: Ticket;
Output: {movie: , timeOfDay: , age: }

Describe: calculateMoviePrice();
Test: "The base price of any movie is 10. If the movie selected is an older movie than the function will subtract 2 dollars from the base price"
Code: calculatePrice("old movie", 2:00, 21);
Output: 8

