import { describe, it, expect } from '@jest/globals';
import { getDateRange, parseDateRange } from '../date';

describe('Date utilities', () => {
	it('should parse date ranges correctly', () => {
		const range = parseDateRange('7d');
		expect(range).toBeDefined();
	});

	it('should get date range for period', () => {
		const range = getDateRange('7d');
		expect(range).toBeDefined();
		expect(range.startDate).toBeDefined();
		expect(range.endDate).toBeDefined();
	});

	it('should handle different date formats', () => {
		const range = getDateRange('30d');
		expect(range.startDate).toBeInstanceOf(Date);
	});
});

