<?php
$entrada = file_get_contents("provincias.json");
$datos = json_decode($entrada, true);
$comunidad = $_REQUEST['comunidad'];

foreach ($datos[$comunidad] as $provincia) {
  echo "<option>" . $provincia . "</option>";
}
?>