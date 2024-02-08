
function calculateMoney(ticketSale){
    if(ticketSale >= 0){
        janitorCost = 500;
        lunchCost = 8*50

        totalCost = janitorCost + lunchCost;
    
        accessMoney = (ticketSale*120) - totalCost

        return accessMoney
    }

    return "Invalid Number"
}


let sellTicket = calculateMoney(-10)

console.log(sellTicket)