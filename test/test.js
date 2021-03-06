let assert = require("assert");

let Phrase = require("../index.js");

describe("phrase", function() {
   // Phrase#palindrome
   describe("palindrome", function() {
       
       it("should return false for non-palindrome", function() {
        let nonPalindrome= new Phrase("apple");
        assert(!nonPalindrome.palindrome());
     });
       
       it("should return true for palindrome", function() {
        let plainPalindrome= new Phrase("racecar");
        assert(plainPalindrome.palindrome());
     });
     
     
     it("should return true for a mixed-case", function(){
         let mixedPalindrome= new Phrase("RaceCar");
        assert(mixedPalindrome.palindrome());
     });
     
     it("should return true for a palindrome with punction", function(){
         let punctuatedPalindrome= new Phrase("Madam, I'm Adam.");
        assert(punctuatedPalindrome.palindrome());
     });

 it("should return false for empty stirng", function() {
        let emptyPhrase= new Phrase("");
        assert(!emptyPhrase.palindrome());
     });
     
     
     it("should return false with nubmers", function(){
         let noLetters= new Phrase("123.56");
        assert.strictEqual(noLetters.letters(), '');
     });     
     
     describe("#letters", function() {
         it("should return only letters", function() {
             let punctuatedPalindrome= new Phrase("Madam, I'm Adam.");
             assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
             
         });
     });
     
   });
});