
// get the counter values for checking the highest number
var counters = {
    "europe" : localStorage.getItem('count_europe'),
    "asia" : localStorage.getItem('count_asia'),
    "america" : localStorage.getItem('count_america'),
    "africa" : localStorage.getItem('count_africa'),
    "australia" : localStorage.getItem('count_australia'),
    "home" : localStorage.getItem('count_home'),
};


// get the continent with the most points

// get points from counters
var stringNumbers = Object.values(counters);
// get all continents from counters
var continents = Object.keys(counters);
// all points in array
var numbers = [];
// store highest score
var highestNumber;
// store the user's highest scoring continent(s)
var userContinents = [];

// push numbers from counters(object) to numbers(array)
for(i = 0; i < stringNumbers.length; i++) {
    numbers.push(parseInt(stringNumbers[i]));
    // store highest number
    highestNumber = Math.max(...numbers);
};

// get the highest scoring continent
for(i = 0; i < continents.length; i++) {
    if(Object.entries(counters)[i][1] == highestNumber) {
        //push highest continent(s) in array
        userContinents.push(Object.entries(counters)[i]);
        // console.log(Object.entries(counters)[i]);
    }
}
// console.log(userContinents);

    
// get the right xml from class
    const XMLcontinents = new Continent(userContinents);

    XMLcontinents.getContinent();

    //xmldoc naar hier krijgen??? 
    console.log(XMLcontinents);
