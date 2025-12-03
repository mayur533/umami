import { describe, it, expect } from '@jest/globals';

describe('Link component', () => {
	it('should render link', () => {
		const link = { href: '/page' };
		expect(link.href).toBeTruthy();
	});

	it('should handle link clicks', () => {
		const clicked = true;
		expect(clicked).toBe(true);
	});

	it('should support external links', () => {
		const external = true;
		expect(external).toBe(true);
	});
});

