import express from "express";
import path from "path";


const _dirname=path.resolve()

const logoutRouter = express.Router();

logoutRouter.get("/",(req,res)=>{

 req.app.locals.isAuthenticated = false;
 res.redirect("/login")
})

export default logoutRouter;