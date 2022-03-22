import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  private subscriptions: Subscription[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
