// var age = +prompt("age ?");
// if (age > 18) {
//     console.log("okay");
// }
// var num = +prompt("number?");
// var k50 = 0; // 50
// var k25 = 0; //25
// var k10 = 0; //10

// if (num) {
//     k50 = parseInt(num / 50);
//     num = num - k50 * 50;
//     k25 = parseInt(num / 25);
//     num = num - k25 * 25;
//     k10 = parseInt(num / 10);
//     num = num - k10 * 10;
//     console.log(k50, k25, k10, num);
//     if (k50) {
//         console.log(k50, "50");
//     }
//     if (k25) {
//         console.log(k25, "25");
//     }
//     if (k10) {
//         console.log(k10, "10");
//     }
//     if (num) {
//         console.log("ost", num);
//     }
// } else {
//     alert("ne verno");
// }
// var num;
// if {
//     ParseInt(math.random() * 50)

// } else {
//     console.log(num)
// }
// DZ;
// }
// SVGDefsElementsdfssdf
// SVGDefsElementsdfssdfsdf

// SVGDefsElementsdfssdfsdfsdf

// sdf

// var x = 12;
// var b = 12;
// switch (x) {
//     case 10:
//         console.log(x);
//         break;
//     case 11:
//         console.log(x);
//         break;
//     case 12:
//         console.log(x);
//         break;
//     case 13:
//         console.log(x);
//         break;
//     case 14:
//         console.log(x);
//         break;
//     case 15:
//         console.log(x);
//         break;
// }

// var k50 = +prompt("chislo ?");
// var v = k50 / 2;
// switch (v) {
//     case k50 / 2:
//         console.log("четное");
//         break;
//     default:
//         console.log("нечетное");
// }fg
// fghfg
// fghfghf
// get

// var age = +prompt("age?");
// const discont = 0.5;
// console.log(age % 2 == 0 ? "чет" : "нечет");
// fghfgfgh
// fghfg
var computeNum = localStorage.getItem("keyComputeNum");
computeNum = computeNum ? computeNum : Math.round(Math.random() * 10);
var userNum = +prompt("try ?");
if (userNum === computeNum) {
    alert("win");
    localStorage.removeItem("keyComputeNum");
} else {
    alert("loser");
    localStorage.setItem("keycomputeNum", computeNum);
}

console.log(computeNum);