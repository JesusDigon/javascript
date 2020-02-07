<?php
$entrada = fopen('php://input','r');
$datos = fgets($entrada);
$datos = json_decode($datos,true);


    foreach ($datos['comunidad'] as $provincia){
            echo $provincia;
          }

            ?>