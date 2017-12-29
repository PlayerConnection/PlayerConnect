import { Component, OnInit } from '@angular/core';
import { Newsfeed } from "../../shared/models/newsfeed.model";
import { NEWS } from "../../shared/mock-data";

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {
  newsfeed = NEWS;

  constructor() { }

  ngOnInit() {
  }
  onNewsDeleted(index) {
    this.newsfeed.splice(index, 1);
  }
  getTopNewsFeed() {
    return this.newsfeed.filter((item, index) => index >= 0 && index <5 )
  }
}
