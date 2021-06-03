console.log("****** READ BOOK ******");
/*
  ¿Qué tengo que hacer? 
  Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha 
  leído o no el libro. Un libro es un objeto con title como string y isRead como booleano. 
  En caso de no existir el libro devolver false

  TIP: Existe un método de los Arrays que te ayudará a buscar según un patrón:

  ¿Cómo lo he hecho?  
    1.- Utilizando el método find() he buscado si el título del libro enviado por parámetro existe 
        en el array de libros, en caso de existir, compruebo con un ternario si el libro a sido 
        leído o no, finalmente si el titulo no existe devuelve false. 

    Documentación: 
    [-] https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    [-] https://www.digitalocean.com/community/tutorials/js-array-find-method

*/

function isBookRead(books, titleToSearch) {
  const titleExists = books.find((book) => book.title === titleToSearch);
  const result = titleExists !== undefined ? titleExists.isRead : false;
  return result;
}

var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
