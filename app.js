var time = ['8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00',
'4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00',
'2:00'];

var ulTagOne = document.getElementById('ballard');
var ulTagTwo = document.getElementById('first-hill');
var ulTagThree = document.getElementById('int-dist');
var ulTagFour = document.getElementById('south-lake-union');
var ulTagFive = document.getElementById('george-town');
var ulTagSix = document.getElementById('ravenna');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getSalesData(minPizza, maxPizza, minDelivery, maxDelivery){
  // var minPizza = 0;
  // var maxPizza = 4;
  // var minDelivery = 0;
  // var maxDelivery = 4;
  var randomPizza = getRandomIntInclusive (minPizza, maxPizza);
  var randomDelivery = getRandomIntInclusive(minDelivery, maxDelivery);
  return {
    pizzasSold: randomPizza,
    deliveriesMade: randomDelivery
  };

  console.log('8am-11am random pizzas: ' + randomPizza + ' random deliveries: ' + randomDelivery);
}

function get11amTo2am(){
  var minPizza1 = 0;
  var maxPizza1 = 7;
  var minDelivery1 = 0;
  var maxDelivery1 = 4;
  var randomPizza1 = getRandomIntInclusive (minPizza1, maxPizza1);
  var randomDelivery1 = getRandomIntInclusive(minDelivery1, maxDelivery1);
  console.log('11am-2am random pizzas: ' + randomPizza1 + ' random deliveries: ' + randomDelivery1);
}

function get2pmTo5pm(){
  var minPizza2 = 2;
  var maxPizza2 = 15;
  var minDelivery2 = 1;
  var maxDelivery2 = 4;
  var randomPizza2 = getRandomIntInclusive (minPizza2, maxPizza2);
  var randomDelivery2 = getRandomIntInclusive(minDelivery2, maxDelivery2);
  console.log('2pm-5pm random pizzas: ' + randomPizza2 + ' random deliveries: ' + randomDelivery2);
}
function get5pmTo8pm(){
  var minPizza3 = 15;
  var maxPizza3 = 35;
  var minDelivery3 = 3;
  var maxDelivery3 = 8;
  var randomPizza3 = getRandomIntInclusive (minPizza1, maxPizza1);
  var randomDelivery3 = getRandomIntInclusive(minDelivery3, maxDelivery3);
  console.log('5pm-8pm random pizzas: ' + randomPizza3 + ' random deliveries: ' + randomDelivery3);
}
function get8pmTo11pm(){
  var minPizza4 = 12;
  var maxPizza4 = 31;
  var minDelivery4 = 5;
  var maxDelivery4 = 12;
  var randomPizza4 = getRandomIntInclusive (minPizza1, maxPizza1);
  var randomDelivery4 = getRandomIntInclusive(minDelivery4, maxDelivery4);
  console.log('8pm-11pm random pizzas: ' + randomPizza4 + ' random deliveries: ' + randomDelivery4);
}
function get11pmTo2am(){
  var minPizza5 = 5;
  var maxPizza5 = 20;
  var minDelivery5 = 6;
  var maxDelivery5 = 11;
  var randomPizza5 = getRandomIntInclusive (minPizza5, maxPizza5);
  var randomDelivery5 = getRandomIntInclusive(minDelivery5, maxDelivery5);
  console.log('11pm-2am random pizzas: ' + randomPizza5 + ' random deliveries: ' + randomDelivery5);
}

// Duncans Notes below VVVVVVV
// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function addHourlySalesDataToLocation(storedLocation, pizzaSold, deliveriesMade){
//   storedLocation.hourlyData.push({
//     time: time,
//     pizzaSold: pizzaSold,
//     deliveriesMade: deliveriesMade,
//     driversNeeded: Math.ceil(deliveriesMade / 3)
//   });
//
//   var ballard = {
//     name: 'ballard',
//     hourlyData:[]
//   };
//   addHourlySalesDataToLocation(ballard, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
//   var ballardUL = document.getElementById(ballard.name);
//   var eightOClockli;
//   for (var i = 0; i < ballard.hourlyData.length; i++){
//     eightOClockli = document.createElement('li');
//     eightOClockli.textcontent = ballardUL.hourlyData[0].time + ' pizzas sold:' +
//   ballard.hourlyData[i].pizzaSold;
//     ballardUL.appendChild(eightOClockli);
//   }
// }
// addHourlySalesDataToLocation();
