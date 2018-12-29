<?php


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST,GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
     $host = "localhost";
     $db_name = "apimanage";
     $username = "root";
     $password = "";
     
        $conn = mysqli_connect($host, $username, $password, $db_name);
        //echo "Connection Done!";
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        switch($_GET["method"]){

            case "GET":
                $sql = "SELECT * FROM categories";
                $result = mysqli_query($conn, $sql);
                $res = array();
                if (mysqli_num_rows($result) > 0) {
                    // output data of each row
                    while($row = mysqli_fetch_assoc($result)) {
                        array_push($res,$row);
                    }
                    echo json_encode($res);
                }

            break;
            case "POST":
                $data = json_decode(file_get_contents("php://input"));
                
            break;
            default:
                $arr = array("Error"=>"Method Not Found!");
            break;

        }












?>