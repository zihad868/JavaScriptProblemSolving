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


let name = checkName('fgfgkyt')
console.log(name)