
class ContinentOld{

	constructor(userContinentss){
        this.userContinentss = userContinentss;
    }

    async getContinent() {
        // store the xml filename(s)
        var XMLurl = [];
        //XML ducuments
        var xmlDoc;

        for(var x = (this.userContinentss.length - 1); x >= 0; x--) {
            // push XML filenames in array
            XMLurl.push("../../xml/continents/" + this.userContinentss[x][0] + ".xml");

            const response = await fetch(XMLurl[x]);
            var xmlDocText = await response.text();
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(xmlDocText, "application/xml");
        }
        console.log(XMLurl);


        return xmlDoc;
    }
}

            <div class="col-md-6">
               <div class="mx-auto card" style="width: 18rem;">
                <img src="#" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text"></p>
                  <a href="#" class="info btn btn-primary" target="">More info!</a>
                </div>
              </div>
           </div>
          

//gewoon 1 continent kiezen om het makkelijk te houden? anders functie kapot + in de html ook makkelijker