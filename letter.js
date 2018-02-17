var words = require("./word.js");
var inquirer = require("inquirer");

var Letter = function() {
this.usedKeys = [];
this.attempts= 10;
this.correctAnswer= 0;
  this.word = new words();



  this.wrongAnswer= function(){
  	console.log("Wrong Answer")
      		 	console.log( "\n" +res);
      		      this.attempts++;
 				  this.generatePrompt();

  }

  console.log("guess the best basketball player in the world?\n");
  this.word.generateWord();


  this.generatePrompt= function(){
if (this.correctAnswer == this.word.blanks.length){
  		console.log("\n\n\n\n**********GAME OVER YOU WON***************")
  		return;
  	}

  	if(this.attempts == 1){
  		console.log("\n\n\n***********Game Over************")
  		return;
  	}

if(this.attempts > 0){
  inquirer.prompt([
      {
        name: "name",
        message: "chose a letter in his name: "
      }]).then(answers => {
      	
      	for(i in this.usedKeys){
      		if(this.usedKeys[i] == answers.name){
      			console.log("You already used this Letter")
      			this.attempts--;
 			console.log("you have "+this.attempts+" attempts remaining");
      			this.generatePrompt();
            return;
      				if (!this.word.res){
 				console.log( "\n" + this.word.blanks);
 				var r = this.word.blanks.toString();
                var res = r.replace(/,/g, " ");
                console.log(res+ "\n");
                return;
 			}
 			else{
 				console.log("You already used this Letter")
      			this.attempts--;
 			console.log("you have "+this.attempts+" attempts remaining");
      			this.generatePrompt();
 				console.log( "\n" + this.word.res);
 				return;
 			}
      		




      		}}

      
      	 this.usedKeys.push(answers.name);
      	
      	
      	
      	
      	var keyguess = false;
      	var res ="";
      	for (x in this.word.blanks){
      		 if (this.word.selectedWord[x] == answers.name){
      		 	 keyguess = true;
                  this.word.blanks[x] = answers.name;
                  var r = this.word.blanks.toString();
 				  this.word.res = r.replace(/,/g, " ");
 				 
				
 				  this.attempts--;
 				  this.correctAnswer++;
 				  this.generatePrompt();
 				    console.log("\n*******CORRECT******");
 				  console.log("you have "+this.attempts+" remaining");
 				  console.log("\nguess the best basketball player in the world?\n")
 				   console.log( "\n" + this.word.res);
 				    console.log( "\n\n Letters already used  " +this.usedKeys);
 				  return;
 				  
 			}

 			
 		
 			
      	}
      		console.log("wrong guess")
 			console.log( "\n\n Letters already used  " +this.usedKeys);
 			
 			this.generatePrompt();
 			this.attempts--;
 			console.log("you have "+this.attempts+" attempts remaining");
 			if (!this.word.res){
 				console.log( "\n" + this.word.blanks);
 				var r = this.word.blanks.toString();
                var res = r.replace(/,/g, " ");
                console.log(res+ "\n");
 			}
 			else{
 				console.log( "\n" + this.word.res);
 			}
 			


       
      	
    // Use user feedback for... whatever!!
});
}}; 

};


module.exports = Letter;