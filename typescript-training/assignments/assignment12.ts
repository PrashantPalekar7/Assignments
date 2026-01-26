/* Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word */


let paragraph:string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let totalWords:string[]=paragraph.split(" ");
let totalJavaWordCount:number=0;
let indexOfjavaWord:number[]=[];

for(let i:number=0;i<totalWords.length;i++){
   
    if(totalWords[i]==="Java"){
        totalJavaWordCount ++;
        indexOfjavaWord.push(i);
    }
}
console.log(`total number of word 'java' occurrences are: ${totalJavaWordCount}`);
console.log(`In Above statement JAVA word occured at following index: ${indexOfjavaWord}`)

/* for(let key of totalWords){
    //console.log(`word ${key} has index: ${totalWords.indexOf(key)}`);
    
     if(key=="Java"){
        totalJavaWordCount ++;
        indexOfjavaWord.push(totalWords.indexOf(key));
    }  
}*/
