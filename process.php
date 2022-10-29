<?php 
	//CONTRIBUTED BY SUHAS
  $db = mysqli_connect('127.0.0.1', 'root', '', 'taken_email');
  $username = "";
  $email = "";
  if (isset($_POST['register'])) {
  	$username = $_POST['username'];
  	$email = $_POST['email'];
	$gender = $_POST['gender'];
	$DOB = $_POST['dob'];
	$governmentid = $_POST['governmentid'];
	$password = $_POST['password'];

  	$sql_u = "SELECT * FROM users WHERE username='$username'";
  	$sql_e = "SELECT * FROM users WHERE Email='$email'";
	$sql_g = "SELECT * FROM users WHERE Gender='$gender'";
	$sql_d = "SELECT * FROM users WHERE DoB='$DOB'";
	$sql_gi = "SELECT * FROM users WHERE governmentid='$governmentid'";
  	$res_u = mysqli_query($db, $sql_u);
  	$res_e = mysqli_query($db, $sql_e);
	$res_g = mysqli_query($db, $sql_g);
	$res_d = mysqli_query($db, $sql_d);
	$res_gi = mysqli_query($db, $sql_gi);

  	if (mysqli_num_rows($res_u) > 0) {
  	  $name_error = "Sorry... username already taken"; 	
  	}else if(mysqli_num_rows($res_e) > 0){
  	  $email_error = "Sorry... email already taken"; 	
  	}else{
           $query = "INSERT INTO users (username, Email,Gender,DoB,Governmentid,Password) 
      	    	  VALUES ('$username', '$email','$gender','$dob','$governmentid', '".md5($password)."')";
           $results = mysqli_query($db, $query);
           echo 'Saved!';
           exit();
  	}
  }
  ?>
  
