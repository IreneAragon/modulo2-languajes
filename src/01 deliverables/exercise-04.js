console.log("************** DELIVERABLE 04 *********************");

function isBookRead(books, titleToSearch) {
  const titleExists = books.find((book) => book.title === titleToSearch);
  const result = titleExists !== undefined ? titleExists.isRead : false;
  return result;
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
