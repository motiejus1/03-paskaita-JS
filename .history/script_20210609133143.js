"use strict";
console.log("Pavyko");

var skaicius = 16;
var skaicius1 = 17;

//15 > 16
// false
// salygos veiksmu nevykdo

// 18 > 16
// true
//salygos veiksmus vykdo

//16>16
//false
//// salygos veiksmu nevykdo
//16 <16
//false
//// salygos veiksmu nevykdo
//16=16
//true
//salyga vykdo

// if(skaicius > skaicius1) {
//     console.log("Tiesa, skaicius daugiau negu skaicius1");
// }

// if(skaicius < skaicius1) {
//     console.log("Tiesa, skaicius maziau negu skaicius1");
// }

// if(skaicius == skaicius1) {
//     console.log("Tiesa, skaicius lygus skaicius1");
// }

// if(skaicius >= skaicius1) {
//     console.log("Tiesa, skaicius daugiau arba lygu skaicius1");
// }

// if(skaicius <= skaicius1) {
//     console.log("Tiesa, skaicius maziau arba lygu skaicius1");
// }

//16=17
//false
//true
//veiksmus vykdo

// if(skaicius != skaicius1) {
//     console.log("Tiesa, skaicius nelygus skaicius1");
// }

//16 = 17
//false
//veiksmu nevykdo
//vykdo else veiksmus


//16 = 16
//tiesa
//vykdo veiksmus
//nevykdo else veiksmu 

skaicius = 16;
skaicius1 = 17;

if(skaicius == skaicius1) {
    console.log("skaicius lygus skaicius1");
} else {
    console.log("skaicius nelygus skaicius1");
}

// Patikrinti ar naturalus skaicius yra lyginis ar nelyginis
// [1,2,3,4]

// apsirasyti kintamaji tSkaicius 12
// patikrinti tSkaicius > 0; netikrinsim ar skaicius yra realus
//tikrinsim skaicius lyginis ar ne

var tSkaicius = 13;

// 17 % 5 = 2

if(tSkaicius > 0) {
    if(tSkaicius % 2 == 0) {
        console.log("Skaicius yra lyginis" + tSkaicius);
    } else {
        console.log("Skaicius yra nelyginis" + tSkaicius);
    }
} else {
    console.log("Skaicius ne naturalus" + tSkaicius);
}

tSkaicius = 15;

//Isvesti informacija tada kai musu skaicius yra 12, 13 arba 14

if(tSkaicius == 12) {
    console.log("Skaicius lygus 12");
} else if(tSkaicius == 13) {
    console.log("Skaicius lygus 13");
} else if(tSkaicius == 14) {
    console.log("Skaicius lygus 14");
} else {
    console.log("Skaicius nelygus nei 12, nei 13, nei 14");
}

//Jeigu skaicius1 lyginis, sudauginti skaiciu a ir b, jeigu skaicius1 yra nelyginis, pakeisti skaicius1 reiksme i 14 

//151
//sandauga ? undefined
//151 yra lyginis
//false
// vykdomas else
// skaicius 14
//sandauga ? undefined

//150
//sandauga ? undefined
//150 yra lyginis
//true
// vykdomas priskyrimo veiksmas
// skaicius 150
//sandauga  20



skaicius1 = 150;
let a, b;
// var sandauga;
let sandauga;
sandauga = 0;


const pi = 3.141;

a = 5;
b = 4;

if(skaicius1 % 2 == 0) {
    sandauga = a*b;
} else {
    skaicius1 = 14;
}

console.log("Sandauga: " + sandauga);
console.log("Skaicius1: " + skaicius1);

