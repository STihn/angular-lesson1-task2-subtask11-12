import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'comp2',
  template: `<p>hello world <b>comp2</b></p>
  <nav>
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  </nav>`,
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
