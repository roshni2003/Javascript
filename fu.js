// // eligible for vote
// function eligibleforvote(age){
//     if (age>=18){
//         console.log("you are eligible")
//     }
//     else{
//         console.log("not eligible")
//     }
// }
// eligibleforvote(require('readline-sync').questionInt("enetr a age"))



// //  odd even in two list
// function checknumberslist(){
//     list1=[2, 6, 18, 10, 3, 75] 
//     list2=[6, 19, 24, 12, 3, 87]
//     for (var i=0; i<6; i++){
//         if (list1[i] && list2[i] % 2==0){
//             console.log("dono even hai")
//         }
//         else{
//             console.log("dono even nhi hai")
//         }
//     }   
// }
// checknumberslist()



// // perfect number
// function perfect(num){

// }



// // sum and average
// function average(num1, num2, num3){
//     console.log("Sum of three number:-", num1+num2+num3)
//     console.log("Average of three number:-", num1+num2+num3/2)
// }
// average(require('readline-sync').questionInt("Enter a num"),require('readline-sync').questionInt("Enter a num"),require('readline-sync').questionInt("Enter a num"))


// // limit odd even
// function showNumbers(num){
//     for (var i=0; i<=num; i++){
//         if (num%2==0){
//             console.log(i,"EVEN")
//         }
//         else{
//             console.log(i,"ODD")
//         }
//     }
// }
// showNumbers(require('readline-sync').questionInt("Enter a num"))



// // sum and multiple
// function multiplesOfNumbers(limit){
//     var sum=0
//     for(i=0;i<=limit;i++){
//         if(i%3 ===0){
//             sum+=i;
//         }
//         if(i%5 ==0){
//             sum+=i;
//         }
//     }
//     console.log(sum);
//  }
//  multiplesOfNumbers(20);


// // big string

// function myString(str1, str2){
//     if (str1.length===str2.length){
//         console.log(str1,str2)
//     }
//     else if (str1.length>str2.length){
//         console.log(str1)
//     }
//     else{
//         console.log(str2)
//     }
// }
// myString(require('readline-sync').question("Enter a word"),require('readline-sync').question("Enter a word"))


// square in key value pair

function squaresofnumbers (num){
    var dic={}
    for (var i=1; i<=num; i++){
        dic[i]=i*i
    }
    console.log(dic)
}
squaresofnumbers (require('readline-sync').questionInt("enter a num"))