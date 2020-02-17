import Store from './Store';
import Post from './Post';

test('Bij het aanmaken van je store is je posts dan gelijk aan 0', () => {
  const store = new Store();
  expect(store.posts.length).toBe(0);
});


test('Seed store met een post', () => {
  const store = new Store();
  store.seed([new Post({
    description: 'Test',
    user: 1,
    picture: 'image1',
    location: 'Kortrijk'
  })]);
  expect(store.posts.length).toBe(1);
});


test('Aantal posts is 1 na addPost van de store', () => {
  const store = new Store();
  store.addPost({
    description: 'Hallooo',
    user: 1,
    picture: 'image1',
    location: 'strand'});
  expect(store.posts.length).toBe(1);
});
