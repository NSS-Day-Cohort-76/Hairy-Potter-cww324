

const marketablePottery = [];

export const toSellOrNotToSell = (potteryObject) => {

if (potteryObject.cracked === true){
    return
} else {
    if (potteryObject.weight >= 6){
        potteryObject.price = 40;      
    }
    if (potteryObject.weight < 6){
        potteryObject.price = 20;     
    }
    marketablePottery.push(potteryObject)
     return potteryObject;
    }
}

export const usePottery = () => {
    return structuredClone(marketablePottery)
}