/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include
letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise. */

let phrase:string="race a car"; //"A man, a plan, a canal: Panama";
phrase=phrase.toLocaleLowerCase();
phrase=phrase.replace(/[^a-z]/g,"");
console.log(`converted original phrase is: ${phrase}`);
let reversePhrase:string="";

for(let i:number=phrase.length;i>=0;i--){
    reversePhrase += phrase.charAt(i);
}
console.log(`Reversed phrase is: ${reversePhrase}`);

if(reversePhrase===phrase){
    console.log(`A phrase is Pelindrome`);
}
else{
    console.log(`This phrase is not Pelindrome`);
}
