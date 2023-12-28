import axios from "axios";

export async function currencyConvert(from:string,to:string,amount:number):Promise<number>{
    try{
        const response=await axios.get(`https://open.er-api.com/v6/latest/${from}`)
        const Rates=response.data.rates;
        const fromRate=Rates[from];
        const toRate=Rates[to];
        if(!fromRate || !toRate){
            throw new Error("Invalid Currency Code");
        }
        const convertedAmount=(amount/fromRate)*toRate;
        if(isNaN(convertedAmount)){
            throw new Error("error in currency conversion")
        }
        return convertedAmount;
    }
    catch{
        throw new Error("Error")
    }
}
    
