import {render, expect} from '../helper';
import {PostsView} from '../../src/components/posts.view';
import {FETCH_POST, DELETE_POST, fetchPost, deletePost} from '../../src/actions/index';

describe('PostsView', () => {
  let component;
	beforeEach(() => {
		component = render(PostsView, {fetchPost, deletePost, post: {
			title: 'sampel post 1',
			categories: 'ux,ba',
			content: 'sample content 1'
		}, params: {
			id: '1'
		}});
	});
	it('has a back button', () => {
		expect(component.find('a')).to.contain('Back');
	});
	describe('fetchPost', () => {
		it('has the correct type', () => {
			const action = fetchPost(1);
			expect(action.type).to.equal(FETCH_POST);
		});
		it('has the correct payload', () => {
			const action = fetchPost(1);
			expect(action.payload).to.be.instanceOf(Object);
		});
	});
	it('has a button for deleting post', () => {
		expect(component.find('button')).to.contain('Delete');
	});
	describe('deletePost', () => {
		it('has the correct type', () => {
			const action = deletePost(1);
			expect(action.type).to.equal(DELETE_POST);
		});
		it('has the correct payload', () => {
			const action = deletePost(1);
			expect(action.payload).to.be.instanceOf(Object);
		});
	});
});