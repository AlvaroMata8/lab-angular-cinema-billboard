import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-my-movie",
  templateUrl: "./my-movie.component.html",
  styleUrls: ["./my-movie.component.css"]
})
export class MyMovieComponent implements OnInit {
  id: number;
  m: Object;

  constructor(public route: ActivatedRoute, private Movies: MoviesService) {
    this.route.params.subscribe(p => {
      this.id = p.id;
      console.log(this.id);
      this.m = this.Movies.getMovie(this.id);
    });
  }

  ngOnInit() {}
}
