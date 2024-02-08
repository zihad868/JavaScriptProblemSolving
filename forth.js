function password(obj){
    let siteSlice = obj['siteName'].slice(0,1);
    let siteSliceNext = obj['siteName'].slice(1);
    siteUppletter = siteSlice.toUpperCase()

    let siteUpperCase = siteUppletter+siteSliceNext;

    return siteUpperCase+'#'+obj['name']+'@'+obj['birthYear']
}


let password2 = password({ name: 'rahat' , birthYear: 2002, siteName: 'facebook' })

console.log(password2)