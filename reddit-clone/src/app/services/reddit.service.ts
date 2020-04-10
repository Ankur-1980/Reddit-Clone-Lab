import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RedditService {
  subReddit = 'aww';
  url = `https://www.reddit.com/r/${this.subReddit}/.json`;

  constructor(private httpClient: HttpClient) {}

  getData() {
    console.log(`getDataService ${this.url}`);
    return this.httpClient.get(`${this.url}`);
  }

  changeSubReddit(newSubReddit) {
    this.subReddit = newSubReddit;
    this.url = `https://www.reddit.com/r/${this.subReddit}/.json`;
    this.getData();
  }
}
