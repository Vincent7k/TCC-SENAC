import { Request, Response } from "express";
import { sequelize } from "../instances/mysql";
/*try{
    await sequelize.authenticate()
    console.log('Conection made sucefully')
}catch(error){
    console.log('We have a problem', error)
}
*/
export const home = ((req:Request, res:Response)=>{
    res.render ('pages/home')
})