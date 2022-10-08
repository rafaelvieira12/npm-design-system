import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'd-button',
  templateUrl: './d-button.component.html',
  styleUrls: ['./d-button.component.css'],
})
export class DButtonComponent implements OnInit {
  @Input() name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
