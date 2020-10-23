import { Component, OnInit } from '@angular/core';
import { SpellService } from '../spell.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  toSpell: string;
  response: Array<string>;

  constructor(private spellingService: SpellService) {}

  ngOnInit(): void {}

  spell(): void {
    this.response = this.spellingService.getSpellable(this.toSpell);
  }
}
