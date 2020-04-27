menu.onclick = function myFun(){ //следить за id="menu" 
	var x = document.getElementById("nAv"); //определить контейнер nav
	
	if(x.className === "inner-bar"){//если nav содержит только inner-bar
		x.className += " responsive";//				добавить responsive
	} else{
		x.className = "inner-bar";   //				убрать responsive
	}
}
prim.onclick = function fun(){
	var x = document.getElementById("h-prim");
	
	if(x.className === "a"){
		x.className += " b";
	}
	else{x.className = "a"}
}