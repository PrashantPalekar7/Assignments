/* Assignment: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging"; */

let sentence:string= "Java programming is fun and challenging"; 
let totalWords:string[]=sentence.split(" ");
let reverseOrder:string="";
let upperCaseStatement:string="";

console.log(`The total count of number of words in the sentence is: ${totalWords.length}`);

//2. Print the sentence words in reverse order.
for(let i:number=totalWords.length-1;i>=0;i--){
    reverseOrder += totalWords[i]+" ";
}
console.log(`the sentence words in reverse order is: ${reverseOrder}`);

//3. Convert the first character of each word to uppercase and print original sentence

for(let key of totalWords){
    
    let upperFirstWordKey:string=key.charAt(0).toUpperCase();
    upperFirstWordKey=upperFirstWordKey+key.substring(1);
    upperCaseStatement += upperFirstWordKey+' ';
}
console.log(upperCaseStatement);