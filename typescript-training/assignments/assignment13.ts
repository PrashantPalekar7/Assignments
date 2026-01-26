/* Assignment: Write a program to print * in triangle pattern
1. If I will pass int rows = 5 then it should print triangle with 5 Rows
*
**
***
****
***** */

function pattern(inputNo:number):void{
    for(let i:number=0; i<inputNo;i++){
        let patternRow:string="";
        for(let j:number=inputNo;j>i;j--){
            patternRow +=" ";
        }
        for(let k:number=0;k<=i;k++){
            patternRow +="*";
        }
        console.log(patternRow);
    }
    }

    pattern(5);