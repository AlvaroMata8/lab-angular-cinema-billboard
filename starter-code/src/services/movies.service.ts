import { Injectable } from "@angular/core";
import movies from "../assets/sample-movies";

@Injectable()
export class MoviesService {
  Movies: Array<Object> = movies;
  // newMessage : Object = {}
  constructor() {}

  getMovies() {
    return this.Movies;
  }

  getMovie(id:Number) {
    return this.Movies.filter(movie => {
      if (movie["id"] === id) {
        return movie;
      }
    });
  }
}
