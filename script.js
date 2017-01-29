var bugs = [];

$(document).ready(function(){
	
	var i = 0;
	while(i < 8){
		bugs.push(Math.floor(Math.random()*900) + 100);
		i++;
	}
	
	add_elements();
	
	//watch for toggles
	$('.bug').change(function() {
		
		if(!$(this).prop('checked')){
			activate_more_bugs();
		}
		
    })
});

function add_elements(){
	for (var i = 0; i < bugs.length; i++) {
		$('body').append('Bug# ' + bugs[i] + ': <input id="toggle-' + bugs[i] + '" class="bug" type="checkbox" data-toggle="toggle"><br>');
	}
	
	$('.bug').bootstrapToggle();
	
	select_starting_bug();
}

function select_starting_bug(){
	var bug_index = Math.floor(Math.random()*bugs.length);
	$('#toggle-'+bugs[bug_index]).bootstrapToggle('on');
}

function activate_more_bugs(){
	var num_to_activate = Math.floor(Math.random()*bugs.length/2);
	
	for(var i=0; i<num_to_activate; i++){
		var bug_to_activate = Math.floor(Math.random()*bugs.length);
		$('#toggle-'+bugs[bug_to_activate]).bootstrapToggle('on');
	}
}