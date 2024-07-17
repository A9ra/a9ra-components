import { useEffect } from 'react';
import toast from 'react-hot-toast';

import { getError } from '@client/tools/error';

import useLocalStorage from './useLocalStorage';

async function getProvinces() {
	return (await fetch('/Data/provinces.json', {
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json())) as ProvinceI[];
}
function useProvinces() {
	const [provinces, setProvinces] = useLocalStorage<ProvinceI[]>('provinces', []);
	useEffect(() => {
		if (provinces.length === 0) {
			getProvinces()
				.then((provinces) => {
					setProvinces(provinces);
				})
				.catch((e) => {
					toast.error(getError(e, 'Failed to get provinces'));
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [provinces]);
	return provinces;
}

export default useProvinces;
