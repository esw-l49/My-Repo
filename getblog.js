const content = document.querySelector(".blog-content");
const prev = document.querySelector("#prev"); // previous page
const next = document.querySelector("#next"); // next page
const postsPage = document.querySelector(".page"); // total pages
const postTotal = 100;
let id = 1;
postsPage.innerHTML = id;
window.onload = () => getPost(id);

prev.addEventListener("click", () => {
  id = id > 1 ? id - 1 : postTotal;
  postsPage.innerHTML = id;
  getPost(id);
});
next.addEventListener("click", () => {
  id = id < 100 ? id + 1 : 1;
  postsPage.innerHTML = id;
  getPost(id);
});

function getPost(id) {
  fetch("http://jsonplaceholder.typicode.com/posts/" + id, { method: "get" })
    .then((res) => res.json())
    .then((res) => {
      const post = res;
      const img = document.createElement("img");
      const title = document.createElement("h3");
      const userID = document.createElement("h5");
      const bodyContent = document.createElement("p");
      const postContent = document.createElement("div");
      const postContainer = document.createElement("div");
      postContainer.classList.add("post-container");
      img.src =
        "https://uploadbeta.com/api/pictures/random/?key=BingEverydayWallpaperPicture";
      img.alt = "no picture";
      img.classList.add("img-thumbnail");
      title.innerHTML = post.title;
      bodyContent.innerHTML = post.body;
      userID.innerHTML = "<a>User ID：" + post.userId + "</a>";

      // 渲染之前先清空
      content.innerHTML = "";
      postContent.appendChild(title);
      postContent.appendChild(userID);
      postContent.appendChild(bodyContent);
      postContainer.appendChild(img);
      postContainer.appendChild(postContent);
      content.appendChild(postContainer);
    })
    .catch((error) => console.error(error));
}
function $(param) {
  // #param   class: .param
  return document.querySelector("." + param)
    ? document.querySelector("." + param)
    : document.querySelector("#" + param);
}

const obj = new Object({ name: "Jhon", age: 23, city: "Beijing" });
for (let item in obj) {
  console.log(obj[item]);
}

function ObjDefin(prop) {
  return { prop };
}
