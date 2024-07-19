const colorList = [
	'#FF6633',
	'#FFB399',
	'#FF33FF',
	'#919116',
	'#00B3E6',
	'#E6B333',
	'#3366E6',
	'#999966',
	'#2e8c2e',
	'#B34D4D',
	'#80B300',
	'#809900',
	'#E6B3B3',
	'#6680B3',
	'#66991A',
];

export function generateRandomColor(idx: number) {
	return colorList[idx % colorList.length];
}
