import express from "express";
import path from "path";

import blogPosts from "../data/data.js";

const _dirname=path.resolve()

const postRouter=express.Router();

postRouter.get("/:id",(req,res)=>{

  const postsID = Number(req.params.id)
  const post= blogPosts.find((post) => post.id === postsID)

  if(post){

    res.render(`pages/post${post.id}`,{post,
      headTitle:post.title,
      isAuthenticated:res.locals.isAuthenticated
    });
  }
  else{

    res.render("pages/404")
  }
})

export default postRouter;