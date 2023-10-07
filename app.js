const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res)=>{
  res.render("index");
})

app.post("/contact", (req,res)=>{
  const {name,email,message} = req.body;

  res.redirect("/");
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
