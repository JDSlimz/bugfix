var bugs = [];
var clicks = 0;

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
			clicks++;
			
			if(random_chance()){
				var new_bug = Math.floor(Math.random()*900) + 100;
				
				while(!jQuery.inArray(new_bug, bugs) == -1){
					new_bug = Math.floor(Math.random()*900) + 100;
				}
				
				$('body').append('Bug #' + new_bug + ': <input id="toggle-' + bugs[i] + '" class="bug" type="checkbox" data-toggle="toggle"><br>');
				$('.bug').bootstrapToggle();
			}
		}
		
		if(!$('.bug:checked').length){
			alert("WINNER!");
			location.reload();
		}
    })
});

function add_elements(){
	for (var i = 0; i < bugs.length; i++) {
		$('body').append('Bug #' + bugs[i] + ': <input id="toggle-' + bugs[i] + '" class="bug" type="checkbox" data-toggle="toggle"><br>');
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

function isPrime(n) {
   if (n < 2) {return false}
   if (n != Math.round(n)) {return false}

   var isPrime = true;

   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }

   return isPrime;

}

function random_chance(){
	var chance = false;
	var randomNumber = Math.floor(Math.random()*5);

	if(randomNumber == 3){
		chance = true;
	}
	return chance;
}