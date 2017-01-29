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
		
		if($(this).prop('checked')){
			console.log(this.id);
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
	jQuery('#toggle-'+bugs[bug_index]).bootstrapToggle('on');
}

