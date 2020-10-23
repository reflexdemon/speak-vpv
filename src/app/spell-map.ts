import { Injectable } from '@angular/core';

export interface Entry {
  key: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class SpellMap {
  ENGLISH_MAP: Array<Entry> = [
    // Alphabet
    { key: 'A', value: 'A as Alfa' },
    { key: 'B', value: 'B as Bravo' },
    { key: 'C', value: 'C as Charlie' },
    { key: 'D', value: 'D as Delta' },
    { key: 'E', value: 'E as Echo' },
    { key: 'F', value: 'F as Foxtrot' },
    { key: 'G', value: 'G as Golf' },
    { key: 'H', value: 'H as Hotel' },
    { key: 'I', value: 'I as India' },
    { key: 'J', value: 'J as Juliett' },
    { key: 'K', value: 'K as Kilo' },
    { key: 'L', value: 'L as Lima' },
    { key: 'M', value: 'M as Mike' },
    { key: 'N', value: 'N as November' },
    { key: 'O', value: 'O as Oscar' },
    { key: 'P', value: 'P as Papa' },
    { key: 'Q', value: 'Q as Quebec' },
    { key: 'R', value: 'R as Romeo' },
    { key: 'S', value: 'S as Sierra' },
    { key: 'T', value: 'T as Tango' },
    { key: 'U', value: 'U as Uniform' },
    { key: 'V', value: 'V as Victor' },
    { key: 'W', value: 'W as Whiskey' },
    { key: 'X', value: 'X as X-ray' },
    { key: 'Y', value: 'Y as Yankee' },
    { key: 'Z', value: 'Z as Zulu' },

    // Numbers
    { key: '0', value: 'Zero' },
    { key: '1', value: 'One' },
    { key: '2', value: 'Two' },
    { key: '3', value: 'Three' },
    { key: '4', value: 'Four' },
    { key: '5', value: 'Five' },
    { key: '6', value: 'Six' },
    { key: '7', value: 'Seven' },
    { key: '8', value: 'Eight' },
    { key: '9', value: 'Nine' },

    // Special Characters
    { key: ' ', value: 'Space' },
    { key: '.', value: 'Dot' },
    { key: ',', value: 'Comma' },
    { key: ';', value: 'Semicolon' },
    { key: ':', value: 'Colon' },
    { key: '?', value: 'Question Mark' },
    { key: '!', value: 'Exclamation Mark' },
    { key: '@', value: 'At Sign' },
    { key: '&', value: 'Ampersand' },
    { key: '"', value: 'Double Quotation Mark' },
    { key: "'", value: 'Apostrophe' },
    { key: '-', value: 'Dash' },
    { key: '/', value: 'Forward Slash' },
    { key: '\\', value: 'Backslash' },
    { key: '(', value: 'Left Round Bracket' },
    { key: ')', value: 'Right Round Bracket' },
    { key: '[', value: 'Left Square Bracket' },
    { key: ']', value: 'Right Square Bracket' },
    { key: '{', value: 'Left Curly Bracket' },
    { key: '}', value: 'Right Curly Bracket' },
    { key: '<', value: 'Left Angle Bracket' },
    { key: '>', value: 'Right Angle Bracket' },
    { key: '|', value: 'Vertical Bar' },
    { key: '°', value: 'Degree Symbol' },
    { key: '*', value: 'Asterisk' },
    { key: '+', value: 'Plus Sign' },
    { key: '=', value: 'Equal Sign' },
    { key: '#', value: 'Number Sign' },
    { key: '§', value: 'Section Sign' },
    { key: '$', value: 'Dollar Sign' },
    { key: '€', value: 'Euro Sign' },
    { key: '~', value: 'Tilde' },
    { key: '_', value: 'Underscore' },
    { key: '%', value: 'Percent Sign' },
    { key: '^', value: 'Caret' },
  ];

  found(key: string): string {
    const search = this.ENGLISH_MAP.filter((item) => item.key === key);
    if (search.length) {
      return search[0].value;
    }
    return '';
  }

  getWordFromChar(ch: string): string {
    const key = ch || '';
    const result: string = this.found(key);
    return result;
  }
}
