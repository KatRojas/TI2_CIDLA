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
    echo "No se encontraron coincidencias\n";
  }

}catch(MongoDB\Driver\Exception\Exception $e) {
  $filename = basename(__FILE__);
  echo "El $filename script ha experimentado un error.\n";
  echo "Falló con la siguiente excepción:\n";
  echo "excepción:", $e->getMessage(), "\n";
  echo "En archivo:", $e->getFile(), "\n";
  echo "En la linea:", $e->getLine(), "\n";
}
echo "$r";
?>
