let myMyodule = require("./myModule");

// console.log(myMyodule);
// console.log(myMyodule.id);

// (id,seatNum, flightNum, departureAndArrivalAirport, travellingDate)
var Person = myMyodule.Person;

let person1 = new Person();

person1.setTicket(1, 100, 200, "Cairo airport", "22-9-2023");
// person1.getOneTicket(1);
// person1.displayAllTickets();
// person1.updateInfo();

person1.setTicket(2, 101, 200, "Alexandria airport", "23-9-2023");
// person1.getOneTicket(1);
// person1.displayAllTickets();
// person1.updateInfo();

// Display one
// console.log(person1.getOneTicket(1));
person1.updateInfo(1, 300, 400, "Paris", "15-11-2023");

// console.log(person1.displayAllTickets());
person1.displayAllTickets();
