//===========object=============
let empDetails={
empName:"Prashant",
empNo:123
}
console.log(empDetails.empNo);

//===========Array=============
let studentData=[1,"Prashant","Ashok",2,3,4,"Ashish"];
console.log(studentData);
console.log(studentData[3]);

//===========function=============
function preCondition(browserNm, uname){
console.log("loginToApplication with "+browserNm);
console.log("username is "+uname);
}

preCondition("chrome","prashant");
console.log("perform action");
//===========Date=============
let today=new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getMonth()+1);

//===========Map=============
let employeeDetails=new Map();
employeeDetails.set("empName","Prashant");
employeeDetails.set("empNo",112);

console.log(employeeDetails.size);
console.log(employeeDetails.get("empNo"));

//===========Set=============
let workerData=new Set();
workerData.add("ashish");
workerData.add("ashish");
workerData.add(1233);
console.log(workerData.size);
console.log(workerData);