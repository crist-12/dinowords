
var Word = null;


export const setData=(wordObject)=>{
    console.log('set')
    Word = wordObject;
    return Word;
}

export const getData=()=>{
    console.log('Entre a get')
    return Word;
}





