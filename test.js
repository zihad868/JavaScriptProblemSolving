
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


function checkName(name){

    if(typeof name === 'string'){
        const len = name.length;
        let lastElem =  name[len-1];
    
        lastWords = ['A', 'y', 'i' , 'e' , 'o' , 'u', 'w'];
    
        lastElemUpper = lastElem.toUpperCase();

        let checkAscci = (lastElemUpper.charCodeAt())

        if(checkAscci>=65 && checkAscci <= 90){

            googNameWordList = []
            for(let lastWord of lastWords){
                goodNameWord = lastWord.toUpperCase()
                
                googNameWordList.push(goodNameWord);
            }
        
            for(let goodNameWord of googNameWordList){
                if(lastElemUpper === goodNameWord){
                    return "Good Name";
                }
            }
            return "Bad Name";
        }

        return "Invalid"
    }
}



function deleteInvalids(array){

    if(Array.isArray(array)){
        freshArray = []
    
        for(let arrayEle of array){
            if(typeof arrayEle === 'number' && !isNaN(arrayEle)){
                freshArray.push(arrayEle);
            }
        }
    
        return freshArray;
    }

    return "Invalid"
}




function password(obj){
    if(obj['name'] && obj['birthYear'] && obj['siteName']){
        let date = (obj['birthYear']);
        let dateLength =  (date.toString().length);

        if(dateLength === 4){
            let siteSlice = obj['siteName'].slice(0,1);
            let siteSliceNext = obj['siteName'].slice(1);
            siteUppletter = siteSlice.toUpperCase()
        
            let siteUpperCase = siteUppletter+siteSliceNext;
        
            return siteUpperCase+'#'+obj['name']+'@'+obj['birthYear']
        }

        return "Invalid";
    }

    return "invalid";
}

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
