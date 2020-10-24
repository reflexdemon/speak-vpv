import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Speak for People';
  links = [
    { title: 'Home', fragment: 'home' },
    { title: 'About', fragment: 'about' }
  ];
  year = new Date().getFullYear();
  constructor(public route: ActivatedRoute) {
  }
}
