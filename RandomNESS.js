var contentopacity = 0;
var num = Math.ceil(Math.random()*10);

var weeklywords = [];
weeklywords["Word 1"] = "definition here...bag";
weeklywords["Word 2"] = "definition here...dope";
weeklywords["Word 3"] = "definition here...cancel";

var weeklywordschoice = new Array("Bag","Dope","Cancel");

function loadpagecontent(){
	var wow = document.getElementById("wordofweek");
	var maincontent = document.getElementById("maincontent");
	var aboutme = document.getElementById("aboutmecontent");
	var logincontent = document.getElementById("logincontent");
	var survey = document.getElementById("surveysays");
	var htopic = document.getElementById("hottopic");
	wow.style.display = "block";
	maincontent.style.display = "block";
	aboutme.style.display = "block";
	logincontent.style.display = "none";
	survey.style.display = "block";
	htopic.style.display = "block";
	return;
}

function chooseword(){
	var choice = Math.ceil(Math.random()*2);
	var setwow = document.getElementById("wow");
	var setwow2 = document.getElementById("wow2");
	var selectchoice = weeklywordschoice[choice];
	var setchoice = weeklywords[selectchoice];
	if(sessionStorage.getItem("definition") == null){
	setwow.innerHTML = setchoice;
	setwow2.innerHTML = selectchoice;
	sessionStorage.setItem("choice", selectchoice);
	sessionStorage.setItem("definition", setchoice);
	return;
	} else {
	setwow2.innerHTML = sessionStorage.getItem("choice");
	setwow.innerHTML = sessionStorage.getItem("definition");
	return;
	}
	
}
var surveyA = [];
surveyA["Program"] = "Javascript HTML/HTML5 CSS Java";
var surveyQ = [];
surveyQ["Program"] = "Which programming language do you have the most experience in? ";
var surveyselect = ["Program"];

function choosesurvey(){
	var choice = 0;//Math.ceil(Math.random()*2);
	var squestion = document.getElementById("surveyquestion");
	var selectsurvey = surveyQ[surveyselect[choice]];
	
	var sa1 = document.getElementById("surquest1");
	var sa2 = document.getElementById("surquest2");
	var sa3 = document.getElementById("surquest3");
	var sa4 = document.getElementById("surquest4");
	
	var setquestion = [sa1,sa2,sa3,sa4];
	
	squestion.innerHTML = selectsurvey;
	sa4.innerHTML = "TEST";
	//alert(surveyA[surveyselect[choice]].split(" ").length);
	for(var i = 0; i < surveyA[surveyselect[choice]].split(" ").length; i++){
		setquestion[i].innerHTML = [surveyA[surveyselect[choice]].split(" ")[i]];
		sa4.innerHTML = [surveyA[surveyselect[choice]].split(" ")[i]];
	}
}
function fadeincontent(){
	var wow = document.getElementById("wordofweek");
	var maincontent = document.getElementById("maincontent");
	var aboutme = document.getElementById("aboutmecontent");
	var survey = document.getElementById("surveysays");
	var htopic = document.getElementById("hottopic");
	contentopacity += 0.1;
	wow.style.opacity = contentopacity;
	maincontent.style.opacity = contentopacity;
	aboutme.style.opacity = contentopacity;
	survey.style.opacity = contentopacity;
	htopic.style.opacity = contentopacity;
	if(contentopacity >= 0.8){
		contentopacity = 0.8;
		clearInterval(loadcontent);
		return;
	}
}

function registeruser(){
	var registercontent = document.getElementById("registration");
	var logintoggle = document.getElementById("logincontent");
	logintoggle.style.display = "none";
	registercontent.style.display = "block";
	return;
}

function loginuser(){
	var user = document.getElementById("username");
	var pass = document.getElementById("password");
	var ucheck = localStorage.getItem("username");
	var pcheck = localStorage.getItem("password");
	if(ucheck != null){
		var loadcontent = setInterval(fadeincontent, 500);
		loadpagecontent();
		chooseword();
		choosesurvey();
		return;
	}
	if(ucheck == user.value){
		alert("Username Passed");
		if(pcheck == pass.value){
			alert("Password Passed");
			var loadcontent = setInterval(fadeincontent, 500);
//			loadcontent;
			loadpagecontent();
			chooseword();
			return;
		}
	}
}

function collectregistration() {
	var name = document.getElementById("rusername");
	var password = document.getElementById("rpassword");
	var Uerror = document.getElementsByClassName("error");
	if(name.value.length <= 2){
		name.value = null;
		return alert("Username must be greater than 2 characters!");
	}
	if(password.value.length <= 2){
		password.value = null;
		return alert("Password must be greater than 2 characters!");
	}
	
	if(name.value.length >= 3 && password.value.length >= 3){
		localStorage.setItem("username",name.value);
		localStorage.setItem("password",password.value);
		alert("Welcome to .RandomNESS " + localStorage.getItem("username") + " Your registation is complete. Please Login!");
	}

}

function timesetter(){
	var d = new Date();
	var daysofweek = new Array("Sunday","Monday","Tuesday","Wednsday","Thursday","Friday","Saturday");
	var monthsofyear = new Array("January","Febuary","March","April","May","June","July","August","September","October","November","December");
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	var timeset = document.getElementById("timecontent");
	var dayset = document.getElementById("weekcontent");
	var day = daysofweek[d.getDay()];
	var date = d.getDate();
	var month = monthsofyear[d.getMonth()];
	if(hours < 10){
		hours = "0"+d.getHours();
	}
	if(mins < 10){
		mins = "0"+d.getMinutes();
	}
	if(secs < 10){
		secs = "0"+d.getSeconds();
	}

	timeset.innerHTML = hours + ":" + mins + ":" + secs;
	dayset.innerHTML = day + ", " + month + " " + date;
}	
setInterval(timesetter, 1000);

