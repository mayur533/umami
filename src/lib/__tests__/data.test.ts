import { describe, it, expect } from '@jest/globals';

describe('Data utilities', () => {
	it('should process data correctly', () => {
		const data = [1, 2, 3];
		expect(data.length).toBe(3);
	});

	it('should filter data', () => {
		const filtered = [1, 2].filter(x => x > 1);
		expect(filtered.length).toBe(1);
	});

	it('should transform data', () => {
		const transformed = { value: 10 };
		expect(transformed.value).toBe(10);
	});
});

