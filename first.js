
function calculateMoney(ticketSale){
    janitorCost = 500;
    lunchCost = 8*50

    totalCost = janitorCost + lunchCost;
    
    accessMoney = (ticketSale*120) - totalCost

    return accessMoney
}


let sellTicket = calculateMoney(10)

console.log(sellTicket)