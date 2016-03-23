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

function getSalesData(time, minPizza, maxPizza, minDelivery, maxDelivery){
  var randomPizza = getRandomIntInclusive (minPizza, maxPizza);
  var randomDelivery = getRandomIntInclusive(minDelivery, maxDelivery);
  return {
    time: time,
    pizzasSold: randomPizza,
    deliveriesMade: randomDelivery
  };
}

function createLocation(name){
  var storedLocation = {
    name: name,
    salesData: []
  };

  var eightOClock = getSalesData('8:00am', 0, 4, 0, 4);
  storedLocation.salesData.push(eightOClock);
  var nineOClock = getSalesData('9:00am', 0, 4, 0, 4);
  storedLocation.salesData.push(nineOClock);
  var tenOClock = getSalesData('10:00am', 0 , 4, 0, 4);
  storedLocation.salesData.push(tenOClock);
  var elevenOClock = getSalesData('11:00am', 0 , 4, 0, 4);
  storedLocation.salesData.push(elevenOClock);
  return storedLocation;
}
var ballard = createLocation('ballard');
var firstHill = createLocation('first-hill');
var intDist = createLocation('int-dist');
var southLakeUnion = createLocation('south-lake-union');
var georgeTown = createLocation('george-town');
var ravenna = createLocation('ravenna');
// get access to the ballard ul
var ballardUL = document.getElementById(ballard.name);
var firstHillUL = document.getElementById(firstHill.name);
var intDistUL = document.getElementById(intDist.name);
var southLakeUnionUL = document.getElementById(southLakeUnion.name);
var georgeTownUL = document.getElementById(georgeTown.name);
var ravennaUL = document.getElementById(ravenna.name);

// add the 8am data
var eightAmLi = document.createElement('li');
eightAmLi.textContent = ballard.salesData[0].time + ' ' + ballard.salesData[0].pizzasSold;
ballardUL.appendChild(eightAmLi);

// add the 9am data
var nineAmLi = document.createElement('li');
nineAmLi.textContent = ballard.salesData[1].time + ' ' + ballard.salesData[1].pizzasSold;
ballardUL.appendChild(nineAmLi);

// add the 10am data
var tenAmLi = document.createElement('li');
tenAmLi.textContent = ballard.salesData[2].time + ' ' + ballard.salesData[2].pizzasSold;
ballardUL.appendChild(tenAmLi);

// add the 11am data
var elevenAmLi = document.createElement('li');
elevenAmLi.textContent = ballard.salesData[3].time + ' ' + ballard.salesData[3].pizzasSold;
ballardUL.appendChild(elevenAmLi);
