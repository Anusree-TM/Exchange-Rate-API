import express from "express";
import { currencyConvert } from "./converter";

const router=express.Router();

router.get('/', (req, res) => {
    res.send("Currency converter");
});

router.get('/convert',async(req,res)=>{
    const {from,to,amount}=req.query;
    if(!from || !to || !amount ||isNaN(Number(amount))){
            return res.status(400).json({error:"Invalid Request,Please Provide Parameters to,from,amount"})
    }
    try{
        const convertedAmount=await currencyConvert(String(from),String(to),Number(amount));
        if(isNaN(convertedAmount)){
            throw new Error("Error in curency conversion");
        }
        res.json({result:convertedAmount})
    }
    catch(error){
        console.error(error);
       res.status(500).json({error:"internal Server Error"})
    }
})
export default router
