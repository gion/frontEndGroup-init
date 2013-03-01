<?php 
	include 'dbManager.php';
	//$user='root', $pass='', $db_url='localhost',$db=''
	$db = new EasyPhpMysqlDb('bogdang', 'bogdangdevelop13#','localhost', 'bogdang');
	$db->connect();

	
	//$db = mysqli_connect("example.com","peter","abc123","my_db");
