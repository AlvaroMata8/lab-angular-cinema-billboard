import { Injectable } from "@angular/core";
import movies from "../assets/sample-movies";

export interface Movie {
      id: Number,
      title: String,
      poster: String,
      synopsis: String,
      genres: Array<String>,
      year: Number,
      director: String,
      actor: Array<String>,
      hours: Array<String>,
      room: Number
}

@Injectable()
export class MoviesService {

  private Movies: Array<any> = movies;
  constructor() {}

  getMovies() {
    return this.Movies;
  }

  getMovie(id:Number) {
    this.Movies.filter(movie => {
      if (movie["id"] === id) {
        return movie;
      }
    });
  }
}
