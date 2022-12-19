import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  slogan: string = 'die with memories not with dreams';

  hi() {
    this.slogan = 'live the life';
  }
}
