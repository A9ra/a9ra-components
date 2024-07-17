import { Link } from 'react-router-dom';

import useLang, { AppLanguages } from ':common/useLang';

export default function Copyright() {
	const { language } = useLang();
	return (
		<footer className="flex w-full items-center justify-between px-8 py-6">
			<p dir="ltr" className="mt-auto text-center text-xs">
				Made for <strong className="font-bold">Students</strong> with Love ❤️ by{' '}
				<a target="_blank" className="text-primary-800 font-bold" href="https://www.a9ra.net/">
					© A9ra
				</a>{' '}
				{new Date().getFullYear()}.
			</p>
			<Link
				to="/languages"
				className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
			>
				{AppLanguages[language]}
			</Link>
		</footer>
	);
}
