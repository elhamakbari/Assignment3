//=========part 1
	
	
    /*
    
	// STEP 1
    
	
	var user = prompt("Hello, please choose between: Rock, Paper, or Scissors.");
	console.log(user);
	


	// STEP 2
    
	
	var compuChoice = Math.random();
	console.log(compuChoice);
    
	
	// STEP 3

    
	var result;
	
	function Outcome() {
	    if (compuChoice > .7) {
	        result = "rock";
	    } else if (compuChoice > .4) {
	        result = "paper";
	    } else if (compuChoice > .01) {
	        result = "scissors";
	    }
	}
	Outcome();
	compuChoice = result;
	
	console.log(compuChoice);
    
	
	// STEPS 4

    
	 var result;
 
 if (user.toLowerCase() === compuChoice) {
  	result = "tie";
      alert("You chose " + user +  "and computer chose " + compuChoice + " so you tie");
 } else if (user.toLowerCase() === "rock" && compuChoice === "paper") {
 	result = "lose";
     alert("You chose " + user + " and computer chose " + compuChoice + " so you lose");
 } else if (user.toLowerCase() === "rock" && compuChoice === "scissors") {
 	result = "win";
      alert("You chose " + user + " and computer chose " + compuChoice + " so you win");
 } else if (user.toLowerCase() === "paper" && compuChoice === "scissors") {
 	result = "lose";
      alert("You chose " + user + " and computer chose " + compuChoice + " so you lose");
 } else if (user.toLowerCase() === "paper" && compuChoice === "rock") {
 	result = "win";
      alert("You chose " + user + " and computer chose " + compuChoice + " so you win");
 } else if (user.toLowerCase() === "scissors" && compuChoice === "paper") {
 	result = "win";
      alert("you win");
 } else if (user.toLowerCase() === "scissors" && compuChoice === "rock"){
 	result = "lose";
      alert("You chose " + user + " and computer chose " + compuChoice + " so you lose");
 } else {
 	result = "Game is over!"
     alert("Game is over");
 }
*/
       
	
	//=================part 2
	
	// STEP 1 

    /*
	
	var num1 = prompt("Please enter a number.");
	console.log(num1);
    
    

	// STEP 2
    
	
	var num2 = prompt("Please enter a second number.");
	console.log(num2);
    
    

	// STEP 3

    
	
	var operation = prompt("Please choose an operator: add, subtract, multiply, or divide");
	console.log(operation);
	
	

	// STEPS 4

    
	
	var calculate = function(num1, num2, operation) {   
	    switch (operation) {    
	        case "add":
	            alert(num1 + num2);
	            break;
	        case "subtract":
	            alert(num1 - num2);
	            break;
	        case "multiply":
	            alert(num1 * num2);
	            break;
            case "divide":
	            alert(num1 / num2);
	            break;
	        default:    
	            operation = prompt("It is not valid. Please start again");
	            calculate(num1, num2, operation);
	            break;
	    }
	}
	calculate(num1, num2, operation);   
	*/
	
	//===================part 3 
	
	// STEP 1

	/*
	
	var alpha = "webmaster";
	
	function alphabetize(string) {
	    sorted = alpha.split("");
	    sorted = sorted.sort().join("");
	    return sorted;
	}
	
	console.log(alphabetize(alpha));
	
	*/

	// STEP 2

	/*
	
	var capital = "the quick brown fox";
	
	function capitalize(string) {
	    var phrase = string.replace(/\b\w/g, function(x) {
	        return x.toUpperCase();
	    });
	    return phrase;
	}
	
	console.log(capitalize(capital));
	
	*/

	// STEP 3

	/*
	
	var vowels = "The quick brown fox";
	
	function countVow(string) {
	    return string.match(/[aeiou]/g).length;
	}
	
	console.log(countVow(vowels));
	
	*/
	
	// STEP 4

	/*
	function characters() {
	    
	    var string = [];
	    var random = "abcdefghijklmnopqrstuvwxyz0123456789";  
	    for (var i = 0; i < 8; i++) {
	        string += random.charAt(Math.floor(Math.random() * 36));
	}
            return string;
        }
	
	console.log(characters());
	*/
	
	// STEP 5

	/*
	var longestName= ["Australia", "Germany", "United States of America"];
	
	function LongestCountry(countries) {
	    var nameLength = 0;
	   
	
	    for (var i = 0; i < countries.length; i++) {
			if (countries[i].length > nameLength) {
				nameLength = countries[i].length;
				longestName = countries[i];
			};
	    }
	
	    return longestName;
	}
	
	console.log(LongestCountry(longestName));
	
*/






