import { createContext } from 'react';

export const DictionariesContext = createContext<{
	addDictionary: (dictionary: DictionariesKeys) => void;
	dictionaries: Optional<DictionariesI>;
} | null>(null);
