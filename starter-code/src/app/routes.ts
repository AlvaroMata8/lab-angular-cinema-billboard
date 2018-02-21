import { Routes } from "@angular/router";
import { MyMovieComponent } from "./my-movie/my-movie.component";
import { MyHomeComponent } from "./my-home/my-home.component";

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
  
    { path: "home", component: MyHomeComponent },
  
    { path: "movie/:id", component: MyMovieComponent }
  ];