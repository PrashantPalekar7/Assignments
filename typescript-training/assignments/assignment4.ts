let transactions: number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];

let totalCreditTransactions: number=0;
let totalDebitTransactions: number=0;
let totalCreditedAmount: number=0;
let totalDebitedAmount: number=0;
let totalRemainingBalance: number=0;
let totalSuspiciousTransaction: number=0;

for(const trans of transactions){
    if(trans>0){
        totalCreditTransactions++;
        totalCreditedAmount+= trans;
        if(trans>10000){
            console.log(`Suspicious credit Transaction ${trans}`);
            totalSuspiciousTransaction++;
        }
    }
    else{
        totalDebitTransactions++;
        totalDebitedAmount-= trans;
        if(trans<-10000){
            console.log(`Suspicious debit Transaction ${trans}`);
            totalSuspiciousTransaction++;
        }
    }
}
    totalRemainingBalance=totalCreditedAmount-totalDebitedAmount;
console.log(`===========`);
console.log(`total credited transactions are: ${totalCreditTransactions}`);
console.log(`total Debit Transactions are ${totalDebitTransactions}`);
console.log(`total Credited Amount is ${totalCreditedAmount}`);
console.log(`total debited Amount is ${totalDebitedAmount}`);
console.log(`Total remaining balance is: ${totalRemainingBalance}`);
console.log(`Total suspicious transactions are: ${totalSuspiciousTransaction}`);

export{};