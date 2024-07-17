import React, { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import useUser from ':common/useUser';
import { useResendValidationMutation } from '$client/hooks/auth';

import CountDownValidationButton from './CountDownValidationButton';

export default function EmailValidation() {
	const [sentAt, setSentAt] = React.useState(new Date(1));
	const { user } = useUser();
	const navigate = useNavigate();
	const [RequestValidate, { isLoading }] = useResendValidationMutation();
	const ResendValidation = useCallback(() => {
		// send email
		if (!user || user.emailValidated) return;
		RequestValidate({
			email: user.email,
		})
			.unwrap()
			.then((res) => {
				toast.success('Email sent');
				setSentAt(new Date());
				navigate('/validate/email?sessionId=' + res.data);
			})
			.catch(() => {
				toast.error('Failed to send email');
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);
	if (!user || user.emailValidated) return null;
	return (
		<div className="flex w-full items-center justify-center gap-8 border-b px-4 py-2 shadow">
			<p className="text-sm">
				Your have not validated your email yet. If you did not receive the email, please check your spam folder.
			</p>
			<CountDownValidationButton sentAt={sentAt} onClick={ResendValidation} isLoading={isLoading} />
		</div>
	);
}
