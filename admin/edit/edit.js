
// get selected country and continent from local storage
var continent = [];
continent.push(localStorage.getItem('selected-continent'));
var country = localStorage.getItem('selected-country');
var xmlDoc;

// get current continent XML
document.addEventListener('DOMContentLoaded', async () => {
    // get the right xml from class async
    var XMLcontinent = new Continent(continent);
    XMLcontinent.getContinent();

    try {
        //store xml document
        xmlDoc = await XMLcontinent.getContinent();
    } catch(e) {
        console.log(e);
    }
    fillInputs(xmlDoc);
});

function fillInputs(xmlDoc) {
    // all countries from xml document
    const AllXMLCountries =  xmlDoc.getElementsByTagName("country");
    var XMLcountry;
    // get the right country
    for(c = 0; c < AllXMLCountries.length; c++) {
        if(country == AllXMLCountries[c].children[0].firstChild.nodeValue){
            XMLcountry = AllXMLCountries[c];
        }
    }


    // fill input current country
    document.getElementById('country-name').value = XMLcountry.children[0].childNodes[0].nodeValue;
    document.getElementById('country-discription').value = XMLcountry.children[1].childNodes[0].nodeValue;
    document.getElementById('country-url').value = XMLcountry.children[3].childNodes[0].nodeValue;
    document.getElementById('country-image').value = XMLcountry.children[2].childNodes[0].nodeValue;
    document.getElementById('hidden-continent').value = localStorage.getItem('selected-continent');
}
