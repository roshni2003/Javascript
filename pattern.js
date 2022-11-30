// i=1
// while i<=5:
// 	j=1
// 	while j<=5:
// 		if (i==1 and(j==1 or j==2 or j==4 or j==5)) or(i==2 and(j==1 or j==5))or(i==4 and(j==1 or j==5)) or(i==5 and(j==1 or j==2 or j==4 or j==5)):
// 			print(" ",end=" ")
// 		else:
// 			print("*",end=" ")
// 		j=j+1
// 	print()
// 	i=i+1


// var i=1;
// while (i<=5){
// }var j=1;
// while (j<=5){
//     if (i===1 && (j===2 || j===3 || j===4)) or(i===2 && (j===1 || j===3 || j===5))||(i===3 && (j===1 || j===2 || j===4 || j===5)) ||(i===4 && (j===1 || j===3 || j===5 )) || (i===5 && (j===2 || j===3 || j===4)){
//         console.log(" ",end=" ")
//     }else{
//         console.log("*",end=" ")
//     }
//     j++
// }
// console.log()
// i++

// var r=1
// b=""
// while(r<=5){
//     c=1
//     while(c<=5){
//         c=c+1
    
//     b=b+r
//     }
//     b=b+"\n"
//     r=r+1
// }
// console.log(b)


// let n = 5;
// let string = "";

// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1 || i === n) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);



let n = 5;
let string = "";
// Upside pyramid 
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }  
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);






