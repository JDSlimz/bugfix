$(document).ready(function(){
	var bugs = [];
	var i = 0;
	while(i < 8){
		bugs.push(Math.floor(Math.random()*900) + 100);
		i++;
	}
	 console.log(bugs);
});