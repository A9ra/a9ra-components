import './style.scss';

import Logo from './Logo';

export default function Fallback({ isLoading = false }: { isLoading?: boolean }) {
	return (
		<div className={`Loading-Container ${isLoading ? 'secondary' : ''}`}>
			<Logo width={140} height={140} style={{ color: 'var(--loading-color)' }} />
			<div className="loader">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
