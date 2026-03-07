let pricesPerDay:number[]= [7,6,4,3,1];//[7,1,5,3,6,4];

let buyPrice:number=0;
let sellPrice:number=0;
let  maxProfit:number=0;

for(let i:number=0; i<pricesPerDay.length-1; i++){
    for(let j:number=i+1; j<pricesPerDay.length; j++){
        const profit:number=pricesPerDay[j]-pricesPerDay[i];

        if(profit>maxProfit){
            maxProfit=profit;
            buyPrice=pricesPerDay[i];
            sellPrice=pricesPerDay[j];
        }

    }
}


if(buyPrice>=sellPrice){
    console.log(`dont go for this trade. otherwise you will face loss`);
}
else{
    console.log(`buy price is ${buyPrice}`);
console.log(`sell price is: ${sellPrice}`);
console.log(`max profit is: ${maxProfit}`);
}