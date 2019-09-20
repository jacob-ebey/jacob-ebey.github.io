export function useScroll() {
	const id = Math.random().toString(36).substr(2, 9);
	const dataAttribute = `data-scroll-disabled-${id}`;

	return {
		disable: () => {
			if (typeof document === 'undefined') {
				return;
			}

			const hasNoscroll = document.body.classList.contains('noscroll');

			if (document.body.getAttribute(dataAttribute) === 'true' && hasNoscroll) {
				return;
			}

			if (!hasNoscroll) {
				document.body.classList.add('noscroll');
			}

			document.body.setAttribute(dataAttribute, 'true');
		},
		enable: () => {
			if (typeof document === 'undefined') {
				return;
			}

			document.body.setAttribute(dataAttribute, 'false');

			for (const attribute of document.body.attributes) {
				if (attribute.name.startsWith('data-scroll-disabled-') && attribute.value === 'true') {
					return;
				}
			}

			document.body.classList.remove('noscroll');
		}
	};
}
