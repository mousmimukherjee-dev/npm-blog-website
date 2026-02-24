import express from "express";
import path from "path";
import blogPosts from "./data/data.js";
import aboutRouter from "./routes/about.js";
import commentsRouter from "./routes/comments.js";
import contactRouter from "./routes/contact.js";
import loginRouter from "./routes/login.js";
import logoutRouter from "./routes/logout.js";
import postRouter from "./routes/post.js";

const app = express();

const _dirname=path.resolve()

const port = process.env.PORT || 3000;

app.set("view engine" , "ejs");
app.use(express.static(path.join("public")))
app.set("views" , path.join(_dirname,"views") );
app.use(express.urlencoded({extended:true}))

let isAuthenticated = false;
app.use((req,res,next)=>{

  res.locals.isAuthenticated=isAuthenticated;
  next();
})
app.use((req,res,next)=>{

  res.locals.pageType="";
  next()
})


app.get("/",(req,res)=>{


  res.render("pages/home",{blogPosts,
    headTitle:"Blog Home",
    isAuthenticated

  })
})

app.use("/login",loginRouter);
app.use("/contact",contactRouter);
app.use("/about",aboutRouter);
app.use("/logout",logoutRouter);
app.use("/post",postRouter);
app.use("/comments",commentsRouter);



app.listen(port,()=>{

  console.log(`app is listening on ${port}`);
})