<?php
// Connecting to database as mysqli_connect("hostname", "username", "password", "database name");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$con = mysqli_connect("http://dbs-pdv-vm-2020.cisco.com/", "APPS ", "B1UE2UTH", "DV1G2C");
?>