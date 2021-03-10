<?PHP

//form
$firstname;
$age;
$gender;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstname = $_POST["firstname"];
  $age = $_POST["age"];
  $gender = $_POST["gender"];


//make XML file

$xmlDoc = new DOMDocument('1.0');
$xmlDoc->formatOutput = true;

$root = $xmlDoc->createElement('root');
$xmlDoc->appendChild($root);

$user = $xmlDoc->createElement('user');
$user->setAttribute('travel_id', 'to be added');
$root->appendChild($user);

$fname = $xmlDoc->createElement('name', $firstname);
$user->appendChild($fname);

$age = $xmlDoc->createElement('age', $age);
$user->appendChild($age);

$gender = $xmlDoc->createElement('gender', $gender);
$user->appendChild($gender);

$xmlDoc->save("../xml/users/$firstname.xml");

header('Location: ../views/transport/transport.html');

}

?>