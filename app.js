import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import articlesRouter from "./routes/articlesRouter.mjs";
import defaultRouter from "./routes/defaultRouter.mjs";

dotenv.config();
const app = express();
const port = 5000 || process.env.PORT;
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout","./layouts/main");

app.use("/", articlesRouter);
app.use("/", defaultRouter);

app.get("*", (req, res) => {
  const data = {
    title: "Not Found",
  };
  res.status(404).render("404", data);
});

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(port, console.log(`listening on port ${port}`));
})
.catch((err)=>{
    console.log(`could not connect to database because of error: ${err}`);
})