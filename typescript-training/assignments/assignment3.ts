//A bank evaluates loan applicants on following criteria

let creditscore: number=650;
let yourIncome: number=50000;
let isCurrentlyEmployed: boolean=true;
let debtToIncomeRatio: number= 40;

if(creditscore>=750){
    console.log('Your Loan application is Approved');
}
else if(creditscore>=650 && creditscore<750){
    console.log("Hello, Since your credit score is less than 750, we need to check additional conditions");
    if(yourIncome>50000){
        console.log("Your income is greater than 50,000$ hence your application has been approved");
    }
    else if(yourIncome==50000){
        if(isCurrentlyEmployed==true){
            console.log("Great. you are Employed & Your income is 50,000$. Let me check your debtToIncomeRatio.");
            
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