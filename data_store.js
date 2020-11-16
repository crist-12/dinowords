
let Word = null;
let Gif = null;

export const setData=(wordObject)=>{
    console.log('set')
    Word = wordObject;
    return Word;
}

export const getData=()=>{
    console.log('Entre a get')
    return Word;
}

export const setGifData=(gifData)=>{
    Gif = null;
    Gif = gifData;
    return Gif;
}

export const getGifData=()=>{
    return Gif;
}


