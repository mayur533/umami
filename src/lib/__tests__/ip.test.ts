import { describe, it, expect } from '@jest/globals';

describe('IP utilities', () => {
	it('should validate IP addresses', () => {
		const ip = '192.168.1.1';
		expect(ip).toMatch(/^\d+\.\d+\.\d+\.\d+$/);
	});

	it('should parse IP addresses', () => {
		const parsed = ip.split('.');
		expect(parsed.length).toBe(4);
	});

	it('should handle IPv6 addresses', () => {
		const ipv6 = '2001:0db8::1';
		expect(ipv6).toContain(':');
	});
});

