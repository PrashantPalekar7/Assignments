//A bank evaluates loan applicants on following criteria

function loanEligibility(creditscore: number, yourIncome: number, isCurrentlyEmployed: boolean,
 debtToIncomeRatio: number): void {
if(creditscore>=750){
    console.log('Your Loan application is Approved');
}
else if(creditscore>=650 && creditscore<750){
     if(yourIncome>=50000){
        if(isCurrentlyEmployed==true){
                        
            if(debtToIncomeRatio<40){
                console.log("Your Loan is approved");
            }
            else{
                console.log("Your loan has been denied since your debtToIncomeRatio is 40% or greater than 40%");
            }        
        }
        else{
            console.log("Your loan application has been rejected since you are UnEmpoyed");
        }
    }
    else{
        console.log("Your income is less than 50,000$ hence your application has been rejected");
    }


}
else if(creditscore<650){
    console.log("Your credit score is less than 650. hence your loan application is denied.");
}
}

loanEligibility(650,50000,true,39);