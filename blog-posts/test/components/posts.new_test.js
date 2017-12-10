import {render, expect} from '../helper';
import {PostsNew} from '../../src/components/posts.new';
import {createPost} from '../../src/actions/index';

describe('PostsNew', () => {
  let component;
	beforeEach(() => {
		const field = {
			touched: null,
			error: null,
			value: ''
		};
		const opts = {
			showForm: () => {},
	    login: () => {},
	    fields: {
	      title: field,
	      categories: field,
	      content: field,
	    },
	    submitting: false,
	    handleSubmit: () => {},
	    invalid: false,
	    flashMessage: () => {},
		}
		component = render(PostsNew, {createPost, ...opts});
	});
	it('has a couple of text inputs (title and categories)', () => {
		expect(component.find('input[type="text"]').length).to.equal(2);
	});
	it('has a single textarea (content)', () => {
		expect(component.find('textarea').length).to.equal(1);
	});
});
