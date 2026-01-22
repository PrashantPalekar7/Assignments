


let empData : Map<String,number[]>=new Map();
empData.set("Alice Johnson",[75000,5.1,4.2]);
empData.set("Bob Smith",[68000,3.2,3,8]);
empData.set("Carol Davis",[82000,7,1,4.5]);
empData.set("David Brown",[90000,10.2,2.5]);
empData.set("Eva Green",[60000,2.4,3.5]);

for(let key of empData.keys()){
    const data = empData.get(key)!;
    const baseSalary=data[0];
    const experiance=data[1];
    const yearEndRating=data[2];
}


function hikeCalculate(
    rating:number, baseSalary:number, experiance:number
): number {
    let variablePayPercentage=0;
    let bonus=0;
    let reward=0;

    if(rating>=4){
        variablePayPercentage=15;
        bonus=1500;
    }
    else if(rating>=3 && rating< 4){
        variablePayPercentage=10;
        bonus=1200;
    }
    else{
        variablePayPercentage=3;
        bonus=300;
    }
    
    if(experiance>=5){
        reward=5000;
    }

    const hike=(baseSalary*variablePayPercentage)+bonus+reward;
    return (hike/baseSalary)*100;
}

function empDetails(empName: string, empNo?:number):void {}