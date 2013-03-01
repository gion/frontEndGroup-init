<?php
	error_reporting(0);
	header('Content-type: application/json');
	include "lib/db.php";


	$user = $_POST['user'];

	$sql = "INSERT INTO frontEndInit (";
	$sql2 = 'VALUES (';
	$l = count($user);
	$i = 0;

	foreach ($user as $k => $v) {
		$sep = ++$i < $l ? ', ' : ')';
		$sql .= $k . $sep;
		$sql2 .= '"' . addslashes($v) . '"' . $sep;
	}

	$sql .= $sql2;

	$success = !!$db->insert($sql) || true;
	//echo $sql;
	//var_dump(!!$db->conn);
	echo '{"success"  :'. $success .'}';