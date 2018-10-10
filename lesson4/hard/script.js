'use strict';
let str = "урок-3-был слишком легким";
let rep = str.replace(new RegExp("-","g"), " ");
let char = rep.slice(-6);
let word = char.replace(new RegExp("им","g"), "о");

console.log(str[0].toUpperCase());
console.log(rep);
console.log(char);
document.write(word);


let arr = [20, 33, 1, "Человек", 2, 3];
delete arr[3];

for (var i = 0; i < arr.length; i++) {
    console.log(Math.pow(arr[i],3));
}


