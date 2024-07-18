import { useAppDispatch, useAppSelector } from ':common/redux';
import { languages, setLang } from '@common/contexts/language';
export const AppLanguages: Record<LanguagesI, string> = {
	EN: 'English (🇺🇸)',
	FR: 'Français (🇫🇷)',
	AR: 'العربية (🇩🇿)',
};
export default function useLang() {
	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.language).language;
	const set = (lang: LanguagesI) => {
		if (languages.includes(lang)) dispatch(setLang(lang));
	};
	return { setLanguage: set, language };
}
