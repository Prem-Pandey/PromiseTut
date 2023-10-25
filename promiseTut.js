function createPost(user, post) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous post creation
      setTimeout(() => {
        const newPost = { user, post };
        resolve(newPost);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime(user) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous activity update
      setTimeout(() => {
        const lastActivityTime = new Date().toString();
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  function deletePost(post) {
    return new Promise((resolve, reject) => {
      // Simulating asynchronous post deletion
      setTimeout(() => {
        resolve(post);
      }, 1000);
    });
  }
  
  // Usage example
  const user = "Prem";
  const postContent = "This is a new post.";
  let allPosts;
  createPost(user, postContent)
    .then((newPost) => {
      console.log("Post Created:", newPost);
  
      // Update user's last activity time
      return updateLastUserActivityTime(user);
    })
    .then((lastActivityTime) => {
      console.log("Last Activity Time Updated:", lastActivityTime);
  
      // Fetch all posts and last activity time
      allPosts = ["Post1", "Post2", "Post3"]; // Replace with your actual posts
  
      console.log("All Posts:", allPosts);
      console.log("Last Activity Time:", lastActivityTime);
  
      // Delete the last post
      const lastPost = allPosts.pop();
      return deletePost(lastPost);
    })
    .then((deletedPost) => {
      console.log("Post Deleted:", deletedPost);
  
      // Log remaining posts
      console.log("Remaining Posts:", allPosts);
    })
    .catch((error) => {
      console.error("Error:", error);
    });