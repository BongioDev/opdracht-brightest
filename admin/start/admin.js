
// get the right XML document from select value
async function selectValue() {
    var Svalue = document.getElementById('continents-select').value;
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
    var countries = xmlDoc.getElementsByTagName("countries")[0].children;

    // fill input current continent
    document.getElementById('hidden').value = Svalue;
    document.getElementById('discription').value = xmlDoc.getElementsByTagName("discription")[0].childNodes[0].nodeValue;

    // // create inputs + fill inputs countries
    // for(var o = 0; o < countries.length; o++) {
    //     const row = document.getElementById("countries-div");


    //     // country name
    //     const div1 = document.createElement('div');
    //     div1.classList.add('mb-3');
    //     row.appendChild(div1);

    //     const header1 = document.createElement('h3');
    //     const headerText = document.createTextNode(countries[o].children[0].childNodes[0].nodeValue);
    //     header1.appendChild(headerText);
    //     div1.appendChild(header1);

    //     const label1 = document.createElement('label');
    //     label1.classList.add('form-label');
    //     const labelName = document.createTextNode("Country name");
    //     label1.appendChild(labelName);
    //     div1.appendChild(label1);

    //     const br1 = document.createElement('br');
    //     div1.appendChild(br1);

    //     const input1 = document.createElement('input');
    //     input1.type = "text";
    //     input1.name = "country-name";
    //     input1.value = countries[o].children[0].childNodes[0].nodeValue;
    //     div1.appendChild(input1);


    //     // county discription
    //     const div2 = document.createElement('div');
    //     div2.classList.add('mb-3');
    //     row.appendChild(div2);

    //     const label2 = document.createElement('label');
    //     label2.classList.add('form-label');
    //     const labelName2 = document.createTextNode("Country discription");
    //     label2.appendChild(labelName2);
    //     div2.appendChild(label2);

    //     const br2 = document.createElement('br');
    //     div2.appendChild(br2);

    //     const textarea = document.createElement('textarea');
    //     textarea.classList.add('form-control');
    //     textarea.name = "country-discription";
    //     textarea.form = "continent-form";
    //     textarea.rows = "4";
    //     textarea.cols = "50";
    //     textarea.value = countries[o].children[1].childNodes[0].nodeValue;
    //     div2.appendChild(textarea);


    //     // country URL
    //     const div3 = document.createElement('div');
    //     div3.classList.add('mb-3');
    //     row.appendChild(div3);

    //     const label3 = document.createElement('label');
    //     label3.classList.add('form-label');
    //     const labelName3 = document.createTextNode("Country URL");
    //     label3.appendChild(labelName3);
    //     div3.appendChild(label3);

    //     const br3 = document.createElement('br');
    //     div3.appendChild(br3);

    //     const input3 = document.createElement('input');
    //     input3.type = "text";
    //     input3.name = "country-link";
    //     input3.value = countries[o].children[3].childNodes[0].nodeValue;
    //     div3.appendChild(input3);


    //     // country image
    //     const div4 = document.createElement('div');
    //     div4.classList.add('mb-3');
    //     row.appendChild(div4);

    //     const label4 = document.createElement('label');
    //     label4.classList.add('form-label');
    //     const labelName4 = document.createTextNode("Country image path (voorlopig)");
    //     label4.appendChild(labelName4);
    //     div4.appendChild(label4);

    //     const br4 = document.createElement('br');
    //     div4.appendChild(br4);

    //     const input4 = document.createElement('input');
    //     input4.type = "text";
    //     input4.name = "country-link";
    //     input4.value = countries[o].children[2].childNodes[0].nodeValue;
    //     div4.appendChild(input4);


    //     // br
    //     const br5 = document.createElement('br');
    //     div4.appendChild(br5);

    //     // hr
    //     const hr = document.createElement('hr');
    //     hr.style.height = "5px";
    //     hr.style.color = "black";
    //     row.appendChild(hr);
    // };

}
