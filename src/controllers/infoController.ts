import exp from "constants";
import { Request, Response } from "express";

export const course = ((req:Request, res:Response)=>{
    res.render('pages/course')
})

export const about = ((req:Request, res:Response)=>{
    res.render('pages/about')
})

export const contact = ((req:Request, res:Response)=>{
    res.render('pages/contact')
})

export const security = ((req:Request, res:Response)=>{
    res.render('pages/security')
})

export const support = ((req:Request, res:Response)=>{
    res.render('pages/support')
})

export const programming = ((req:Request, res:Response)=>{
    res.render('pages/programming')
})

export const quality = ((req:Request, res:Response)=>{
    res.render('pages/quality')
})

export const management = ((req:Request, res:Response)=>{
    res.render('pages/management')
})

export const mobile = ((req:Request, res:Response)=>{
    res.render('pages/mobile')
})

export const engineering = ((req:Request, res:Response)=>{
    res.render('pages/engineering')
})

export const web = ((req:Request, res:Response)=>{
    res.render('pages/web')
})

export const cloud = ((req:Request, res:Response)=>{
    res.render('pages/cloud')
})