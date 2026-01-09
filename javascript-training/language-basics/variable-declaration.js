//variable declaration will vary based on 4 different parameters
//1. Initialization
//2. Re-assignment
//3. Re-declaration
//4. scope

//1. Initialization
const a=10; //'const' declarations must be initialized.
let b; //'let' declarations can be initialized later.
var c;  //'var' declarations can be initialized later

//2. Re-assignment
//const a=15;  //re-assign is not allowed for const variable
//it throws error if i reassign like this

b=20;   //we can re-assign value for LET
console.log(b);
c=30;   //we can re-assign value for VAR
console.log(c);

//3. Re-declaration
//const a=35;  //Cannot redeclare block-scoped variable 'a'.
//let b=123;  //Cannot redeclare block-scoped variable 'b'.
var c=1234; //'var' allows Re-declaration
console.log(c);

//4. scope
{
    const x=2222;
    var y=333;
    let z=444;
    console.log("Inside block "+x);
    console.log("Inside block "+y);
    console.log("Inside block "+z);
}
   /* 'const' and  'let' does not support block-scope
    means we canno use const, let outside block
     console.log("Outside block "+x);
    console.log("Outside block "+y); */
    console.log("Outside block "+z);