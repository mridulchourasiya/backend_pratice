const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "mridulchourasiya",
  id: 99160348,
  node_id: "U_kgDOBekRHA",
  avatar_url: "https://avatars.githubusercontent.com/u/99160348?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/mridulchourasiya",
  html_url: "https://github.com/mridulchourasiya",
  followers_url: "https://api.github.com/users/mridulchourasiya/followers",
  following_url:
    "https://api.github.com/users/mridulchourasiya/following{/other_user}",
  gists_url: "https://api.github.com/users/mridulchourasiya/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/mridulchourasiya/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/mridulchourasiya/subscriptions",
  organizations_url: "https://api.github.com/users/mridulchourasiya/orgs",
  repos_url: "https://api.github.com/users/mridulchourasiya/repos",
  events_url: "https://api.github.com/users/mridulchourasiya/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/mridulchourasiya/received_events",
  type: "User",
  site_admin: false,
  name: "Mridul chourasia ",
  company: null,
  blog: "https://mridul-main-porfolio.vercel.app/",
  location: "jabalpur, MP",
  email: null,
  hireable: null,
  bio: "Full Stack Devloper and DevOps \r\nJS and JAVA Entusiast",
  twitter_username: null,
  public_repos: 23,
  public_gists: 0,
  followers: 3,
  following: 9,
  created_at: "2022-02-07T04:40:31Z",
  updated_at: "2024-02-29T07:11:14Z",
};

app.get("/", (req, res) => {
  res.send("Listening");
});

app.get("/Name", (req, res) => {
  res.send("Mridul");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login in this account form a page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Main function</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example server listenig on port ${port}`);
});
