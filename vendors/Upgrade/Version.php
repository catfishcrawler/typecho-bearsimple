<?php

function json($code='1', $msg='success',$version='1.8.1'){
	$data['code']     = $code;
	$data['message']  = $msg;
	$data['version']  = $version;
	echo json_encode($data, JSON_UNESCAPED_UNICODE);
}

json();