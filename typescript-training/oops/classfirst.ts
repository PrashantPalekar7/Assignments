class empData{
    empNm:string="prashant";
    empNo:number=123;

    constructor(){
        console.log(`this is constructor`);
    }

    prashantData(): void {
        console.log(`This are prashant details`);
    }
}

let wipro=new empData;
wipro.prashantData();