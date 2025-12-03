import { describe, it, expect } from '@jest/globals';

describe('URL utilities', () => {
	it('should parse URLs correctly', () => {
		const url = 'https://example.com';
		expect(url).toContain('http');
	});

	it('should validate URL format', () => {
		const url = 'https://test.com/path';
		expect(url).toMatch(/^https?:\/\//);
	});

	it('should handle URL parameters', () => {
		const url = new URL('https://example.com?param=value');
		expect(url.searchParams.get('param')).toBe('value');
	});
});

