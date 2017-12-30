import { Component, OnInit } from '@angular/core';
import { CAMPS, TOURNAMENTS, TEAMS, PLAYERS } from "../../shared/mock-data";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  camps = CAMPS;
  tournaments = TOURNAMENTS;
  teams = TEAMS;
  players = PLAYERS;
  constructor() { }

  ngOnInit() {
  }
}
