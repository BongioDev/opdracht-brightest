
// to keep count, get previous values back from localstorage
var counters = {
    "europe" : localStorage.getItem('count_europe'),
    "asia" : localStorage.getItem('count_asia'),
    "america" : localStorage.getItem('count_america'),
    "africa" : localStorage.getItem('count_africa'),
    "australia" : localStorage.getItem('count_australia'),
    "home" : localStorage.getItem('count_home'),
};


// set counter, and then pass it to the model, who will then store it in local storage
function choice(x) {
    if(x == "culture"){
        counters["europe"]++;
        counters["asia"] = parseInt(counters["asia"]) + 2;
        counters["africa"] = parseInt(counters["africa"]) + 2;
    } else if(x == "adventure") {
        counters["europe"]++;
        counters["asia"]++;
        counters["africa"]++;
        counters["australia"]++;
        counters["america"]++;
    } else if(x == "route") {
        counters["europe"]++;
        counters["australia"]++;
        counters["asia"]++;
        counters["america"]++;
        counters["home"]++;
    } else {
        counters["europe"]++;
        counters["asia"]++;
        counters["africa"]++;
        counters["home"]++;
    }
    Choice.processChoice(counters);
    window.location.href = "../personality/person.html";
}
