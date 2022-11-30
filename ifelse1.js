var a=require('readline-sync')
var d=a.questionInt("enter:");
if (d<10){
    console.log("no. less than 10")
} else if (d>10 && d<20){
    console.log("no. is less than 20")
} else if (d>20){
    console.log("greater than 20")
}