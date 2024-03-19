import './style.scss';

import Logo from './Logo';

export default function Fallback() {
	return (
		<div className="Loading-Container">
			<Logo width={140} height={140} style={{ color: 'white' }} />
			<div className="loader">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
