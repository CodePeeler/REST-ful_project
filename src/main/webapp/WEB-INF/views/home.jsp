<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<script src="/resources/scripts/script.js"></script>
	<link rel="stylesheet" href="/resources/style/style.css">
	<title>Home</title>
</head>
<body>

	<div id="frame">
	
		<h1 class="argColor">Spring MVC</h1>
		
		<h2>REST-ful Ajax service</h2>
		
		<div id="caption">Contact Details Look-up</div>		
		
		<form action=""> 
			<label>Enter contact id:</label><input type="text" id="txt1" onkeyup="showContact(this.value)" />
		</form>	
	
		<table>
			<tr>
				<td><div id="nameArg" class="argColor"></div></td>
				<td><div id="nameResult" class="resultColor"></div></td>			
			</tr>
				<tr>
				<td><div id="emailArg" class="argColor"></div></td>
				<td><div id="emailResult" class="resultColor"></div></td>			
			</tr>
				<tr>
				<td><div id="phoneArg" class="argColor"></div></td>
				<td><div id="phoneResult" class="resultColor"></div></td>			
			</tr>
		</table>
		
	</div>
	
	
	
</body>
</html>
