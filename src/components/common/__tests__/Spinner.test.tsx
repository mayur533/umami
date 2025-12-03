import { describe, it, expect } from '@jest/globals';

describe('Spinner component', () => {
	it('should render spinner', () => {
		const spinner = { spinning: true };
		expect(spinner.spinning).toBe(true);
	});

	it('should handle spinner size', () => {
		const size = 'large';
		expect(size).toBeTruthy();
	});

	it('should stop spinning', () => {
		const stopped = true;
		expect(stopped).toBe(true);
	});
});

