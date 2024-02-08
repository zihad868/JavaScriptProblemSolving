
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

let freshArr = deleteInvalids([ 1 , 2 , -3 ])

console.log(freshArr)