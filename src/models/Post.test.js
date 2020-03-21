import Post from './Post';

test('Create a post', () => {
  const post = new Post({
    id: '1',
    user: 'user',
    description: 'Test',
    picture: 'image1',
    location: 'Country',
    tags: ['tag1', 'tag2'],
    time: 'time'});
  expect(post.description).toBe('Test');
  expect(post.user).toBe('user');
  expect(post.id).toBe('1');
  expect(post.picture).toBe('image1');
  expect(post.location).toBe('Country');
  expect(post.time).toBe('time');
});

test("post must have a user", () => {
  expect(() => new Post({ description: "test", user: {} })).toThrow();
});

test("post must have a picture", () => {
  expect(() => new Post({ description: "test", picture: {} })).toThrow();
});

test("post must have a location", () => {
  expect(() => new Post({ description: "test", location: {} })).toThrow();
});

test("Post must have a description", () => {
  expect(() => new Post({ user: {}, picture: {}, location: {} })).toThrow();
  expect(() => new Post({ description: "", user: {}, picture: {}, location: {} })).toThrow();
});

test('Check post liked', () => {
  const post = new Post({
    id: '1',
    user: 'user',
    description: 'Test',
    picture: 'image1',
    location: 'Country',
    tags: ['tag1', 'tag2'],
    time: 'time'
  });
  post.addLike(true);
  expect(post.like).toBe(true);
});
