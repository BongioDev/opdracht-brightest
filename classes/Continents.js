
class Continent{

	constructor(usercontinent){
        this.usercontinent = usercontinent;
    }


    async getContinent() {
        // store the xml filename
        var XMLurl = "../../xml/continents/" + this.usercontinent[0] + ".xml";
        // fetch
        const response = await fetch(XMLurl);
        const xmlDocText = await response.text();
        var parser = new DOMParser();
        //store xml doc
        var xmlDoc = parser.parseFromString(xmlDocText, "application/xml");

        return xmlDoc;
    }
}
