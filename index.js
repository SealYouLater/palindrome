// Reverses a strong.
function reverse(string){
    return string.split("").reverse().join("");
}


//Returns true for a palindrome, false otherwise

//function palindrome(string) {
 //   let processedContent = string.toLowerCase();
  //  return processedContent === reverse(processedContent);
//}

//defines a phrase object

function Phrase(content){
    this.content = content;
    
    
    //returns content processed for palindrome testing
    this.processedContent = function processedContent(){
       return this.content.toLowerCase();
    }
    
    this.palindrome = function palindrome() {
        return this.processedContent() === reverse(this.processedContent());
    }
}

// Defines a translatedPhrase object.
function TranslatedPhrase(content, translation){
    this.content= content;
    this.translation= translation;
    
    //returns content processed for palindrome testing
    this.processedContent = function processedContent(){
       return this.translation.toLowerCase();
    }
    
}

TranslatedPhrase.prototype= new Phrase();