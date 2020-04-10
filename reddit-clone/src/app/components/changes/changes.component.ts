import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css'],
})
export class ChangesComponent implements OnInit {
  @Output() changes = new EventEmitter();
  @Output() postNumber = new EventEmitter();

  postsNumber: number[] = [5, 10, 15, 20];

  constructor() {}

  ngOnInit(): void {}

  changeSubReddit(input) {
    this.changes.emit(input.value);
  }

  ofPosts(selectValue) {
    if (selectValue !== 0) {
      this.postNumber.emit(selectValue);
    }
  }
}
