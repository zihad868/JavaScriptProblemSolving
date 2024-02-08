function checkName(name){
    const len = name.length;
    let lastElem =  name[len-1];

    lastWords = ['A', 'y', 'i' , 'e' , 'o' , 'u', 'w']

    lastElemUpper = lastElem.toUpperCase();

    
    googNameWordList = []
    for(let lastWord of lastWords){
        goodNameWord = lastWord.toUpperCase()
        
        googNameWordList.push(goodNameWord)
    }

    for(let goodNameWord of googNameWordList){
        if(lastElemUpper === goodNameWord){
            return "Good Name"
        }
    }
    return "Bad Name"
}


let name = checkName('RAFEe2')
console.log(name)