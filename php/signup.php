<?php 
session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$email = $_POST['email'];
		$password = $_POST['password'];

		if(!empty($email) && !empty($password) && !is_numeric($email))
		{

			//save to database
			$user_id = random_num(18);
			$query = "insert into users (user_id,email,password,firstname,lastname,userprofiletype) values ('$user_id','$email','$password','$firstname','$lastname','$userprofiletype')";

			mysqli_query($con, $query);

			header("Location: signup.php");
			die;
		}else
		{
			echo "Please enter some valid information!";
		}
	}
