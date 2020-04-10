import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css'],
})
export class RedditComponent implements OnInit {
  bulkData;
  redditData;
  numberOfPosts;

  constructor(private redditService: RedditService) {}

  ngOnInit(): void {
    this.redditService.getData().subscribe((response) => {
      this.bulkData = response;
      this.redditData = this.bulkData.data.children;
    });
  }
  changes(x) {
    this.redditService.changeSubReddit(x);
    this.ngOnInit();
  }

  postNumber(x) {
    this.numberOfPosts = x;
  }
}
