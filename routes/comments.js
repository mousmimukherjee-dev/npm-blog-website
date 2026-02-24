import express from "express";
import path from "path";

import blogPosts from "../data/data.js";
const _dirname=path.resolve()
const commentsRouter = express.Router();


commentsRouter.post("/:id",(req,res)=>{

  const postsID = Number(req.params.id)
  const post= blogPosts.find((post) => post.id === postsID);

  if(!res.locals.isAuthenticated){

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


export default commentsRouter;