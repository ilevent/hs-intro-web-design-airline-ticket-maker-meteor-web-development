var ticket_template = "Joe Shmoe flying on Fancy Airlines Flight Number 000 arriving at Fancy Destination at 2400 hours. The flight will depart from gate 100.";
var bessie_ticket = ticket_template.replace("Joe Shmoe", "Bessie Baker").replace("Fancy Airlines", "Delta").replace("000","939").replace("Fancy Destination", "Atlanta").replace("2400", "8pm").replace("100","B10");
alert(bessie_ticket);

var name = "Mom";
var airline = "United Airlines";
var flight_destination = "San Francisco";
var flight_arrival_time = "10:15am"
var gate = "A62";

var mom_ticket = ticket_template.replace("Joe Shmoe", name).replace("Fancy Airlines", airline).replace("Fancy Destination", flight_destination).replace("2400", flight_arrival_time).replace("100", gate);

alert(mom_ticket);

// Your mom plans to fly to San Francisco on United Airlines on December 15. Her flight will arrive at 10:15am. The flight will take off from Gate A62. Create variables(name, airline, flight_number, flight_destination, flight_arrival_time, gate).


//Code Your Solution Here