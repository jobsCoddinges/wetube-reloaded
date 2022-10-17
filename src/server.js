import express from "express";
const port = 3000;
const app = express();
// express 관련 코드는 express 가 만들어진 이후부터 작성 그니깐 여기서부터
app.get("/", (req, res) => {
  return res.send("Here homepage");
});

app.get("/login", (req, res) => {
  res.send("This is Login page");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}🗼`);
});
