var Letter = require("./letter.js");


var letter1 = new Letter();


/*<--this.word.usedKeys.push(answers.name);
      	conole.log(this.word.usedKeys.join(" "));
      	var keyguess = false;
      	for (x in this.word.blanks){
      		 if (this.word.selectedWord[x] == answers.name){
      		 	 keyguess = true;
                  this.word.blanks[x] = answers.name;
                  console.log(blanks.join(" "));

      		 }
      	}*/
letter1.generatePrompt();