import {render, expect} from '../helper';
import App from '../../src/components/app';

describe('App', () => {
	let component;
	beforeEach(() => {
		component = render(App);
	});
	it('has children', () => {
		expect(component).to.have.class('app');
	});
});