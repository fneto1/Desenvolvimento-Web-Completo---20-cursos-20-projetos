<?php

namespace App;

use PDO;
use PDOException;

class Connection {
     public static function getDb(){
         try {
             $conn = new PDO(
                 "mysql:host=localhost;dbname=mvc;charset=utf8",
                 "root",
                 "1234"
             );

             return $conn;
         } catch (PDOException $e){

         }
     }
}