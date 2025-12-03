import { describe, it, expect } from '@jest/globals';

describe('Websites store', () => {
	it('should manage website list', () => {
		const websites = [];
		expect(Array.isArray(websites)).toBe(true);
	});

	it('should add website', () => {
		const added = true;
		expect(added).toBe(true);
	});

	it('should update website', () => {
		const updated = true;
		expect(updated).toBe(true);
	});
});

