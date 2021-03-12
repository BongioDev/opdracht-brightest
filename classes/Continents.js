
class Continent{

	constructor(continents){
        this.continents = continents;
    }

    getContinent() {
        // store the xml filename(s)
        var XMLurl = [];

        for(i = 0; i < this.continents.length; i++) {
            // push XML filenames in array
            XMLurl.push("../../xml/continents/" + this.continents[i][0] + ".xml");

        fetch(XMLurl[i]).then(response => response.text())
        .then(data => {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(data, "application/xml");
        console.log(xmlDoc);
        // showXML(xmlDoc);
        });
        }


    }
}
