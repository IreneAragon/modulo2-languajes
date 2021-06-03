console.log("************** DELIVERABLE 02 *********************");
const arr1 = ["uno", "dos", "tres"];
const arr2 = ["cuatro", "cinco", "seis"];
const arr3 = ["siete", "ocho"];
const arr4 = ["nueve"];

const concat = (a, b) => {
  console.log("Concat: ", [...a, ...b]);
};
concat(arr1, arr2);

/*** Opcional  ***/
const concat2 = (...arg) => arg.reduce((acc, val) => [...acc, ...val], []);
console.log("Reduce(): ", concat2(arr1, arr2, arr3, arr4));

/*** Opcional  ***/
const concat3 = (...arg) => arg.flat();
console.log("Flat(): ", concat3(arr1, arr2, arr3, arr4));
