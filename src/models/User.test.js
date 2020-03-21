import User from "./User";
import Post from "./Post";
import DataStore from "../stores/DataStore";

test("Create a new user", () => {
    const dataStore = new DataStore();
    const user = new User({ name: "testuser", store: dataStore });
    expect(user.name).toBe("testuser");
    expect(user.avatar).not.toBe("");
});

test("Can't create a user without a store", () => {
    expect(() => new User({ name: "testuser" })).toThrow();
});

test("DataStore must have a reference to a created user", () => {
    const dataStore = new DataStore();
    expect(dataStore.users.length).toBe(0);
    const user = new User({ name: "testuser", store: dataStore });
    expect(dataStore.users.length).toBe(1);
    expect(dataStore.users[0]).toStrictEqual(user);
});


test("Link a post to a user", () => {
    const user = new User({ name: "testuser", store: new DataStore() });
    const post = new Post({
        id: '1',
        user: 'user',
        description: 'Test',
        picture: 'image1',
        location: 'Country',
        tags: ['tag1', 'tag2'],
        time: 'time',
        store: new DataStore() });
    user.linkPost(post);
    expect(user.posts).toContain(post);
});