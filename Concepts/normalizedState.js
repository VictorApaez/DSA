const normalizedState = {
  users: {
    byId: {
      1: { id: "1", name: "Alice", email: "alice@example.com" },
      2: { id: "2", name: "Bob", email: "bob@example.com" },
      3: { id: "3", name: "Charlie", email: "charlie@example.com" },
    },
    allIds: ["1", "2", "3"],
  },

  posts: {
    byId: {
      1: {
        id: "1",
        title: "First post",
        content: "This is my first post.",
        userId: "1",
      },
      2: {
        id: "2",
        title: "Second post",
        content: "This is my second post.",
        userId: "2",
      },
      3: {
        id: "3",
        title: "Third post",
        content: "This is my third post.",
        userId: "1",
      },
    },
    allIds: ["1", "2", "3"],
  },

  comments: {
    byId: {
      1: { id: "1", text: "Great post!", postId: "1" },
      2: { id: "2", text: "I really enjoyed reading this.", postId: "1" },
      3: { id: "3", text: "Nice work!", postId: "2" },
    },
    allIds: ["1", "2", "3"],
  },
};

const userId = "1";
const userPosts = [];
for (const postId of posts.allIds) {
  const post = posts.byId[postId];
  if (post.userId === userId) {
    userPosts.push(post);
  }
}
