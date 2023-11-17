//arithmetic operators =,-,*,/,%

let num1 = 60
let num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//assignment operators +=,-=,*=,/=,%=

let num3 = 2;
num3 += 3;
console.log(num3);

let num4 = 3;
num4 -= 1;
console.log(num4);

let num5 = 5;
num5 *= 4
console.log(num5);

let num6 = 8;
num6 /= 4;
console.log(num6);

let num7 = 4;
num7 %= 4;
console.log(num7);

let num8 = 6;
num8 ++;
console.log(num8);
num8 --;
console.log(num8);

//comparison operators ==,>=,<=,!=,===
 let n1 = 5;
 let n2 = 5;
 console.log(n1 == n2);

 let n3 = 6;
 let n4 = 4;
 console.log(n3 >= n4);

 let n5 = 2;
 let n6 = 8;
 console.log(n5 <= n6);

 let n7 = 6;
 console.log(n7 != 6);

 let n8 = 9;
 let n9 = "9";
 console.log(n8 === n9);

 //logical operators &&,||,!

 let v1 = 9;
 let v2 = 8;
 console.log(v1 >= 9 && v2 >= 8);
 console.log(v1 >= 10 && v2 >= 8);
 console.log(v1 <= 8 && v2 >= 8);
 console.log(v1 >= 10 && v2 >= 9)


 let o1 = 8;
 let o2 = 4;
 console.log(o1 >= 8 || o2 >= 4);
 console.log(o1 >= 8 || o2 >= 6);
 console.log(o1 >= 9 || o2 >= 4);
 console.log(o1 >= 10 || o2 >= 7);

 let t1 = 6;
 let t2 = 4;
 console.log(!(t1 >= 6 && t2 <= 4));
 console.log(!(t1 >= 8 && t2 <= 4));

 //functions,parameters,arguments

 function rohit(){
    console.log("he hit most no of sixes in cricket");
 }

 function kohli(){
    console.log("he scored 50 international centuries in one day cricket");
 }

 function raina(){
    console.log("he is the first indian batter to score a t20 century for india");
 }

 rohit();
 raina();
 kohli();

function vinay(number1 , number2){
    console.log(number1 + number2);
}

function virat(number3 , number4){
    console.log(number3 * number4);
}

vinay(6,4);
virat(5,6);

//datatypes and userinput

 ap1 = parseInt(prompt("enter the num1:-"));
 ap2 = parseInt(prompt("enter the num2:-"));
 console.log(ap1 + ap2);

ui1 = parseFloat(prompt("enter the number1:-"));
ui2 = parseFloat(prompt("enter the number2:-"));
console.log(ui1 + ui2);

