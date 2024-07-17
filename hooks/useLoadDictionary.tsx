import { useEffect } from 'react';

import useLang from ':common/useLang';

import useDictionary from './useDictionary';

export default function useLoadDictionary<T extends DictionariesKeys>(dictionaryKey: T) {
	const { language, setLanguage } = useLang();
	const { addDictionary, dictionaries } = useDictionary();
	useEffect(() => {
		addDictionary(dictionaryKey);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dictionaryKey]);
	const dictionary = dictionaries[dictionaryKey];
	return {
		content: dictionary ? (dictionary[language] as DictionariesI[T][LanguagesI]) : undefined,
		language,
		setLanguage,
	};
}
