//***  Find Multiples of a Number
// function findMultiples(integer, limit) {
//    let arr = [];
//    for (let i=integer; i <=limit; i+=integer) arr.push(i)
//    return arr
//  }

//**Beginner Series #1 School Paperwork  */
// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0
// }

//**Rock Paper Scissors! */
// const rps = (p1, p2) => {
//    if (p1 == 'scissors' && p2 == 'paper') {
//      return 'Player 1 won!'
//    }
//    if (p1 == 'paper' && p2 == 'rock') {
//      return 'Player 1 won!'
//    }
//    if (p1 == 'rock' && p2 == 'scissors') {
//      return 'Player 1 won!'
//    }
//      if (p1 == 'paper' && p2 == 'scissors') {
//      return 'Player 2 won!'
//    }
//    if (p1 == 'rock' && p2 == 'paper') {
//      return 'Player 2 won!'
//    }
//    if (p1 == 'scissors' && p2 == 'rock') {
//      return 'Player 2 won!'
//    }
   
//    return 'Draw!'
//  }
//  rps("paper","rock")

// Find the stray number ->arraydeki farklı sayıyı dönürür
// function stray(numbers) {
// return numbers.reduce((acc, number) => acc ^ number);
// }
// stray([1,1,1,1,12])

// Sum without highest and lowest number
// function sumArray(a) {
// return a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

// }
// sumArray([])

// ****You Can't Code Under Pressure #1
// function doubleInteger(i) {
   // i will be an integer. Double it and return it.
//   return i * 2;
// }

// function sumMix(x){
// return x.map(x=>+x).reduce(
//  (acc, curr) => acc + curr, 0
// )
//   x.map(a => +a).reduce((a, b) => a + b);
// }
// sumMix([9, 3, '7', '3'])


// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 !==0 
// }
// lovefunc(1,4)

// function removeChar(str){
//  return str.slice(1,-1)

// };
// removeChar("eloquent")

// function areYouPlayingBanjo(name) {
//   let first=name.toLowerCase()
//   return first.slice(0,1).includes("r", )
//     ? `${name} plays banjo`
//     : `${name} does not play banjo`;
//   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";

// }
// areYouPlayingBanjo("rolf");

// function sumStr(a,b) {
//   let total=(+a)+(+b)
//    return total.toString()
//     // return String(Number(a)+Number(b));

//   }

// sumStr("34", "5")



// function maps(x){
//  return x.map(n=>n*2)
// }
// maps([1, 2, 3])



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

// ****Convert a string to an array
// function stringToArray(string){
// return string.split(" ")

// }
// stringToArray("I love arrays they are my favorite")

//****Convert boolean values to strings 'Yes' or 'No
// function boolToWord( bool ){
//   return bool ? 'Yes':'No';
// }
// boolToWord( true )

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
