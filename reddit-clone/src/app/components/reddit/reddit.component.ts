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
  y;

  constructor(private redditService: RedditService) {}

  ngOnInit(): void {
    this.redditService.getData().subscribe((response) => {
      console.log(response);

      this.bulkData = response;
      this.redditData = this.bulkData.data.children;
    });
  }
  changes(x) {
    this.redditService.changeSubReddit(x);
    this.ngOnInit();
  }

  ofPosts(selectValue) {
    this.y = selectValue;
    console.log(`Reddit Component: ${this.y}`);
  }
}
