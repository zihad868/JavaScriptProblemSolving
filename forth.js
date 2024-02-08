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


let password2 = password({ name: 'rahat' , birthYear: 2025, siteName: 'facebook' })

console.log(password2)