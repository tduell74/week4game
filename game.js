var crystals = []

var counter = 0;
var wins = 0;
var losses = 0;

$('#win').text(wins);
$('#losses').text(losses);

newCrystals();
newGame();

  function newCrystals() {
  	var numbers = []
  	while(numbers.length < 4) {
  		var randomnumber = Math.round(Math.random() *12)
  		var found = false;
  		for(var i=0; i < numbers.length; i++) {
  			if(numbers[i] == randomnumber) {
  				found = true; 
  				break numbers;
  			}
  		}
  	}
  	console.log(numbers);


  	for (i = 0; i < numbers.length; i++) {
			var imageCrystal = $('<img>');
			imageCrystal.attr('data-num', numbers[i]);
			imageCrystal.attr('src', crystals[i]);
			imageCrystal.attr('alt', 'crystals');
			imageCrystal.addClass('crystalImage')
			$('#crystals').append(imageCrystal);
		}
  }

  function newGame() {
  	counter = 0;
  	$('#YourScore').text(counter);

  	 function randomIntFromInterval(max) {
  	 	return Math.floor(Math.random() * 120);
  	 }

  	 var numberToGuess = randomIntFromInterval(19,120);

  	 $(".value").text(numberToGuess);

  	 $('.crystalImage').on('click', function() {
  	 	counter = counter + parseInt($(this).data('num'));

  	 	$("#YourScore").text(counter);

  	 	  if(counter == numberToGuess) {
  	 	  	$('#scoreBoard').text('Winner!')
  	 	  	wins++;
  	 	  	$('#win').text(wins);
  	 	  	console.log(wins)
  	 	  	$("#crystals").empty();
  	 	  	newCrystals();
            newGame();
  	 	  } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
  	 });
  }

