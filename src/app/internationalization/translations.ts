// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from '../labels/lang-en';
import { LANG_NL_NAME, LANG_NL_TRANS } from '../labels/lang-nl';
import { LANG_FR_NAME, LANG_FR_TRANS } from '../labels/lang-fr';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
/*const dictionary = {
	[LANG_EN_NAME]: LANG_EN_TRANS,
	[LANG_NL_NAME]: LANG_NL_TRANS,
	[LANG_FR_NAME]: LANG_FR_TRANS,
};*/
const dictionary = { 'en': LANG_EN_TRANS, 'nl': LANG_NL_TRANS, 'fr': LANG_FR_TRANS };

// providers
export const TranslationProvider = [{	provide: TRANSLATIONS, useValue: dictionary}];
