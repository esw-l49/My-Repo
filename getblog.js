const content = document.querySelector(".blog-content");

// method:get or post;
const json = {
  name: "jing",
  age: 2,
};
console.log(JSON.stringify(json));

fetch("http://jsonplaceholder.typicode.com/posts", { method: "get" })
  .then((res) => res.json())
  .then((res) => {
    const posts = res;
    for (let post of posts) {
      const title = document.createElement("h3");
      const userID = document.createElement("h5");
      const bodyCOntent = document.createElement("p");
      title.innerHTML = post.title;
      bodyCOntent.innerHTML = post.body;
      userID.innerHTML = "<a>用户ID：" + post.userId + "</a>";
      content.appendChild(title);
      content.appendChild(userID);
      content.appendChild(bodyCOntent);
    }
  })
  .catch((error) => console.error(error));
