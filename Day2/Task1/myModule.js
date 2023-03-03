// class MyClass {
//     items = [];
//     addItem(itemName, itemPrice) {
//       let item = { itemName, itemPrice };
//       this.items.push(item);
//     }

//     getTotalPrice() {
//       let total = 0;
//       for (let i in this.items) {
//         total += this.items[i].itemPrice;
//       }
//       return total;
//     }
//   }

//   module.exports = {
//     MyClass,
//   };

class Person {
  tickets = [];
  setTicket(
    id,
    seatNum,
    flightNum,
    departureAndArrivalAirport,
    travellingDate
  ) {
    let ticket = {
      id,
      seatNum,
      flightNum,
      departureAndArrivalAirport,
      travellingDate,
    };
    this.tickets.push(ticket);
  }
  getOneTicket(Ticketid) {
    console.log("get1Ticket");
    // lazem haga unique
    for (let i in this.tickets) {
      if (Ticketid == this.tickets[i].id) {
        return this.tickets[i];
      }
    }
  }
  displayAllTickets() {
    //
    // console.log("displayAll");
    // return this.tickets;

    this.tickets.forEach((element) => console.log(element));
  }
  updateInfo(
    id,
    seatNum,
    flightNum,
    departureAndArrivalAirport,
    travellingDate
  ) {
    //
    console.log("update");
    for (let i in this.tickets) {
      console.log("In for loop");
      if (this.tickets[i].id == id) {
        console.log(this.tickets[i].id);
        this.tickets[i].seatNum = seatNum;
        this.tickets[i].flightNum = flightNum;
        this.tickets[i].departureAndArrivalAirport = departureAndArrivalAirport;
        this.tickets[i].travellingDate = travellingDate;
        break;
      }
    }
  }
}

module.exports = {
  Person,
};
