import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MoviesService } from "../services/movies.service";
import { MyHomeComponent } from "./my-home/my-home.component";
import { MyMovieComponent } from "./my-movie/my-movie.component";
import { RouterModule, Routes } from '@angular/router';
import {routes} from './routes'

@NgModule({
  declarations: [
    AppComponent, 
    MyHomeComponent,
    MyMovieComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
    ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
