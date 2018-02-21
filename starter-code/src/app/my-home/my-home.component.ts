import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import {  Router } from '@angular/router'

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  logo= 'https://www.ironhack.com/assets/landing-pages/assets/wallapop/images/logo-ironhack.png'
  constructor(public router:Router, private ourMovies:MoviesService) { }

  ngOnInit() {
  }

moviesList = this.ourMovies.getMovies();
}
