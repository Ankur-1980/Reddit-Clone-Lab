import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css'],
})
export class ChangesComponent implements OnInit {
  @Output() changes = new EventEmitter();
  @Output() ofPosts = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeSubReddit(input) {
    this.changes.emit(input.value);
  }
}
