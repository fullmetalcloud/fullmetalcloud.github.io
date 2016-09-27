<!DOCTYPE HTML>
<?php
/*
	$hostname	=	"hostname";
	$username	=	"username";
	$password	=	"password";
	$dbname     =   "databasename";
*/
    $hostname   =   "localhost";
    $username   =   "edmysql";
    $password   =   "vic3roy$1t@";
    $dbname     =   "POKEDEX";

//	Create	connection	
	$conn	=	mysqli_connect($hostname,	$username,	$password, $dbname);		
//	Check	connection	
	if	(!$conn) {
		die("Connection	failed:	"	.	mysqli_connect_error());
	}	
	echo	"Connected	successfully";	

	//Add Code/Queries for connection
?>		
<html>
<head>
<title>Title Page Name</title>

<!--JavaScript Setup-->
<script>
 
function changeinweb(idName,xmlhttp) {
    //This function is for setting up changing Website without refreshing
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById(idName).innerHTML = xmlhttp.responseText;
        }
    };
    return xmlhttp;
}
function changeOne(input,id)
{
	if (input == "") {
        document.getElementById(id).innerHTML = "";
        return;
    } else { 
    	<<?php 
    		echo "<br>".input ."<br>";
    	 ?>
    	var table = "Name";
    	var col = "name";
		changeinweb(id,xmlhttp);
    	xmlhttp.open("GET","checkdatabase.php?q="+input+"&c="+col+" &t="+table,true);
    	xmlhttp.send();
	}
}

</script>

</head>
<body style='background-color:lightsteelblue'>
<form action='PageName.php' method='POST'>
<header><h3>Title Label<h3></header>
<br>

Text Box Label: 
<input type="text" size=30 name="labelName" onchange="changeName(this.value)"/>
<div id="changeName"><b>Something should change here...</b></div>
<br><br>

Drop Down Label From sql:
<br>
<?php
$sql = "SELECT * FROM Name";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
	echo "<select>";
	while($row = mysqli_fetch_row($result)) {
	    echo "<option value ='" . $row[0] . "'>" . $row[1] . "</option>";
	}
} 
else {
	echo "0 results";
}
echo "</select>";
mysqli_free_result($result);
?>
<br><br>
<br><br>

Radio Label
<input type="radio" name="radio" value="Yes">Yes
<input type="radio" name="radio" value="No">No
<br><br>

Option Label
<select name="">
  <option value="1">Female</option>
  <option value="2">Male</option>
  <option value="3">Gender Queer</option>
  <option value="4">Trans M2F</option>
  <option value="5">Trans F2M</option>
</select>
<br><br>

Check Box Label:<br>
	<input type="checkbox" name="checkbox" value="1">Label 1<br>
	<input type="checkbox" name="checkbox" value="2">Label 2<br>
	<input type="checkbox" name="checkbox" value="3">Label 3<br>
	<br>

<p>
<input type=submit name='Submit Label' value='submit' />

<input type=reset value='clear' />
<a href="http://localhost/Link_File_Name.php">
Link Name</a>
</form>
<hr>
</body>
</html>

<?php
	mysqli_close($conn);
?>	
