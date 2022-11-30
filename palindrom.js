num=require("readline-sync").questionInt("enter a no:")
var rev=0
var a=num
while (num>0){
    rev=(rev*10)+num%10
    num=Math.floor(num/10)
}
if (a===rev){
    console.log("palindrom")
}else{
    console.log("not palindrom")
}
