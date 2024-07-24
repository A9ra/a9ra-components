import { useEffect } from 'react';
import ReactGA from 'react-ga4';
export default function usePage(pageTitle?: string) {
	useEffect(() => {
		ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
	}, []);
	useEffect(() => {
		if (pageTitle) {
			document.title = 'A9ra - ' + pageTitle;
		}
		return () => {
			document.title = 'A9ra';
		};
	}, [pageTitle]);
}
