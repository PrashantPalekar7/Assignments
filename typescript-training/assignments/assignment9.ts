
let inputNo:number=2.00000;
let powerNo: number=-2;
let powerOfInputNo=1;

if(powerNo<0){
    for(let i:number=-1;i>=powerNo;i--){
   powerOfInputNo=powerOfInputNo *inputNo;
    }
    let negativePowerCalc:number=1/powerOfInputNo;
    console.log(`${powerNo} Power of ${inputNo} is: ${negativePowerCalc}`);
}
else{
    for(let i:number=1;i<=powerNo;i++){
   powerOfInputNo=powerOfInputNo *inputNo;
}
    console.log(`${powerNo} Power of ${inputNo} is: ${powerOfInputNo}`);
}