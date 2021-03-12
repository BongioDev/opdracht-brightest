
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
    if(x == "resort"){
        counters["europe"]++;
        counters["asia"]++;
        counters["africa"]++;
    } else if(x == "camping") {
        counters["europe"]++;
        counters["australia"]++;
        counters["home"]++;
    } else if(x == "hostel") {
        counters["europe"]++;
        counters["australia"] = parseInt(counters["australia"]) + 2;
        counters["asia"] = parseInt(counters["asia"]) + 2;
        counters["home"]++;
    } else {
        counters["europe"]++;
        counters["asia"]++;
        counters["america"]++;
        counters["africa"]++;
        counters["australia"]++;
        counters["home"]++;
    }
    Choice.processChoice(counters);
    window.location.href = "../prep/prep.html";
}
