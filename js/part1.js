//==================part 1
	
	// STEP 1

	/*
	var myMovies = [
    "spider man",
    "supper man", 
    "bat man",
    "iron man", 
    "ant man"];
    
	console.log(myMovies[1]);
	*/
	
	// STEP 2
	
	/*
	var movies = new Array();
	movies[0] = "spider man";
	movies[1] = "supper man";
	movies[2] = "bat man";
	movies[3] = "iron man ";
	movies[4] = "ant man";
    
	console.log(movies[0]);
	
	*/

	// STEP 3

	/*
	
	var movies = [
    
    "spider man",
    "supper man", 
    "bat man",
    "iron man", 
    "ant man"];
	movies.splice(2, 0, "cat woman");
	console.log(movies);
	console.log(movies.length);
	
	*/

	// STEP 4
	
	/*
	var movies = [];
	movies[0] = "spider man";
	movies[1] = "supper man";
	movies[2] = "bat man";
	movies[3] = "iron man";
	movies[4] = "ant man";
	console.log(movies);
	delete movies[0];
	console.log(movies);
	*/
	
	// STEP 5

	/*
	var movies = [];
	movies[0] = "spider man";
	movies[1] = "supper man";
	movies[2] = "bat man";
	movies[3] = "iron man";
	movies[4] = "ant man";
	movies[5] = "cat woman";
	movies[6] = "007";
	
	for (var i = 0; i <movies.length; i++) {
	    console.log(movies[i]);
	}
	*/
	
	// STEP 6

	/*
	var movies = []
    movies[0] = "spider man",
    movies[1] = "supper man", 
    movies[2] = "bat man",
    movies[3] = "iron man", 
    movies[4] = "ant man",
    movies[5] = "cat woman",
    movies[6] = "007";
	
	for (var index in movies) {
	    console.log(movies[index]);
	}
	*/
	
	// STEP 7

	/*
	var movies = [
    "spider man",
    "supper man", 
    "bat man",
    "iron man", 
    "ant man",
    "cat woman",
    "007"];
	
	for (var index in movies) {
	 
	    console.log(movies.sort()[index]);
	}
	*/
	
	// STEP 8

	
	/*
	var movies = [
    "spider man",
    "supper man", 
    "bat man",
    "iron man", 
    "ant man",
    "cat woman",
    "007"];
    
	var leastFavMovies = [
    "ice age",
    "incredible",
    "halk"];
	
	console.log("Movies I like: \n\n");
	for (var index in movies) {
	  
	    console.log(movies.sort()[index]);
	}
    
	console.log("\n\nMovies I regret watching: \n\n");
	
	for (var index in leastFavMovies) {
	    
	    console.log(leastFavMovies.sort()[index]);
	}
	*/
	
	// STEP 9

	
	/*
	var movies = [
    
    "spider man",
    "supper man", 
    "bat man",
    "iron man", 
    "ant man",
    "cat woman",
    "007"];
	
	var leastFavMovies = [
    "ice age",
    "incredible",
    "halk"];
	
	movies = movies.concat(leastFavMovies);
	console.log(movies.sort().reverse());
	*/
	
	
	// STEP 10

	/*
	var movies = [
    "spider man",
    "supper man", 
    "bat man",
    "iron man", 
    "ant man",
    "cat woman",
    "007"];
    
    
	var leastFavMovies = [
    "ice age",
    "incredible",
    "halk"];
    
	var movies = movies.concat(leastFavMovies);
	
	console.log(movies.pop());
	
	*/
	
	// STEP 11

	
	/*
	var movies = [
    "spider man",
    "supper man", 
    "bat man",
    "iron man", 
    "ant man",
    "cat woman",
    "007"];
    
	var leastFavMovies = [ 
    "ice age",
    "incredible",
    "halk"];
    
	var movies = movies.concat(leastFavMovies);
	
	console.log(movies.shift());
	*/
	
	
	// STEP 12

	/*
	var movies = [
    "spider man",
    "supper man", 
    "bat man",
    "iron man", 
    "ant man",
    "cat woman",
    "007"];
    
	var leastFavMovies = [ 
    "ice age",
    "incredible",
    "halk"];
    
	var movies = movies.concat(leastFavMovies);
	console.log(movies.indexOf("ice age"));
    
	console.log(movies.indexOf("incredible"));

    console.log(movies.indexOf("halk"));
	
	movies.splice(7,8, "family guy", "American dad", "house");
	console.log(movies);
	*/
	
	// STEP 13

	/*
	var employee1 = [];
	employee1["id"] = "5528";
	employee1["name"] = "elham";
	employee1["title"] = "Web desiner";
	employee1["department"] = "computer";
    employee1["current"] = true;

	
	var employee2 = [];
	employee2["id"] = "4569";
	employee2["name"] = "shahram";
	employee2["title"] = "manager";
	employee2["department"] = "hardwear";
    employee2["current"] = true;

	
	var employees = [employee1, employee2];
	console.log(employees[1]["name"]);
	*/
	
	// STEP 14

	/*
	var employee1 = [];
	employee1["id"] = "5528";
	employee1["name"] = "elham";
	employee1["title"] = "Web desiner";
	employee1["department"] = "computer";
    employee1["current"] = true;
	
	var employee2 = [];
	employee2["id"] = "4569";
	employee2["name"] = "shahram";
	employee2["title"] = "manager";
	employee2["department"] = "hardwear";
    employee2["current"] = true;
	
    var employees = [employee1, employee2];
	for (var index in employees) {
	    console.log(employees[index]["name"]);
	}
	*/
	
	// STEP 15

	/*
	var employee1 = [];
	employee1["id"] = "5528";
	employee1["name"] = "elham";
	employee1["title"] = "Web desiner";
	employee1["department"] = "computer";
    employee1["current"] = true;
	
	var employee2 = [];
	employee2["id"] = "4569";
	employee2["name"] = "shahram";
	employee2["title"] = "manager";
	employee2["department"] = "softwear";
    employee2["current"] = true;
	
	var employee3 = [];
	employee3["id"] = "8520";
	employee3["name"] = "neda";
	employee3["title"] = "ITT";
	employee3["department"] = "hardwear";
	employee3["current"] = false;
	
	var employees = [employee1, employee2, employee3];
	
	for (var index in employees) {
	    if (employees[index]["current"] == true) {
	    console.log(employees[index]["name"]);
	    }
	}
	*/
	
	// STEP 16

	/*
	var movies = ["spider man", 1, "supper man", 2, "bat man", 3, "iron man", 4, "ant man", 5];
	
	var name = movies.filter(function(item) {
	        return typeof item == "string";
	        
	    });
     console.log(name);
	*/
	
	
	// ===========part 2
	
	// STEP 1
	
	/*
	
	var displayMessage = function(string) {
	    console.log(string);
	}
	
	displayMessage("This is the First anonymous function");
	*/
	
	// STEP 2
	

	/*
	function calculate(num1, num2) {
	   var result = num1 % num2;
	
	console.log(result);
    }
calculate(20,6);
	*/
	
	// STEP 3

	/*
	var employees = [
    "ZAK", 
    "JESSICA",
    "MARK", 
    "FRED", 
    "SALLY"];
	
	var showEmployee = function(name) {
	   
	    for (var index in name) {
	        console.log(name[index]);
	    }
	}
    console.log("Employees:\n\n"); 
	showEmployee(employees);
	
*/


