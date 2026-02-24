import express from "express";
import path from "path";


const _dirname=path.resolve()

const logoutRouter = express.Router();

logoutRouter.get("/",(req,res)=>{

  isAuthenticated=false;
  res.redirect("/");
})

export default logoutRouter;