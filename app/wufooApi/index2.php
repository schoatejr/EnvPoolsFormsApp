<?php

//version 1

require_once('ApiExamples.php');
$example = new ApiExample();
$functionName = $_GET['functionName'];
$example->$functionName();

?>