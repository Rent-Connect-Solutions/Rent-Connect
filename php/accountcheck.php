<?php
session_start();
require_once 'connection.php'; // connect to DB
$user_account_check = check_login($con); // map the call as a function

if($user_account_check['userprofiletype'] != 'tenet') {
    // if the account type is not tenet, redirect to error page/show warning
  }else
  {
    echo "Sorry your account isn't able to view this page!";
  }
