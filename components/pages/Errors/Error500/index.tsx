import { Link, useSearchParams } from 'react-router-dom';

import useLang from ':common/useLang';
import Logo from '#common/Fallback/Logo';

import dictionary from './dictionary';

export default function Error500({ message, showLogo = true }: { message?: string; showLogo?: boolean }) {
	const [searchParams] = useSearchParams();
	const [from, error] = [searchParams.get('from'), searchParams.get('error')];
	const { language } = useLang();

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex h-full max-w-md flex-col items-center justify-center gap-10 py-4 text-center">
				{showLogo && <Logo className="max-h-48 w-[90vw] max-w-md" />}
				<h1 className="text-8xl font-bold">{dictionary[language].title}</h1>
				<h2 className="text-3xl font-bold">{dictionary[language].subTitle}</h2>
				<p>{error ? error : message ? message : dictionary[language].description}</p>
				<div className="flex items-center justify-center gap-4">
					<Link to={'/'} className="btn btn-outline">
						<span className="icon-[mdi--home] h-5 w-5" />
						{dictionary[language].button}
					</Link>
					{from && from !== '/500' && (
						<Link to={from} className="btn btn-accent">
							<span className="icon-[mdi--arrow-u-left-bottom] h-5 w-5" />
							{dictionary[language].tryAgain}
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
