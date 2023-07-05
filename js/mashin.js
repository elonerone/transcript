// JavaScript Document




var submitbtn = document.querySelector("#sub");

function submit1(){
	var name1 = document.querySelector("#name1").value;
	var math1 = document.querySelector("#math").value;
	var phys1 = document.querySelector("#phys").value;
	var His1 = document.querySelector("#History").value;
	var chem1 = document.querySelector("#chem").value;
	var Scie1 = document.querySelector("#Science").value;
	var Mus1 = document.querySelector("#Music").value;
	var Art1 = document.querySelector("#Art").value;
    
	var erorrDiv = document.querySelector("#error");
	var resultDiv = document.querySelector("#result");
	
	var erorrStr = "Please fill";
	var resultStr = "";
	
	var flag = true;
	
	if(name1 == "" ){
		flag = false; 
		erorrStr += " Name of The Student,";
	}
	if(math1 == "" ){
		flag = false; 
		erorrStr += " Math Point,";
	}
	if(phys1 == "" ){
		flag = false; 
		erorrStr += " Physics Point,";
	}
	if(His1 == "" ){
		flag = false; 
		erorrStr += " Chemistery Point";
	}
    if(Art1 == "" ){
		flag = false; 
		erorrStr += " Name of The Student,";
	}
	if(Mus1 == "" ){
		flag = false; 
		erorrStr += " Math Point,";
	}
	if(Scie1 == "" ){
		flag = false; 
		erorrStr += " Physics Point,";
	}
	if(chem1 == "" ){
		flag = false; 
		erorrStr += " Chemistery Point,";
	}
    
	
	if(!flag){
		erorrDiv.style.display = "block";
		resultDiv.style.display = "none";
		erorrDiv.innerHTML = erorrStr;
	}else{
		resultDiv.style.display = "block";
		erorrDiv.style.display = "none";
		resultStr = "Name: " + name1 + "<br>Math Point: " + Change(math1) + "<br>Physics Point: " + Change(phys1) + "<br>Chemistery Point: " + Change(chem1) + "<br>History point: " + Change(His1) + "<br>Science point:" + Change(Scie1) + "<br>Music point:" + Change(Mus1) + "<br>Art point:" + Change(Art1);
		resultDiv.innerHTML = resultStr;
	}
}

submitbtn.addEventListener("click", submit1);


function Change(point){
	
	var pointInt = parseInt(point);
    
	if(pointInt < 0 || pointInt > 20){
		console.log("Error in Input Point");
		return -1; 
	}
	
	if(pointInt <=20 && pointInt > 15){
		return "A";
	}else if(pointInt <=15 && pointInt > 13){
		return "B";
	}else if(pointInt <= 13 && pointInt >12){
		return "C";
	}else if(pointInt <=12 && pointInt > 11){
		return "D";
	}else if(pointInt <=11 && pointInt >= 10){
		return "E";
	}else{
		return "F";
	}
	
}

