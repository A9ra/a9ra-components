import { Link } from 'react-router-dom';

import useLang from ':common/useLang';
import Logo from '#common/Fallback/Logo';

import dictionary from './dictionary';

export default function Error404() {
	const { language } = useLang();

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex h-full max-w-md flex-col items-center justify-center gap-10 py-4 text-center">
				<Logo className="max-h-48 w-[90vw] max-w-md" />
				<h1 className="text-8xl font-bold">{dictionary[language].title}</h1>
				<h2 className="text-3xl font-bold">{dictionary[language].subTitle}</h2>
				<p>{dictionary[language].description}</p>
				<div className="flex items-center justify-center gap-4">
					<Link to={'/'} className="btn btn-outline">
						<span className="icon-[mdi--home] h-5 w-5" />
						{dictionary[language].button}
					</Link>
				</div>
			</div>
		</div>
	);
}
