import {render, expect} from '../helper';
import {PostsIndex} from '../../src/components/posts.index';
import {FETCH_POSTS, fetchPosts} from '../../src/actions/index';

describe('PostsIndex', () => {
  let component, posts;
	beforeEach(() => {
		posts = [
			{
				_id: {'$id': '1'},
				title: 'sampel post 1',
				categories: 'ux,ba',
				content: 'sample content 1'
			},
			{
				_id: {'$id': '2'},
				title: 'sampel post 2',
				categories: 'qa',
				content: 'sample content 2'
			}
		];
		component = render(PostsIndex, {fetchPosts, posts: posts});
	});
	it('has a list of posts', () => {
		expect(component.find('li').length).to.equal(2);
	});
	it('has a button for adding a new post', () => {
		expect(component.find('a')).to.contain('New Post');
	});
	describe('fetchPosts', () => {
		it('has the correct type', () => {
			const action = fetchPosts();
			expect(action.type).to.equal(FETCH_POSTS);
		});
		it('has the correct payload', () => {
			const action = fetchPosts();
			expect(action.payload).to.be.instanceOf(Object);
		});
	});
});