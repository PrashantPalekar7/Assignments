/*    primeNo(12);

function primeNo(inputNo: number): boolean{
   
    if(inputNo===1){
    console.log(`1 has only one divisor (1 itself), which is not sufficient for it to be considered
prime.`);
        return false;
}

    if(inputNo>1){
        if(inputNo===2){
            console.log(`2 has exactly two divisors: 1 and 2, making it a prime number.`);
            return true;
        }
        else{
        for(let i:number=2;i<inputNo;i++){
            //let checkDivisionCounts=inputNo%i;
            if(inputNo%i==0){
                let divisibleNos:Set<number>=new Set();
                divisibleNos.add(i);
               console.log(`${inputNo} has more than two divisors:1, ${inputNo},${divisibleNos} so it is not a prime number.`);
            return false; 
            }
        }
    }
}
console.log(`${inputNo} has exactly two divisors: 1 and ${inputNo}, making it a prime number.`);
      return true;
} */

      let inputNumber:number=9;
      let primeStatus:boolean=true;

      if(inputNumber<=1){
        console.log(`The Entered Number ${inputNumber} is not prime`);
        primeStatus=false;
      }

      for(let i:number=2; i<inputNumber;i++){
        if(inputNumber%i===0){
            primeStatus=false;
            break;
        }
      }
      if(primeStatus===true){
        console.log(`${inputNumber} is prime number`);
      }
      else{
        console.log(`${inputNumber} is not prime number`);
      }