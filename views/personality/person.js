
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
    if(x == "roadtrip"){
        counters["europe"] = parseInt(counters["europe"]) + 2;
        counters["asia"]++;
        counters["home"]++;
        counters["australia"] = parseInt(counters["australia"]) + 2;
        counters["america"] = parseInt(counters["america"]) + 2;
    } else if(x == "safari") {
        counters["asia"]++;
        counters["africa"] = parseInt(counters["africa"]) + 2;
        counters["australia"] = parseInt(counters["australia"]) + 2;
    } else {
        counters["europe"] = parseInt(counters["europe"]) + 2;
        counters["asia"]++;
        counters["africa"]++;
    }
    Choice.processChoice(counters);
    window.location.href = "../destination/dest.html";
}
