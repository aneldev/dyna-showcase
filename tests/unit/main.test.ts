import "jest";
declare let window: any;
if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

import {DynaShowcase} from './../..';

// help: https://facebook.github.io/jest/docs/expect.html

describe('Button simple etst', () => {
	it('should load the button', () => {
		expect(DynaShowcase).not.toBe(undefined);
	});
});
