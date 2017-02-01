var bugs = [];
var clicks = 0;

$(document).ready(function(){
	
	var i = 0;
	while(i < 8){
		bugs.push(Math.floor(Math.random()*900) + 100);
		i++;
	}
	
	add_elements();
	
	watch_for_toggles();
});

function add_elements(){
	for (var i = 0; i < bugs.length; i++) {
		$('body').append('<div class="bug-div">Bug #' + bugs[i] + ': <input id="toggle-' + bugs[i] + '" class="bug" type="checkbox" data-toggle="toggle"></div>');
	}
	
	$('.bug').bootstrapToggle();
	
	select_starting_bug();
}

function select_starting_bug(){
	var bug_index = Math.floor(Math.random()*bugs.length);
	$('#toggle-'+bugs[bug_index]).bootstrapToggle('on');
}

function activate_more_bugs(not_to_activate){
	var bug_number = not_to_activate.slice(7,10);
	var bug_index = bugs.indexOf(parseInt(bug_number));
	//mobileConsole(not_to_activate + "<br>");
	//mobileConsole(bug_number + "<br>");
	//mobileConsole(bug_index + "<br>");
	var num_to_activate;
	
	if(clicks <= 5){
		num_to_activate = Math.floor(Math.random()*2)+1;
	} else {
		num_to_activate = Math.floor(Math.random()*2);
	}
	mobileConsole("number to activate. " + num_to_activate + "<br>");
	if(num_to_activate == 1){
		var which = Math.round(Math.random());
		mobileConsole("which " + which + "<br>");
		if(which == 0){
			$('#toggle-'+bugs[bug_index - 1]).bootstrapToggle('on');
		} else if(which == 1){
			$('#toggle-'+bugs[bug_index + 1]).bootstrapToggle('on');
		}
	} else if(num_to_activate == 2){
		$('#toggle-'+bugs[bug_index - 1]).bootstrapToggle('on');
		$('#toggle-'+bugs[bug_index + 1]).bootstrapToggle('on');
	}
}

function isPrime(n) {
   if (n < 2) {return false;}
   if (n != Math.round(n)) {return false;}

   var isPrime = true;

   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false;}
   }

   return isPrime;

}

function random_chance(){
	var chance = false;
	var randomNumber = Math.floor(Math.random()*25);

	if(randomNumber == 3){
		chance = true;
	}
	return chance;
}

function watch_for_toggles(){
	//watch for toggles
	$('.bug').change(function() {
		
		if(!$(this).prop('checked')){
			activate_more_bugs(this.id);
			clicks++;
			
			if(random_chance() && bugs.length < 16){
				var new_bug = Math.floor(Math.random()*900) + 100;
				
				while(!jQuery.inArray(new_bug, bugs) == -1){
					new_bug = Math.floor(Math.random()*900) + 100;
				}
				
				bugs.push(new_bug);
				$('body').append('<div class="bug-div">Bug #' + new_bug + ': <input id="toggle-' + new_bug + '" class="bug" type="checkbox" data-toggle="toggle"></div>');
				$('.bug').bootstrapToggle();
				watch_for_toggles();
			}
			
			if($('.bug:checked').length === 0){
				alert("WINNER!");
				location.reload();
			}
		}
		
		
    });
}

function mobileConsole(msg){
	$('#console').append(msg);
}
