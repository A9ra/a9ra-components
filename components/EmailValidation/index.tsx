import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { resendValidation } from '$client/endpoints/auth';

import useUser from ':common/useUser';

import CountDownValidationButton from './CountDownValidationButton';
export default function EmailValidation({ canNavigate = false }: { canNavigate?: boolean }) {
	const [sentAt, setSentAt] = React.useState(new Date(1));
	const { user } = useUser();
	const navigate = useNavigate();
	const { mutate, isPending: isLoading } = useMutation({
		mutationFn: resendValidation,
		onSuccess: (res) => {
			toast.success('Email sent');
			setSentAt(new Date());
			if (canNavigate) navigate('/validate/email?sessionId=' + res.data);
		},
		onError: () => {
			toast.error('Failed to send email');
		},
		mutationKey: ['resendValidation'],
	});

	if (!user || user.emailValidated) return null;
	return (
		<div className="flex w-full items-center justify-center gap-8 border-b px-4 py-2 shadow">
			<p className="text-sm">
				Your have not validated your email yet. If you did not receive the email, please check your spam folder.
			</p>
			<CountDownValidationButton
				sentAt={sentAt}
				onClick={() => {
					mutate({ email: user.email });
				}}
				isLoading={isLoading}
			/>
		</div>
	);
}
