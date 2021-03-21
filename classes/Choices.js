
class Choice{

	constructor(){

    }

    static processChoice(counters) {
            localStorage.setItem("count_europe", counters["europe"]);
            localStorage.setItem("count_asia", counters["asia"]);
            localStorage.setItem("count_america", counters["america"]);
            localStorage.setItem("count_africa", counters["africa"]);
            localStorage.setItem("count_australia", counters["australia"]);
            localStorage.setItem("count_home", counters["home"]);
        } 
}
