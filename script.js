$(document).ready(function(){
	var bugs = [];
	var i = 0;
	while(i < 8){
		bugs.push(Math.floor(Math.random()*900) + 100);
		i++;
	}
	
	add_elements(bugs);
});

function add_elements(bugs){
	for (var i = 0; i < bugs.length; i++) {
		$('body').append('Bug# ' + bugs[i] + ': <input id="toggle-demo" type="checkbox" data-toggle="toggle">');
	}
}
