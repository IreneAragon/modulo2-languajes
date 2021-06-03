console.log("************** DELIVERABLE 03 *********************");

/*** CLONE  ***/
const clone = (source) => {
  const clone = { ...source };
  return clone;
};

const obj = { name: "Irene", surname: "Aragón Gómez" };
console.log(obj);
console.log(clone(obj));
console.log(clone(obj) === obj);

/*** MERGE  ***/
const merge = (source, target) => {
  const merge = { ...target, ...source };
  return merge;
};

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log(merge(a, b));
