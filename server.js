const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
app.set('view engine', 'ejs');

app.get("/posts", (req, res) => {
  res.render('posts');
});


app.get("/posts/submit", (req, res) => {
  res.render ("posts_submit");
});







app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});