import Post from './Post';

test('Properties van de post zijn correct', () => {
  const post = new Post({description: 'Test', user: 1, picture: 'image1', location: 'Nederland'});
  expect(post.description).toBe('Test');
  expect(post.user).toBe(1);
  expect(post.picture).toBe('image1');
  expect(post.location).toBe('Nederland');
});
