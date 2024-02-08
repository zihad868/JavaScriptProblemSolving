
function deleteInvalids(array){
    freshArray = []
    
    for(let arrayEle of array){
        if(typeof arrayEle === 'number' && !isNaN(arrayEle)){
            freshArray.push(arrayEle)
        }
    }

    return freshArray;
}

let freshArr = deleteInvalids(['1' , {num:2} , NaN ])

console.log(freshArr)