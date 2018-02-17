var Word = function() {
  this.word = ["hey", "joe","great"];
  this.blanks = [];
  this.chosenWord = "";
  this.res="";
  this.selectedWord = [];

  this.generateWord = function(){

  this.selectedWord = this.word[Math.floor(Math.random()* this.word.length)]
  chosenWord = this.selectedWord.split("");
 for(i in chosenWord){
 	this.blanks.push("_");

 }
 var r = this.blanks.toString();
  this.res = r.replace(/,/g, " ");
 console.log(this.res+ "\n");
};

};
module.exports = Word;
