<?php
//Headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST");


//Connect To The DataBase 
  $username="root";
  $password="";
  $database = new PDO("mysql:host=localhost;dbname=gestionuser;charset=utf8",$username,$password);


  if(isset($_POST["firstnameInp"]) && isset($_POST["lastnameInp"]) && isset($_POST["ageInp"]) && isset($_POST["countryInp"])){

  $addData = $database->prepare("INSERT INTO user(firstname,lastname,age,country) VALUES (:firstname , :lastname , :age , :country)");
  
  $addData->bindParam("firstname", $_POST["firstnameInp"]);
  $addData->bindParam("lastname", $_POST["lastnameInp"]);
  $addData->bindParam("age", $_POST["ageInp"]);
  $addData->bindParam("country", $_POST["countryInp"]);

  if($addData->execute()){
    print_r(json_encode(["message" => "User Added Successfully"]));
  }else{
    print_r(json_encode(["message" => "Fail In Add User"]));
  }

  }else{
    print_r(json_encode(["message" => "You Must Add Data !"]));
  }