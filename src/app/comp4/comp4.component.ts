import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  template: `
  <footer >
    <p>comp4 works!</p>
    <p>copyright</p>
  </footer>`,
  styles: [`
    footer {
      background-color: yellow;
      width: 100%;
      height: 20hv;
    }
    p {
      color: purple;
      font-size: 12px;
    }
  `]
})
export class Comp4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
