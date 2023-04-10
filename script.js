// // Arryın içindeki ssayıları toplama
// function sum(...arg){
// let sum=arg.reduce(
//   (acc, curr) => acc + curr, 0
// );
//   return  sum
// }

// sum (1,2,4,5,6)

// for (let i = 1; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//  console.log(i)
// }


//*****Grasshopper - Personalized Message
// function greet (name, owner) {
//  return name == owner ? 'Hello boss' :'Hello guest'
// }
// greet('ferhat','daniel')

//**** Remove exclamation marks
// function removeExclamationMarks(s) {
//   return s.replaceAll("!","")
// }
// removeExclamationMarks('hello world !')


//*****Remove String Spaces
// function noSpace(x){
// return x.replaceAll(" ","")

// }
// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')

////***** Is he gonna survive?
// function hero(bullets, dragons){
//  return dragons *2 < bullets || dragons *2 ==bullets
// }
// hero (1500, 751)

//*** Grasshopper - Check for factor
// function checkForFactor (base, factor) {
// return base % factor ? false:true
// or ;base % factor === 0;
// }
// checkForFactor(2450,5)

// String ends with? SON HARFLERİ AYNIYSA TRUE
// function solution(str, ending){
//  return str.endsWith(ending)
// }
// solution('abcde','cde')

///***Sort Numbers
// function solution(nums) {
//   if (!nums) return [];
//   return nums.sort((a, b) => a - b);
//    nums ? nums.sort(function(a, b) { return a - b;}) : []
// }

// solution(null);

// const values={username: 'isa', password: '1235'}
//  const list= [
//     {
//         username:'isa',
//         password:'12345',
//     },
//     {
//         "username":'Ferhat',
//         "password":'123456',
    
//     }]
//   let user=list.find(item => item.username == values.username)
//  let isTrue=user.password == values.password
//  console.log(isTrue)
//  console.log(user)



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
// updateLight("green")

//** Is it even?
// function testEven(n) {
// return n%2===0 ? true : false
//     }
// testEven(0.5)

// //**Is the string uppercase
// function string(str) {
// return str.split("").includes(
//   "e","r","t","u","ı","o","p","a",
//   "s","d","f","g","h","j","j","k",
//   "l","i","z","x","c","v","b","n","m")
//   ? false : true

// }
// string("HELLO WORLD")


// function sumArray(arr) {
// let sortedArr = arr.sort((a, b) => a - b);
//   sortedArr.pop();
//   sortedArr.shift()
//  return sortedArr.reduce((acc, curr) => acc + curr, 0)

// }
// sumArray([6, 2, 1, 8, 10] )

//***alarm (çalışıyorsa çal değilse çalma )
// function setAlarm(employed, vacation){
// if (!employed) return false
//   return !vacation
// }
// setAlarm(true,  true)
// setAlarm(false,  true)
// setAlarm(false,  false)
// setAlarm(true,  false)

//***harf otalaması bulma
//function getGrade (s1, s2, s3) {
// let ort=(s1+s2+s3)/3;
// let harfnot=""
// if (ort>=90 && ort<=100)
//           harfnot='A';
//       else if (ort>=80 && ort<90)
//           harfnot='B';
//       else if (ort>=70 && ort<80)
//           harfnot='C';
//       else if (ort>=60 && ort<70)
//           harfnot='D';
//       else if (ort>=0 && ort<60)
//           harfnot='E';
//     return harfnot
//}  


//***harf otalaması bulma
//function getGrade (s1, s2, s3) {
// let ort=(s1+s2+s3)/3;
// let harfnot=""
// if (ort>=90 && ort<=100)
//           harfnot='A';
//       else if (ort>=80 && ort<90)
//           harfnot='B';
//       else if (ort>=70 && ort<80)
//           harfnot='C';
//       else if (ort>=60 && ort<70)
//           harfnot='D';
//       else if (ort>=0 && ort<60)
//           harfnot='E';
//     return harfnot
//***harf ortalamassı
//   function getGrade (s1, s2, s3) {
//   avg = (s1+s2+s3)/3;
//   if (avg < 60)  return "F";
//     else if (avg < 70) return "D";
//     else if (avg < 80) return "C";
//     else if (avg < 90) return "B";
//     else return "A";
// }
// getGrade(60,60,60)

////***verilen string degeri number olarak yazdırma
// function getAge(inputString){
//   return parseInt(inputString);
// }

//****arraydeki en küçük iki sayının toplamı

// function sumTwoSmallestNumbers(numbers) {
//   // return numbers.sort((a, b)=> a - b)[0] + numbers.sort((a, b)=> a - b)[1]
//    numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// }
// sumTwoSmallestNumbers([5, 8, 12, 19, 22])

//***istediğimiz koşulda bir cümle yazdırma
// function hoopCount (n) {
//   return n <10 ? "Keep at it until you get it" : "Great, now move on to tricks";

// }
// hoopCount(5)


//****istediğimize tamamlama fonksiyonu
// function otherAngle(a, b) {
// return 180 - (a + b);
// (a, b) => 180 - a - b
// }
// otherAngle(10, 20)

//******sayı çiftse 8 değilse 9 ile çarp

//function simpleMultiplication(number) {
// return number%2==0 ? number * 8 : number * 9
// return n * (n % 2 ? 9 : 8);

// }
// simpleMultiplication(7)

///******* max ve min string olarak yazdırma
// function highAndLow(numbers) {
//   let arr = numbers.split(" ").sort((a, b) => b - a);
//   // return `${arr.at(0)}  ${arr.at(-1)}`;
//     return arr.at(0) + " - " + arr.at(-1);

//   let arr = numbers.split(' ');
//   return `${Math.max(...arr)} ${Math.min(...arr)}`

// }
// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4 100");

//function makeUpperCase(str){
// return  str.toUpperCase()
//}

//makeUpperCase("hello")


//***en büyük ve en küçük sayıyı çıkarıp toplar
// function sumArray(arr) {
// let sortedArr = arr.sort((a, b) => a - b);
//   sortedArr.pop();
//   sortedArr.shift()
//  return sortedArr.reduce((acc, curr) => acc + curr, 0)
  
// }
// sumArray([6, 2, 1, 8, 10] )



//****Is the string uppercase
// function string(str) {
// return str.split("").includes(
//   "e","r","t","u","ı","o","p","a",
//   "s","d","f","g","h","j","j","k",
//   "l","i","z","x","c","v","b","n","m")
//   ? false : true  

// }
// string("HELLO WORLD")



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
