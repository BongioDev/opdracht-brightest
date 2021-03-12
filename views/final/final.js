
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
function YourContinent() {
    // get points
    var stringNumbers = Object.values(counters);
    // points in array
    var numbers = [];
    // get continents
    var continents = Object.keys(counters);
    // get highest score
    var highestNumber;

    // push numbers from counter (object) to array: numbers
    for(i = 0; i < stringNumbers.length; i++) {
        numbers.push(parseInt(stringNumbers[i]));
        // store highest number
        highestNumber = Math.max(...numbers);
    };


    // get the highest scoring continent
    for(i = 0; i < continents.length; i++) {
        if(Object.entries(counters)[i][1] == highestNumber) {
            console.log(Object.entries(counters)[i]);
        }
    }
}
