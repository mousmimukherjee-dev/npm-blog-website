import express from "express";
import path from "path";

const _dirname=path.resolve()

const contactRouter = express.Router();

contactRouter.get("/",(req,res)=>{

  res.render("pages/contact",{
    headTitle:"Contact",
   
    
  })
})

export default contactRouter;