// Parent class: Media.
class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title(){
    return this._title;
  }
  
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  
   get ratings(){
    return this._ratings;
  }
  
  toggleCheckOutStatus(){
    (this._isCheckedOut === true)? this._isCheckedOut = false :  this._isCheckedOut  = true;
  }
  
  getAverageRating(){
    const rating = this._ratings.reduce((accumulator, currentValue) => (accumulator + currentValue)/this._ratings.length, 0);
    return rating.toFixed(1);
  }
  
  set checkedOut(check){
    this._isCheckedOut = check;
  }
  
}
////////////////////////////////////////
// Child class: Book
class Book extends Media {
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get author(){
    return this._author;
  }
  
    get pages(){
    return this._pages;
  }
  
  addRating(rating){
    this["_ratings"].push(rating);
  }
}
// Book instance: Goosebumps
const goosebumps = new Book('Goosebumps', 'RL Stine', 200);

////////////////////////////////////////
// Child class: Movie
class Movie extends Media {
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  get director(){
    return this._director;
  }
  
    get runTime(){
    return this._runTime;
  }
  
  addRating(rating){
    this["_ratings"].push(rating);
  }
}

// Movie instance: Speed
const speed = new Movie('Speed','Jan de Bont', '116');

//////////////////////////////////////
// TESTING GROUND.

// Goosebump tests
goosebumps.toggleCheckOutStatus();
console.log(goosebumps.isCheckedOut);

goosebumps.addRating(4);
goosebumps.addRating(5);
goosebumps.addRating(5);
console.log(goosebumps.getAverageRating());

// Speed tests
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(5);
speed.addRating(4);
speed.addRating(4.5);
console.log(speed.getAverageRating());