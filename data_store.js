
let Word = null;
let Gif = null;
let gifArray = [];
export const setData=(wordObject)=>{
    Word = wordObject;
    return Word;
}

export const getData=()=>{
    return Word;
}

export const setGifData=(gifData)=>{
    gifArray.length=0
    Gif = gifData;
    Gif.data.map((image)=>(                               
        gifArray.push(image.images.downsized.url)
       ))

    console.log("Recibí un arreglo")
    return gifArray;
}

export const getGifData=()=>{
    return gifArray;
}

export const singleGif=()=>{
    console.log("Acabo de cargar "+gifArray[0])
    const url = gifArray[0];
    return url;
}

