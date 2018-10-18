<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "papicusers";
$conn = new mysqli($servername, $username, $password, $dbname);
$sql = "SELECT id,pswd FROM users";
$result = $conn->query($sql);
$isright=0;
while($row = $result->fetch_assoc()){
    $postid = $_POST["userid"];
    $postwd = $_POST["userpasswd"];
    if($postid==$row['id']&&$postwd==$row['pswd']){
        echo "login success, welcome!";
        $isright=1;
        break;
    }
}
if($isright=0)  echo "Fail";
?>