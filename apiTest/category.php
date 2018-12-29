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
                if(isset($data->name))
                {

                    
                    $sql = "INSERT INTO categories (name) VALUES ('".$data->name."')";

                    if ($conn->query($sql) === TRUE) {
                        $arr = array("Message"=>"Data Inserted!");
                    } else {
                        
                        $arr = array("Error"=>$sql . "<br>" . $conn->error);
                        
                    }
                    //$arr = array("Message"=>"I Got u with name:".$data->name);
                    echo json_encode($arr);
                }
            break;
            default:
                $arr = array("Error"=>"Method Not Found!");
            break;

        }
        
        $conn->close();










?>