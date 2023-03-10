// APPROACHES FOR SYNCHING UI AND SERVER

// 1. Optimistic Updates
// meaning we change the UI before getting a response from the server. This allows the user to see changes in real-time instead of waiting for a response from the server (AKA optimistic updates).

// CONS: If the update FAILS on the server, for example due to network issues or validation errors, the UI may become out of sync with the server state. This can lead to a poor user experience, confusion, and errors.

// To mitigate these issues, it's important to handle errors gracefully and provide appropriate feedback to the user. In some cases, it may also be necessary to roll back optimistic updates if the server request fails.

// 2. Pessimistic updates, where the UI waits for confirmation from the server before updating. This ensures that the UI is in sync with the server, but will result in slower response times.

// 3. Websockets / long-polling

const initialState = {
  users: {
    byId: {},
    allIds: [],
  },
  posts: {
    byId: {},
    allIds: [],
  },
  comments: {
    byId: {},
    allIds: [],
  },
};

const normalizedState = {
  users: {
    byId: {
      "8Cv1n": {
        id: "8Cv1n",
        name: "Alice",
        email: "alice@example.com",
        posts: { allIds: ["2Wn4m", "9Lm6r"] },
        comments: { allIds: ["6Gh9n"] },
      },
      "7Zx9k": {
        id: "7Zx9k",
        name: "Bob",
        email: "bob@example.com",
        posts: { allIds: ["1Kj5t"] },
        comments: { allIds: ["4Pd2t"] },
      },
      "5Fj7t": {
        id: "5Fj7t",
        name: "Charlie",
        email: "charlie@example.com",
        posts: { allIds: [] },
        comments: { allIds: ["3Rf6k"] },
      },
    },
    allIds: ["8Cv1n", "7Zx9k", "5Fj7t"],
  },

  posts: {
    byId: {
      "2Wn4m": {
        id: "2Wn4m",
        title: "First post",
        content: "This is my first post.",
        userId: "8Cv1n",
        likes: { allIds: [] },
        comments: { allIds: [] },
      },
      "1Kj5t": {
        id: "1Kj5t",
        title: "Second post",
        content: "This is my second post.",
        userId: "7Zx9k",
        likes: { allIds: [] },
      },
      "9Lm6r": {
        id: "9Lm6r",
        title: "Third post",
        content: "This is my third post.",
        userId: "8Cv1n",
        likes: { allIds: [] },
      },
    },
    allIds: ["2Wn4m", "1Kj5t", "9Lm6r"],
  },

  comments: {
    byId: {
      "4Pd2t": {
        id: "4Pd2t",
        text: "Great post!",
        postId: "2Wn4m",
        userId: "7Zx9k",
        likes: { allIds: [] },
      },
      "3Rf6k": {
        id: "3Rf6k",
        text: "I really enjoyed reading this.",
        postId: "2Wn4m",
        userId: "5Fj7t",
        likes: { allIds: [] },
      },
      "6Gh9n": {
        id: "6Gh9n",
        text: "Nice work!",
        postId: "1Kj5t",
        userId: "8Cv1n",
        likes: { allIds: [] },
      },
    },
    allIds: ["4Pd2t", "3Rf6k", "6Gh9n"],
  },
};

// POSTS CRUD ===============================
function newPost() {
  // response from the server
  const res = {
    id: "4sjo7",
    title: "THIS IS THE POST I JUST ADDED",
    content: "This is my first post.",
    userId: "8Cv1n",
    likes: { allIds: [] },
  };

  // Update the users object to include the new post ID
  normalizedState.users.byId[res.userId].posts.allIds.push(res.id);

  // Update the posts object to include the new post
  normalizedState.posts.byId[res.id] = res;
  normalizedState.posts.allIds.push(res.id);
}

function editPostById() {
  // These would be parameters
  const postId = "2Wn4m";
  const changes = {
    title: "I have changed the title",
    content: "I have changed the content",
  };

  // Prevent changes to the post id, userId and likes
  const { id, userId, likes, ...filteredChanges } = changes;

  const updatesPost = {
    ...normalizedState.posts.byId[postId],
    ...filteredChanges,
  };

  normalizedState.posts.byId[postId] = updatesPost;
}

function deletePost(postId) {
  const { users, posts, comments } = normalizedState;

  const post = posts.byId[postId];
  const user = users.byId[post.userId];

  // remove the post from the byId object and allIds array of the posts property
  delete posts.byId[postId];
  posts.allIds = posts.allIds.filter((id) => id !== postId);

  // remove the post ID from the allIds array of the posts property of the user who created the post
  const userPostsAllIds = user.posts.allIds.filter((id) => id !== postId);
  user.posts.allIds = userPostsAllIds;

  // remove all comments associated with the post from the byId object of the comments property
  if (post.comments && post.comments.allIds) {
    post.comments.allIds.forEach(
      (commentId) => delete comments.byId[commentId]
    );
  }

  // remove all comment IDs associated with the post from the allIds array of the comments property
  const commentsAllIds = comments.allIds.filter(
    (id) => !post.comments?.allIds?.includes(id)
  );
  comments.allIds = commentsAllIds;

  // remove the comment ID from the allIds array of the comments property of the user who created the comment
  Object.values(users.byId).forEach((user) => {
    const userCommentsAllIds = user.comments.allIds.filter(
      (id) => !post.comments?.allIds?.includes(id)
    );
    user.comments.allIds = userCommentsAllIds;
  });
}

function getPosts() {
  // returns an array of all posts
  return normalizedState.posts.allIds.map(
    (id) => normalizedState.posts.byId[id]
  );
}

function getPostById() {
  // This would be a param instead of hardcoding the id
  const id = "1Kj5t";
  return normalizedState.posts.byId[id];
}

function getPostsByUserId() {
  // This would be a param instead of hardcoding the id
  const userId = "8Cv1n";

  // return an array of all post ids made by the user
  const allPostIds = normalizedState.users.byId[userId].posts.allIds;

  // return an array of all posts made by the user
  return allPostIds.map((id) => normalizedState.posts.byId[id]);
}

// newPost();
// deletePost("1Kj5t");
// console.log(getPosts());
// console.log(JSON.stringify(normalizedState, null, 2));
// COMMENTS CRUD ===============================

function addComment() {}
function editComment() {}
function deleteComment() {}

function getComments() {}
function getCommentById() {}
function getCommentsByPostId() {}
function getCommentsByUserId() {}

// USERS AUTH ===============================

function setUser() {}
function deleteUser() {}
function updateUser() {}
