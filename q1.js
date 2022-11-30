// for (var i=0;i<10;i++){
//     if (i===4){
//         break
//     }
//     console.log(i)
// }

// for (var i=0;i<10;i++){
//     if (i===5){
//         continue
//     }
//     console.log(i)
// }



// const fruits=["apple","banana","orange","carrot"];
// fruits.shift()
// console.log(fruits)


// switch(fruits){
// case 1:
//  "Banana";
//     alert("Hello")
//     console.log(banana)
//     break;
    
  
// case 2:
//  "Apple";
//     alert("Welcome")
//     break;    
// }
// // day=2
// day=require("readline-sync").question("Entre Day:")
// switch(day){
//     case "sunday":
//         console.log('case')
//         break

//     case "monday":
//         console.log('case1')
//         break
//     default:
//         console.log("rakhi")


// }

// list1=["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// a=[]
// for(var i of list1){
//    if(!a.includes(i)){
//        a.push(i)
//    }
// }
// console.log(a);
//  for(var j of a){
//    count=0
//    for(var k of list1){
//        if (j === k){
//            count+=1
//        }
//    }
//    console.log(j,count," times");
// }

// function monthConvert(month) {
//     var result;
//     switch (month) {
//         case 'January':
//         case "March" :  
//         case "May" :
//         case "July":
//         case "August":
//         case "October":
//         case "December":
//             return result = '31'
//             break;
//         case 'February':
//             return result = '28/29'
//         case "April" :
//         case "June" :
//         case "Septmber":
//         case "November":
//             return result = '30'
//         default:
//             return result = 'this is not a month name '
//             break;
//     }
// }
// console.log(monthConvert('Septmber'))