import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public translatedText: string;
    public supportedLanguages: any[];

    constructor(private _translate: TranslateService) { }

    ngOnInit() {
      // standing data
      this.supportedLanguages = [
        { display: 'English', value: 'en' },
        { display: 'Dutch', value: 'nl' },
        { display: 'French', value: 'fr' },
      ];

      this.selectLang('en');

    }

    isCurrentLang(lang: string) {
      return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
      // set default;
      this._translate.use(lang);
    }
}
