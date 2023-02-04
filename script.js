//***Thinkful - Logic Drills: Traffic light şu gelirse bu döner.
// function updateLight(current) {
// if (current=="green") {
//     return "yellow";
//   }
//   if (current=="red") {
//     return "green";
//   }
//   if (current=="yellow") {
//     return "red";
//   }
//   const updateLight = current => {
//   return {
//     red: 'green',
//     yellow: 'red',
//     green: 'yellow'
//   }[current];
// }

// }

//** Is it even?
// function testEven(n) {
// return n%2===0 ? true : false
//     }
// testEven(0.5)

// const number =[55,45,12,15,16,17,18,19]
// const increase=number
// .map(num => ++num)
// .sort((a,b)=> a-b)//küçükten büy sıralar
// increase.join(',')

// function boolToWord(bool) {
//     return bool ? "Yes" :  "No";
// }

// boolToWord(true);

// function getCount(str){
//   let vowelsCount =0;
//   const arr= str.split("");
//   for (let i=0;i < arr.length;i++){
//     switch (arr[i]){
//               case 'a':
//         vowelsCount++;
//         break;
//               case 'e':
//         vowelsCount++;
//         break;
//               case 'i':
//         vowelsCount++;,
//           break;
//               case 'o':
//         vowelsCount++;
//         break;
//               case 'u':
//         vowelsCount++;
//     }
//   }
// }
//  getCount()

// function main() {
//     console.log('main');

//     setTimeout(f1, 0);

//     new Promise((resolve, reject) =>
//         resolve('I am a promise')
//     ).then(resolve => console.log(resolve))

//     f2();
// }

// main();

// function createPhone(numbers){
//   let gsm=numbers.slice(0,4)
//   let gsm2=numbers.slice(4,7)
//   let gsm3=numbers.slice(7)
//   return `(${gsm}) - ${gsm2} - ${gsm3}`.replaceAll(",","")

// }

// createPhone([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// function getPlanetName(id){
//     var name;
//     switch(id){
//         case 1:
//         name = 'Mercury'
//     break;
//         case 2:
//         name = 'Venus'
//     break;
//         case 3:
//         name = 'Earth'
//     break;
//         case 4:
//         name = 'Mars'
//     break;
//         case 5:
//         name = 'Jupiter'
//     break;
//         case 6:
//         name = 'Saturn'
//     break;
//         case 7:
//         name = 'Uranus'
//     break;
//         case 8:
//         name = 'Neptune'
//     }

//     return name;
//     }

// getPlanetName(id)

// function sameCase(x, y){
//   let upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","R","S","T","U","V","Y","Z",]
//   let lower=["a","b","c","d","e","f","g","h","ı","j","k","l","m","n","o","p","r","s","t","u","v","y","z"]
//   let all=upper.concat(lower)
//   let other=all.includes(x) && all.includes(y)

//   if(!other){
//     return -1
//   }

//   let isSomeCase=upper.includes(x) && upper.includes(y) || lower.includes(x) && lower.includes(y)
//   isSomeCase = isSomeCase? 1:0
//  return isSomeCase
// }

// function zeroToend(arr:Array){
//  const noneZero = arr.filter(item => item !== 0);
//  const zero = arr.filter(item => item === 0);

//   // return noneZero.concat(zero)
//   return [...noneZero, ...zero]
// }
//   zeroToend([false,1,0,1,2,0,1,3,"a"])
