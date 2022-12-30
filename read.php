<?php
//Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With , Access-Control-Allow-Methods");
header("Access-Control-Allow-Methods: GET");


//Connect To the DataBase
$username="root";
$password="";
$database = new PDO("mysql:host=localhost;dbname=gestionuser;charset=utf8;",$username,$password);


//Get Data
//Get Data From DataBase
$items = $database->prepare("SELECT * FROM user");
$items->execute();
$items = $items->fetchAll(PDO::FETCH_ASSOC);

//Data Json
print_r(json_encode($items));