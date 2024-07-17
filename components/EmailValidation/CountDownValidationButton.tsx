import React, { useEffect } from 'react';

import Loading from '#client/Loading';

export default function CountDownValidationButton({
	sentAt,
	onClick,
	isLoading,
}: {
	sentAt: Date;
	onClick: () => void;
	isLoading: boolean;
}) {
	const [countDown, setCountDown] = React.useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			const newCountDown = Math.max(0, 60 - Math.round((new Date().getTime() - sentAt.getTime()) / 1000));
			// clear interval if countDown is 0
			if (newCountDown === 0) clearInterval(interval);
			setCountDown(newCountDown);
		}, 1000);
		return () => clearInterval(interval);
	}, [sentAt]);

	return (
		<button
			className="focus:ring-primary-300 dark:focus:ring-primary-800 group relative inline-flex flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-success to-primary p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 group-hover:from-success group-hover:to-primary disabled:group-hover:from-gray-600 disabled:group-hover:to-gray-600 dark:text-white"
			disabled={countDown !== 0}
			onClick={onClick}
		>
			<span className="relative flex items-center gap-2 rounded-md bg-white px-5 py-1 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
				{isLoading ? (
					<>
						<Loading className="w-4" />
						Sending...
					</>
				) : countDown === 0 ? (
					'Resend'
				) : (
					`Resend in ${countDown} seconds`
				)}
			</span>
		</button>
	);
}
