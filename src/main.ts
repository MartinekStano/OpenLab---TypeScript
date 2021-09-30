import { createModuleResolutionCache } from "typescript";

function IsPalindrome(word:string){
    return word.split('').reverse().join('') === word;
}
 var word1 = "kayak";
 var word2 = "car";

 console.log("Is Word1 Palindrome: "+IsPalindrome(word1));
 console.log("Is Word2 Palindrome: "+IsPalindrome(word2));