<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "papicusers";
$conn = new mysqli($servername, $username, $password, $dbname);
$postid = $_POST["userid"];
$postwd = $_POST["userpasswd"];
$postwd1 = $_POST["userpasswd1"];
if($postwd1==$postwd)
{
    $sql = "INSERT INTO users(id,pswd)
    VALUES($postid,$postwd)";
    echo 'Success!';
}
else echo "Fail";
?>