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
  postsNumber: number[] = [5, 10, 15, 20];

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
    if (selectValue === 0) {
      this.numberOfPosts = null;
    } else {
      this.numberOfPosts = selectValue;
    }
  }
}
