console.log("************** DELIVERABLE 01 *********************");

let arr = ["uno", "dos", "tres", "cuatro"];

const head = ([first]) => first;
console.log("head -> ", head(arr)); // uno

const tail = ([, ...others]) => others;
console.log("tail -> ", tail(arr)); // ["dos", "tres", "cuatro"]

const init = (arr) => arr.slice(0, -1);
console.log("init  -> ", init(arr)); // ["uno", "dos", "tres"]

const last = (arr) => arr.slice(-1);
console.log("last -> ", last(arr)); // ["cuatro"]
