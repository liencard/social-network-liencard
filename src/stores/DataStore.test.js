import DataStore from "./DataStore";
import Post from "../models/Post";
import Comment from "../models/Comment";
import User from "../models/User";


test("Create a new DataStore", () => {
  const store = new DataStore();
  expect(store.posts).toBeInstanceOf(Array);
  expect(store.posts.length).toBe(0);
});

test('Seed store with post', () => {
  const store = new DataStore();
  store.seed([new Post({
    id: '1',
    user: 'user',
    description: 'Test',
    picture: 'image1',
    location: 'Country',
    tags: ['tag1', 'tag2'],
    time: 'time'
  })]);
  expect(store.posts.length).toBe(1);
});

test("Get a post by the id", () => {
  const store = new DataStore();
  const post = new Post({ 
    user: 'user',
    description: 'Test',
    picture: 'image1',
    location: 'Country',
    tags: ['tag1', 'tag2'],
    time: 'time'
   });
  const id = post.id;
  expect(store.getPostById(id)).toBe(post.id);
});
