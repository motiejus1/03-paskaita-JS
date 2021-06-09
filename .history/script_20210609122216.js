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
skaicius1 = skaicius;

if(skaicius == skaicius1) {
    console.log("skaicius lygus skaicius1");
} else {
    console.log("skaicius nelygus skaicius1");
}