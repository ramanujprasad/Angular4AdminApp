import { Component, OnInit } from '@angular/core';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    public translatedText: string;
    public supportedLanguages: any[];

    constructor(private _translate: TranslateService) { }

    ngOnInit() {
      // This data is available in header
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
      // set default language;
      this._translate.use(lang);
    }
}
