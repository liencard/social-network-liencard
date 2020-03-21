import Comment from './Comment'; 

test("Create a new comment", () => {
    const comment = new Comment({ 
        user: "testuser",
        comment: 'testcomment',
        time: 'test'
    });
    expect(comment.user).toBe("testuser");
    expect(comment.comment).toBe("testcomment");
    expect(comment.time).toBe("test");
});

test("comment must have a user", () => {
    expect(() => new Comment({ user: "testuser" })).toThrow();
});

test("Comment must have a description", () => {
    expect(() => new Comment({ user: {} })).toThrow();
    expect(() => new Comment({ comment: "", user: {} })).toThrow();
});