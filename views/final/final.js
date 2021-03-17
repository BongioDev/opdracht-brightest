
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
var userContinent;


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
        userContinent = Object.entries(counters)[i];
    }
}

// get the XML document
document.addEventListener('DOMContentLoaded', async () => {
    // get the right xml from class async
    var XMLcontinent = new Continent(userContinent);
    XMLcontinent.getContinent();

    try {
        //store xml document
        var xmlDoc = await XMLcontinent.getContinent();
    } catch(e) {
        console.log(e);
    }
    // pass xmldocument to function 
    useXML(xmlDoc);
});


function useXML(xmlDoc) {
    // store xml nodes values
    var continentName = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    var continentDis = xmlDoc.getElementsByTagName("discription")[0].childNodes[0].nodeValue;
    var countries = xmlDoc.getElementsByTagName("countries")[0].children;

    // add continent names to classes......
    for (var i = 0; i < document.getElementsByClassName('continent-name').length; i++) {
        document.getElementsByClassName('continent-name')[i].innerHTML = continentName;
    }
    
    // add continent discription
    document.getElementById('continent-dis').innerHTML = continentDis;

    // add country data to cards
    for(var o = 0; o < countries.length; o++) {
        const row = document.getElementById("country-row");
        
        const div1 = document.createElement('div');
        div1.classList.add('col-md-6');
        row.appendChild(div1);

        const div2 = document.createElement('div');
        div2.classList.add('mx-auto', 'card');
        div2.style.width = '18rem';
        div1.appendChild(div2);

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', countries[o].children[2].childNodes[0].nodeValue);
        div2.appendChild(img);

        const div3 = document.createElement('div');
        div3.classList.add('card-body');
        div2.appendChild(div3);

        const h5 = document.createElement('h5');
        h5.classList.add('card-title');
        const h5Text = document.createTextNode(countries[o].children[0].childNodes[0].nodeValue);
        h5.appendChild(h5Text);
        div3.appendChild(h5);

        const p = document.createElement('p');
        p.classList.add('card-text');
        const pText = document.createTextNode(countries[o].children[1].childNodes[0].nodeValue);
        p.appendChild(pText);
        div3.appendChild(p);

        const anchor = document.createElement('a');
        anchor.classList.add('info', 'btn', 'btn-primary');
        anchor.setAttribute('href', countries[o].children[3].childNodes[0].nodeValue);
        anchor.setAttribute('target', '_blank');
        const buttonText = document.createTextNode('More info!');
        anchor.appendChild(buttonText);
        div3.appendChild(anchor);

        // document.getElementsByClassName("card-title")[o].innerHTML = countries[o].children[0].childNodes[0].nodeValue;
        // document.getElementsByClassName("card-text")[o].innerHTML = countries[o].children[1].childNodes[0].nodeValue;
        // document.getElementsByClassName("card-img-top")[o].src = countries[o].children[2].childNodes[0].nodeValue;
        // document.getElementsByClassName("info")[o].href = countries[o].children[3].childNodes[0].nodeValue;
    } 
}
