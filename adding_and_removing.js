// The global variable and we want to add booktitle name but in another variable , we don't want to change the original list
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

//adding the booklist
function add (bookName) {
 let k=Object.values(arguments).splice(1);
 let bl=Object.values(arguments).splice(0,1);
 bl.push(k)
 return bl.flat();
}
//removwing the booklist
function remove (bookName) {
  let k=Object.values(arguments).splice(1);
  let bl=Object.values(arguments).splice(0,1).flat();
  return bl.filter((e)=>e!=k);
    }
//creating new instance
const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newestBookList);
// console.log(bookList)
