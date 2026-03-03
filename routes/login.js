import express from "express";
import path from "path";


const _dirname=path.resolve()

const loginRouter = express.Router();


loginRouter.get("/",(req,res)=>{

  res.render("pages/login",{
    headTitle:"Log in",
  })
})

loginRouter.post("/",(req,res)=>{

  let { username , password } = req.body;

  const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
  const passwordRegex = /^.{6,}$/; 
  if(usernameRegex.test(username) && passwordRegex.test(password)){

    req.app.locals.isAuthenticated = true;
    res.redirect("/")
  }
})


export default loginRouter;
