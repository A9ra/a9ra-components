import { createSlice } from '@reduxjs/toolkit';

import { CHANGE_DIRECTION, DEFAULT_LANGUAGE } from '&client/web';

function setLanguage(lang: LanguagesI): void {
	localStorage.setItem('Language', lang);
	document.documentElement.setAttribute('lang', lang);
	if (CHANGE_DIRECTION) {
		if (lang === 'AR') {
			document.dir = 'rtl';
		} else {
			document.dir = 'ltr';
		}
	}
}

export const languages: LanguagesI[] = ['EN', 'FR', 'AR'];
const storedLanguage = (localStorage.getItem('Language') as LanguagesI) || DEFAULT_LANGUAGE;
const initial: LanguagesI = languages.includes(storedLanguage) ? (storedLanguage as LanguagesI) : DEFAULT_LANGUAGE;
setLanguage(initial);

const Language = createSlice({
	name: 'Language',
	initialState: initial,
	reducers: {
		setLang: (state, action) => {
			state = action.payload ?? DEFAULT_LANGUAGE;
			setLanguage(state);
			return state;
		},
	},
});

export const { setLang } = Language.actions;

export default Language.reducer;
