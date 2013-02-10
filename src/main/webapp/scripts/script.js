
	
function showContact(str) { 
	
	
	var xmlhttp;
	//*****************************
	if(str.length ==0){
		  
	    document.getElementById("nameArg").innerHTML=""; 
	    document.getElementById("nameResult").innerHTML=""; 
	    
	    document.getElementById("emailArg").innerHTML=""; 
	    document.getElementById("emailResult").innerHTML="";
	    
	    document.getElementById("phoneArg").innerHTML=""; 
	    document.getElementById("phoneResult").innerHTML="";
		  			  
	    return;
	  }
	
	//*****************************
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
			
	xmlhttp.onreadystatechange=function(){
		
	  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		    
		    var name, email, phone;
		    xmlDoc=xmlhttp.responseXML;
		    
		    name=xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
		    email=xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
		    phone=xmlDoc.getElementsByTagName("phone")[0].childNodes[0].nodeValue;
		    
		   
		    document.getElementById("nameArg").innerHTML="Name: "; 
		    document.getElementById("nameResult").innerHTML=name; 
		    
		    document.getElementById("emailArg").innerHTML="Email: "; 
		    document.getElementById("emailResult").innerHTML=email;
		    
		    document.getElementById("phoneArg").innerHTML="Phone: "; 
		    document.getElementById("phoneResult").innerHTML=phone;	  
		}	      
    }; 
    xmlhttp.open("GET", "http://rest-ful_project.cloudfoundry.com/members/"+str, true);
	//xmlhttp.open("GET","http://localhost:8080/members/"+str, true);
	xmlhttp.send();
 };

