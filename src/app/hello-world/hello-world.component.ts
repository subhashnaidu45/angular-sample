import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  isDisabled: boolean = false;
  display() {
    this.isDisabled = true;
  }
  name: any = '';
  // handleInput(event: any) { here this is used for two way binding without use of ng model
  //   this.name = console.log(event.target.value);
  // }
}
