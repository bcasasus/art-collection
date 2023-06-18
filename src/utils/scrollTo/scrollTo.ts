export const scrollTo = (element: HTMLElement) =>
	window.scrollTo({
		top: element?.offsetTop,
		left: 0,
		behavior: 'smooth',
	});
