import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-success',
  template: `
    <p>
      alert-success works!
    </p>
  `,
  styles: [
  ]
})
export class AlertSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
