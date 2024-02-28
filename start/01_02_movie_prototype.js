class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    console.log(`${this.title}, a ${this.genre} 
    film directed by ${this.director} was released 
    in ${this.releaseYear}. It received a rating 
    of ${this.rating}.`);
  }
}

const movie1 = new Movie("The Shawshank Redemption", "Frank Darabont", "Drama", 1994, 9.3);
const movie2 = new Movie("The Dark Knight", "Christopher Nolan", "Action", 2008, 9.0);

movie1.getOverview();
movie2.getOverview();
