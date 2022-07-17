import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter(): void {
    this.count += 1;
  }
}
