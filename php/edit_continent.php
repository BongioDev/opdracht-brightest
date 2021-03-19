<?PHP

// form inputs
$discription;
$continent;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $discription = $_POST["discription"];
  $continent = $_POST["continent"];

  $xmlUrl = "../xml/continents/". $continent . ".xml";
  $xmlDoc = simplexml_load_file($xmlUrl);

  $xmlDoc->continent->discription[0] = $discription;

  file_put_contents($xmlUrl, $xmlDoc->saveXML());

header("Location: http://localhost/opdracht-brightest/admin/start/admin.html?");
};

?>
