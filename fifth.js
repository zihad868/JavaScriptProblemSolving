function monthlySavings(arr , livingCost){

    if(typeof arr === 'object'){


        let arrLength = arr.length
    
        totalIncome = 0
        for(let i = 0; i < arrLength; i++){
    
            tax = 0;
            if(arr[i] >= 3000){
                tax = arr[i] * 0.2;
                afterTax = arr[i] - tax;
                totalIncome = totalIncome + afterTax;
            }
    
    
            else{
                totalIncome = totalIncome + arr[i];
            }
            
        }
    
        saving = totalIncome - livingCost
    
        if(saving >= 0){
            return saving
        }
    
        return 'earn more'
    }

    return "Invalid"
}


let existMoney = monthlySavings([ 900 , 2700 , 3400] , 1000 )
console.log(existMoney)