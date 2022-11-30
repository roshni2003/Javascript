// // same keys addition

// d1 = {'a': 100, 'b': 200, 'c':300}
// d2 = {'a': 300, 'b': 200, 'd':400}

// var sum=0;
// for (i in d1){
//     if (i in d1){
//         d1[i]=d1[i]+d2[i]
//     }
//     else{
//         d1[i]=d2[i]
//     }
// }
// console.log(d1)



// // keys square print in dict

// var n = require('readline-sync'). questionInt("enter a number ");
// dict={};
// for (let i=0; i<=n; i++){
//     dict[i]=i**2
// }
// console.log(dict)



// // combining diff. dic in same

// var dic1={1:10, 2:20};
// var dic2={3:30,2:40};
// var dic3={5:50,6:60};
// for (i in dic1){
//     for (j in dic2){
//       if (i==j){
//           dic3[i]=dic1[i]+dic2[j]
//           break
//       }
//        else{
//           dic3[i]=dic1[i]
//           dic3[j]=dic2[j]
//        }
//     } 
//   }
//   console.log(dic3);



// // input exsit or not

// var n = require('readline-sync').question("enter ")
// dict={"name":"Raju", "marks":56};
// for (i in dict){
//     if (i==n){
//         console.log("exist")
//         break
//     }
//     else{
//         console.log("not exist")
//         break
//     }
// }



// // sum of values

// my_dict = {'data1':100,'data2': -54,'data3': 247}
// sum=0;
// for (i in my_dict){
//     sum=sum+my_dict[i]
// }
// console.log("total",sum)



// //  remove the first key and value in nested dic

// var myDict= {
//     1: 'NAVGURUKUL',
//     2: 'IN',
//     3:{  
//          'A' : 'WELCOME',
//          'B' : 'To',
//          'C' : 'DHARAMSALA'
//         }
//     }
//  for (i in myDict){
//     if ((typeof myDict[i]) === "object"){
//         delete myDict[i]['A']
//     }
//  }
//  console.log(myDict);




// // combining two list in dict

// var list1=["one","two","three","four",'five']
// var list2=[1,2,3,4,5,]
// n={}
// for (i in list1){
//     n[list1[i]]=(list2[i])
// }
// console.log(n)



// // unique numbers

// input :[{"first":"1"},{"second": "2"},{"third": "1"},{"four": "5"},{"five":"5"},{"six":"9"},{"seven":"7"}]
// var i=0
// list=[]
// for (i in list){
//     if (input[i])
// }


// // input save in object

// output :-{
// 'sonu':85,
// 'Kartik':90,
// 'Deepak':96,
// 'Aman':76,
// 'Somesh':60,
// 'Umesh':85,
// 'Amarpal':70,
// 'Roshan':57,
// 'Riyaz':98,
// 'Shabid':56
// }
// var readline = require('readline-sync');
// students={}
// for (let i = 0; i <2; i++){
//    var name =readline.question("Enter your name:");
//    var marks=readline.questionInt("Enter the marks");
//    students[name]=marks;
// }
// console.log(students);