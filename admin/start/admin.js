
// hide edit countries from
document.getElementById('edit-country').style.display = "none";

// set global variables for edit page
var Svalue;
var country;

// get the right XML document from select value
async function selectValue() {
    Svalue = document.getElementById('continents-select').value;
    console.log(Svalue);
    var userContinent = [];

    userContinent.push(Svalue);
    // get the right xml from class async
    var XMLcontinent = new Continent(userContinent);
    XMLcontinent.getContinent();

    try {
        //store xml document
        xmlDoc = await XMLcontinent.getContinent();
    } catch(e) {
        console.log(e);
    }
    console.log(xmlDoc);
    fillInputs(xmlDoc, Svalue);
}

function fillInputs(xmlDoc, Svalue) {
    // fill input current continent
    document.getElementById('hidden').value = Svalue;
    document.getElementById('discription').value = xmlDoc.getElementsByTagName("discription")[0].childNodes[0].nodeValue;

    showCountrySelect(xmlDoc);
}


function showCountrySelect (xmlDoc) {

    // show edit countries
    if (document.getElementById('edit-country').style.display === "none") {
        document.getElementById('edit-country').style.display = "block";
    }
    
    // determine select countries current continent
    var countries = xmlDoc.getElementsByTagName("countries")[0].children;
    const select = document.getElementById("country-select");

    for(var x = 0; x < countries.length; x++) {
        const option = document.createElement('option');
        option.value = countries[x].children[0].childNodes[0].nodeValue;
        const oText = document.createTextNode(countries[x].children[0].childNodes[0].nodeValue);
        option.appendChild(oText);
        select.appendChild(option);
    };  
}

function selectValueCountry() {

    // get selected country
    country = document.getElementById('country-select').value;
    localStorage.clear();
    localStorage.setItem('selected-country', country);
    localStorage.setItem('selected-continent', Svalue);
    

    // go to edit country page
    window.location.href = "http://localhost/opdracht-brightest/admin/edit/edit.html?";
}
