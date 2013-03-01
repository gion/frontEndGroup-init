<?php
	error_reporting(0);
	header('Content-type: application/json');
	include "lib/db.php";



	$sql = "SELECT * FROM frontEndInit";

	if(isset($_REQUEST['id']))
		$sql .= " WHERE id='". $_REQUEST['id'] ."'";

	//$db->setJSON(true);


	//echo $sql;
	$user = $db->select($sql);
	echo json_encode($user);//'{"success"  :'. $success .'}';