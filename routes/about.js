import express from "express";
import path from "path";


const _dirname=path.resolve()

const aboutRouter = express.Router();

aboutRouter.get("/",(req,res)=>{

  res.render("pages/about",{
    headTitle:"About Me"
  })
})

export default aboutRouter;
