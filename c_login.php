<?php
try {
  $cadena = $_POST['gmail'];
  $cadena = strtolower($cadena);
  $pass=$_POST['contra'];

  $mng = new MongoDB\Driver\Manager("mongodb://localhost:27017");
  $filter = [ 'gmail' => $cadena ];
  $query = new MongoDB\Driver\Query($filter);
  $rows = $mng->executeQuery("proyecto.usuarios", $query);

  $car = current($rows->toArray());
  if (!empty($car)) {
    $prueba = $car->contraseña;
    if ($prueba == $pass){
      $r = 1;
    }else {
      $r=2;
    }
  }else{
    echo "No match found\n";
  }

}catch(MongoDB\Driver\Exception\Exception $e) {
  $filename = basename(__FILE__);
  echo "The $filename script has experienced an error.\n";
  echo "It failed with the following exception:\n";
  echo "Exception:", $e->getMessage(), "\n";
  echo "In file:", $e->getFile(), "\n";
  echo "On line:", $e->getLine(), "\n";
}
echo "$r";
?>
