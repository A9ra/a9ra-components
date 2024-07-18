import { useContext } from 'react';

import { DictionariesContext } from '@common/contexts/DictionariesContext';

export default function useDictionary() {
	const context = useContext(DictionariesContext);
	if (!context) throw new Error('useDictionary must be used within a DictionariesProvider');
	return context;
}
