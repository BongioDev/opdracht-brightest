
// to keep count, start
var counters = {
    "europe" : 0,
    "asia" : 0,
    "america" : 0,
    "africa" : 0,
    "australia" : 0,
    "home" : 0,
};


// set counter, and then pass it to the model, who will then store it in local storage
function choice(x) {
    if(x == "plane"){
        counters["europe"]++;
        counters["asia"]++;
        counters["america"]++;
        counters["africa"]++;
        counters["australia"]++;
    } else if(x == "car") {
        counters["europe"]++;
        counters["home"]++;
    } else if(x == "train") {
        counters["europe"]++;
        counters["home"]++;
    } else {
        counters["europe"]++;
        counters["home"]++;
    }
    Choice.processChoice(counters);
    window.location.href = "../stay/stay.html";
}
