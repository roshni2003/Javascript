// HARSHAD NUMBER

num=require("readline-sync").questionInt("enter a no:")
var sum=0
val=num
while(val<100){
    val1=val%10
    sum=sum+val1
    val=Math.floor(val/10)
}
if (num%sum===0){
    console.log("harshad")
}
else{
    console.log("not harshad")
}