<?PHP

//form
$travelID;
$userName;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $travelID = $_POST["travelID"];
  $userName = $_POST["userName"];


  // edit xml file user travel id
  $xmlUrl = "../xml/users/". $userName . ".xml";
  $xmlDoc = simplexml_load_file($xmlUrl);
  
  $xmlDoc->user[0]->attributes()[0] = $travelID;
  
  file_put_contents($xmlUrl, $xmlDoc->saveXML());
  
  header("Location: http://localhost/opdracht-brightest/views/final/final.html");

};

?>