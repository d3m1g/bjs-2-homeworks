class PrintEditionItem {
 constructor(name, releaseDate, pagesCount) {
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this.state = 100;
  this.type = null;
 }

 fix() {
  this.state = this.state * 1.5;
 }

 set state(bookState) {
  if (bookState < 0) {
   this._state = 0;
  } else if (bookState > 0) {
   this._state = 100;
  } else {
   this._state = bookState;
  }
 }

 get state() {
  return this._state;
 }
}

class Magazine extends PrintEditionItem {
 constructor(name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount);
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this.state = 100;
  this.type = "magazine";
 }
}

class Book extends PrintEditionItem {
 constructor(author, name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount, author);
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this.state = 100;
  this.type = "book";
  this.author = author;
 }
}

class NovelBook extends Book {
 constructor(author, name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount);
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this.state = 100;
  this.type = "novel";
  this.author = author;
 }
}

class FantasticBook extends Book {
 constructor(author, name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount);
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this.state = 100;
  this.type = "fantastic";
  this.author = author;
 }
}

class DetectiveBook extends Book {
 constructor(author, name, releaseDate, pagesCount) {
  super(name, releaseDate, pagesCount);
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this.state = 100;
  this.type = "detective";
  this.author = author;
 }
}

class Library {
 constructor(name, books) {
  this.name = name;
  this.books = [];
 }

 addBook(book) {
  if (this.state > 30) {
   this.books.push(book);
  }
 }

 findByBook(type, value) {
  for (i = 0; i < this.books.length; i++) {
   if (this.books[i].type === value) {
    return this.books[i];
   }
  }
  return null;
 }

 giveBookByName(bookName) {
  const givenBook = this.findByBook("name", bookName);
  if (givenBook) {
   this.books.splice(this.books.indexOf(bookName), 1)
   return givenBook;
  }
  return null;
 }
}

class Student {
 constructor(name, marks) {
  this.name = name;
  this.marks = {};
 }

 addMark(mark, subject) {
  if (mark > 2 && mark <= 5) {
   if (this.marks[subject] === undefined) {
    this.marks[subject] = [];
   }
   this.marks[subject].push(mark);
  }
 }

 getAverageBySubject(subject) {
  if (this.marks[subject] === undefined) {
   return 0;
  }

  let avgSubjectMark = 0;
  if (this.marks[subject] !== undefined) {
   avgSubjectMark = this.marks[subject].reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
     return acc / arr.length;
    }
    return acc;
   }, 0)
  }
  return avgSubjectMark;
 }

 getAverage() {
  let overallAverage = Object.keys(this.marks).reduce((acc, item, index, arr) => {
   acc += this.getAverageBySubject([item]);
   if (index === arr.length - 1) {
    return acc / arr.length;
   }
   return acc;
  }, 0)
  return overallAverage;
 }
}