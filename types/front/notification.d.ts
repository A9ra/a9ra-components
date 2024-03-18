declare type NotificationReferenceType = 'Product' | 'Order' | 'Issue' | 'Notification' | 'Ad';

declare interface NotificationI {
	_id: string;
	title: string;
	body: string;
	type: string;
	user?: string;
	imageUrl?: string;
	createdAt: Date;
	reference: { id?: string; type: NotificationReferenceType };
}
