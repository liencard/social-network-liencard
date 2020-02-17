import Post from './Post';

test('Check properties van de post', () => {
  const post = new Post({
    description: 'Test',
    user: 1,
    picture: 'image1',
    location: 'Nederland'});
  expect(post.description).toBe('Test');
  expect(post.user).toBe(1);
  expect(post.picture).toBe('image1');
  expect(post.location).toBe('Nederland');
});

test('Check als post geliked is', () => {
  const post = new Post({
    description: 'Test',
    user: 1,
    picture: 'image1',
    location: 'Nederland'
  });
  post.addLike(true);
  expect(post.like).toBe(true);
});

test('Check als comment wordt toegevoegd', () => {
  const post = new Post({
    description: 'Test',
    user: 1,
    picture: 'image1',
    location: 'Nederland'
  });
  post.addComment(1, 'Leuke foto');
  expect(post.comments.length).toBe(1);
  expect(post.comments[0].user).toBe(1);
  expect(post.comments[0].comment).toBe('Leuke foto');

});
