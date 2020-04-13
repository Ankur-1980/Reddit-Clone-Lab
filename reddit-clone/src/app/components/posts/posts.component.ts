import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  show: boolean = true;
  noPic =
    'https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2';

  @Input() post;

  constructor() {}

  ngOnInit(): void {
    this.checkImage();
  }

  checkImage() {
    if (
      this.post.data.thumbnail === 'self' ||
      this.post.data.thumbnail === ''
    ) {
      this.post.data.thumbnail = this.noPic;
    }
  }
}
