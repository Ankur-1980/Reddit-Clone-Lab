import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RedditService } from 'src/app/services/reddit.service';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css'],
})
export class ChangesComponent implements OnInit {
  @Output() changes = new EventEmitter();
  constructor(private redditService: RedditService) {}

  ngOnInit(): void {}

  changeSubReddit(input) {
    this.changes.emit(input.value);
  }
}
