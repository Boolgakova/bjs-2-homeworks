class PrintEditionItem{
  constructor (name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix(){
    this.state = this.state * 1.5;
  }

  set state(points){
    if(points <= 0){
    this.state = 0;
    } else if(points >= 100){
    this._state = 100;
    } else {
    this._state = points;
    }
  }

  get state(){
    return this._state;
  }
}

class Magazine extends PrintEditionItem{
  constructor(name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem{
  constructor(author, name, releaseDate, pagesCount){
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book{
  constructor(author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
}

class FantasticBook extends Book{
  constructor(author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
  constructor(author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
}

class Library{
  constructor (name){
    this.name = name;
    this.books = [];
  }

  addBook(book){
    if(book.state > 30){
      this.books.push(book);
    }
  }

  findBookBy(type, value){
    for(let book of this.books){
      if(book[type] === value){
        return book;
      }
    } return null;
  }


  giveBookByName(bookName){
    const book = this.findBookBy("name", bookName);
    const bookIndex = this.books.indexOf(book);
      if(bookIndex !== 1){
      this.books.splice(bookIndex, 1);
      return book;
      } return null;
    }

}

class Student{
  constructor (name) {
    this.name = name;
  }

  addMark(mark, subjectName){
    if (mark < 1 || mark > 5 ){
      console.log("Ошибка, оценка должна быть числом от 1 до 5");
    } else {
        if (this[subjectName] === undefined){
            this[subjectName] = [];
            this[subjectName].push(mark);
        } else{
            this[subjectName].push(mark);
        }
    }
  }

  getAverageBySubject(subjectName){
    if(this[subjectName] !== undefined){
      let sum = 0;
      this[subjectName].forEach(mark => sum +=mark);
      return sum / this[subjectName].length;
    } else {
      console.log("Несуществующий предмет");
    }
  }

  getAverage(){
    let allMarks = [];


    .forEach(element => allMarks.push(element));
      }
    }
    let sum = 0;
    allMarks.forEach(element => sum += element);
    return sum / allMarks.length;
    }
  }