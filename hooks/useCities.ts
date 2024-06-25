import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { getError } from '@client/tools/error';

import useLocalStorage from './useLocalStorage';

async function getCities(provinceId: number) {
	const res = await fetch(`/Data/Cities/${provinceId}.json`);
	const cities = (await res.json()) as ProvinceCityI[];
	return cities;
}
function useCities(provinceId: number) {
	const [cities, setCities] = useLocalStorage<ProvinceCityI[]>('cities-' + provinceId, []);
	useEffect(() => {
		if (cities.length === 0) {
			getCities(provinceId)
				.then((cities) => {
					setCities(cities);
				})
				.catch((e) => {
					toast.error(getError(e, 'Failed to get cities'));
				});
		}
	}, [cities]);
	return cities;
}

export default useCities;
