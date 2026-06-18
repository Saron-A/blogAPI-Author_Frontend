// dynamically load content after fetching token, user data and posts from the backend

const token = localStorage.getItem("token");

const getAllData = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/dashboardA", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // we get {posts : {title, body, time, isPublished, author}, user : {id, username, email}}
    console.log(res.data);

    const posts = res.data.posts; // array
    const user = res.data.user; // object - email and username

    // start creating element
    createElements(posts, user);
  } catch (err) {
    console.error(err);
  }
};

getAllData();

const createElements = (posts, user) => {
  const headerDiv = document.querySelector("#header");
  const postsDiv = document.querySelector(".posts");
  postsDiv.setAttribute("style", "display: flex; gap: 1rem");

  const h1 = document.createElement("h1");
  h1.textContent = `Welcome back, ${user.username} !`;
  const h2 = document.createElement("h2");
  h2.textContent =
    "Write more blogs, check out your past works and publish them to viewers!";

  headerDiv.append(h1, h2);

  // display user's posts - published and unpublished if any or a message if not -- get users posts by id
  if (posts.length === 0) {
    const h3 = document.createElement("h3");
    h3.textContent = "No posts yet";
    postsDiv.appendChild(h3);
  } else {
    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.setAttribute(
        "style",
        "border : 0.125rem solid black; padding : 1rem; border-radius : 1rem; width: fit-content",
      );

      const titleH = document.createElement("h3");
      titleH.textContent = `${post.title}`;

      const authorH = document.createElement("h4");
      authorH.textContent = `${post.author}`;
      const publishBtn = document.createElement("button");
      const isPublished = document.createElement("p");

      if (post.is_published === false) {
        isPublished.textContent = "Not Published";
        publishBtn.innerHTML = "publish";
      } else {
        isPublished.textContent = "Published";
        publishBtn.innerHTML = "Published";
        publishBtn.disabled = true;
      }

      const timeH = document.createElement("p");
      timeH.innerHTML = `${post.created_at}`; // fix the time it says undefined though the backend send the actual time

      publishBtn.addEventListener("click", async () => {
        // we need to edit the info on the database using the post.id
        const res = await axios.put(
          `http://localhost:5000/api/posts/${post.id}/publish`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        isPublished.textContent = "Published";
        publishBtn.innerHTML = "Published";
        publishBtn.disabled = true;
      });

      postDiv.append(titleH, authorH, isPublished, timeH, publishBtn);
      postsDiv.appendChild(postDiv);
      postDiv.addEventListener("click", () => {
        // open a page dynamically and show the body as well
        console.log(post);
        console.log(post.id);
        window.location.href = `./post.html?postId=${post.id}`;
      });
    });
  }
};
