import { ReactNode, useCallback, useEffect, useState } from 'react';

import defaultDictionaries from '@client/dictionaries';
import { DEFAULT_LANGUAGE } from '&client/web';

import useLang from ':common/useLang';
import { DictionariesContext } from '@common/contexts/DictionariesContext';
import Fallback from '#common/Fallback';
import Error500 from '#common/pages/Errors/Error500';

export default function DictionariesProvider({ children }: { children: ReactNode }) {
	const { language } = useLang();
	const [dictionaries, setDictionaries] = useState<Optional<DictionariesI>>(defaultDictionaries);
	const [dictionariesToBeLoaded, setDictionariesToBeLoaded] = useState<DictionariesKeys[]>([]);
	const [isLoadingDictionary, setIsLoadingDictionary] = useState<boolean>(false);
	const [errorInLoading, setErrorInLoading] = useState<boolean>(false);
	const addDictionary = useCallback(
		(dictionary: DictionariesKeys) => {
			if (dictionariesToBeLoaded.includes(dictionary)) return;
			else setDictionariesToBeLoaded((dictionariesToBeLoaded) => [...dictionariesToBeLoaded, dictionary]);
		},
		[dictionariesToBeLoaded]
	);
	useEffect(() => {
		const notLoaded = dictionariesToBeLoaded.filter((key) => {
			const dictionary = dictionaries[key];
			return !(dictionary && dictionary[language]);
		});
		if (notLoaded.length === 0) return;
		setIsLoadingDictionary(true);
		Promise.all(
			notLoaded.map((key) =>
				import(`@client/dictionaries/${language}/${key}`)
					.catch(() => import(`@client/dictionaries/${DEFAULT_LANGUAGE}/${key}`))
					.then((module) => module.default)
			)
		)
			.then((modules) => {
				setDictionaries((dictionaries) => ({
					...dictionaries,
					...Object.fromEntries(
						modules.map((module, i) => [
							notLoaded[i],
							{
								...dictionaries[notLoaded[i]],
								[language]: module,
							},
						])
					),
				}));
			})
			.catch(() => setErrorInLoading(true))
			.finally(() => setIsLoadingDictionary(false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dictionariesToBeLoaded, language]);
	if (isLoadingDictionary) return <Fallback />;
	if (errorInLoading) return <Error500 message="Error in loading dictionaries" />;
	return (
		<DictionariesContext.Provider value={{ dictionaries, addDictionary }}>{children}</DictionariesContext.Provider>
	);
}
