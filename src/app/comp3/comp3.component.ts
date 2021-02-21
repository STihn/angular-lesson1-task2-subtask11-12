import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp3',
  templateUrl: './comp3.component.html',
  styles: [`
    .com3 {
      background-color: green;
      width:200px;
      border: 1px solid black;
      border-radius: 10px;
      padding: 30px;
    }
    .com3__subtitle {
      font-size: 32px;
      color: red;
    }
    .com3__text {
      font-size: 18px;
      color: blue;
    }
  `]
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
