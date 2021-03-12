
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
    if(x == "cities"){
        counters["europe"] = parseInt(counters["europe"]) + 2;
        counters["asia"]++;
        counters["home"]++;
        counters["america"] = parseInt(counters["america"]) + 2;
    } else if(x == "beach") {
        counters["asia"]++;
        counters["australia"] = parseInt(counters["australia"]) + 2;
        counters["europe"] = parseInt(counters["europe"]) + 2;
    } else if(x == "roads") {
        counters["asia"]++;
        counters["australia"]++;
        counters["europe"] = parseInt(counters["europe"]) + 2;
        counters["america"] = parseInt(counters["america"]) + 2;
    } else if(x == "outdoor") {
        counters["asia"]++;
        counters["australia"]++;
        counters["europe"]++;
        counters["america"]++;
        counters["home"]++;
    } else {
        counters["asia"] = parseInt(counters["asia"]) + 3;
        counters["africa"]++;
    }
    Choice.processChoice(counters);
    window.location.href = "../final/final.html";
}
