<?PHP

// form inputs
$countryName;
$countryDis;
$countryUrl;
$countryImage;
$continent;
$xmlCountry;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $countryName = $_POST["country"];
  $countryDis = $_POST["discription"];
  $countryUrl = $_POST["url"];
  $countryImage = $_POST["image"];
  $continent = $_POST["continent"];

  $xmlUrl = "../xml/continents/". $continent . ".xml";
  $xmlDoc = simplexml_load_file($xmlUrl);


  for($i = 0; $i < count($xmlDoc->continent->countries->country); $i++) {
      if($xmlDoc->continent->countries->country[$i]->name == $countryName){
        // asign values
        $xmlDoc->continent->countries->country[$i]->name = $countryName;
        $xmlDoc->continent->countries->country[$i]->discription = $countryDis;
        $xmlDoc->continent->countries->country[$i]->image = $countryImage;
        $xmlDoc->continent->countries->country[$i]->link = $countryUrl;
      }
  };

  // save file
  file_put_contents($xmlUrl, $xmlDoc->saveXML());

header("Location: http://localhost/opdracht-brightest/admin/edit/edit.html?");
};
?>
