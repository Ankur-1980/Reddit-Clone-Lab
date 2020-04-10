import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css'],
})
export class ChangesComponent implements OnInit {
  @Output() changes = new EventEmitter();
  @Output() ofPosts = new EventEmitter();
  x;
  postsNumber: number[] = [5, 10, 15, 20];

  constructor() {}

  ngOnInit(): void {}

  changeSubReddit(input) {
    this.changes.emit(input.value);
  }

  numberPosts(selectValue) {
    console.log(`Changes Component: ${selectValue}`);
    if (selectValue === 0) {
      return '';
    } else {
      this.ofPosts.emit(`slice: 0 : ${selectValue}`);
    }
  }

  //   if(selectValue === 0) {
  //     this.x = ''
  //   } else {
  //     this.x =
  //   }
  // }
}
