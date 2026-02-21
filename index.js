import express from "express";
import path from "path";

import blogPosts from "./data/data.js";

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
app.get("/",(req,res)=>{


  res.render("pages/home",{blogPosts,
    headTitle:"Blog Home",
    isAuthenticated

  })
})

app.get("/pages/post/:id",(req,res)=>{

  const postsID = Number(req.params.id)
  const post= blogPosts.find((post) => post.id === postsID)

  if(post){

    res.render(`pages/post${post.id}`,{post,
      headTitle:post.title,
      isAuthenticated
    })
  }
  else{

    res.render("pages/404")
  }
})

app.post("/comments/:id",(req,res)=>{

  const postsID = Number(req.params.id)
  const post= blogPosts.find((post) => post.id === postsID);

  if(!isAuthenticated){

    return res.redirect("/login")
  }

  if(post){

    const comment = req.body.comment;
    if(comment){

      post.comments.push(comment)
      return res.redirect(`/pages/post/${postsID}`)
    }
  }

  else{

    res.status(404).render("pages/404")
  }
})

app.get("/login",(req,res)=>{

  res.render("pages/login",{
    headTitle:"Log in",
  })
})

app.post("/login",(req,res)=>{

  let { username , password } = req.body;

  const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
  const passwordRegex = /^.{6,}$/; 
  if(usernameRegex.test(username) && passwordRegex.test(password)){

    isAuthenticated=true;
    return res.redirect("/")
  }else{

    res.render("pages/404")
  }
})

app.get("/logout",(req,res)=>{

  isAuthenticated=false;
  res.redirect("/");
})

app.get("/about",(req,res)=>{

  res.render("pages/about",{
    headTitle:"About Me"
  })
})

app.get("/contact",(req,res)=>{

  res.render("pages/contact",{
    headTitle:"Contact",
  })
})
app.listen(port,()=>{

  console.log(`app is listening on ${port}`);
})