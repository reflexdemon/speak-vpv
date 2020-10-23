import { Injectable } from '@angular/core';
import { SpellMap } from './spell-map';

@Injectable({
  providedIn: 'root',
})
export class SpellService {
  constructor(private spellingMap: SpellMap) {}

  getSpellable(toSpell: string): Array<string> {
    const result: Array<string> = [] as Array<string>;
    const length = toSpell.length;
    for (let pos = 0; pos < length; pos++) {
      result.push(this.spellingMap.getWordFromChar(toSpell.charAt(pos).toUpperCase()));
    }

    return result;
  }
}
