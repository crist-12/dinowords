// data_store es un archivo de funciones del modo setter y getter que almacena los valores temporalmente
// para luego devolverlos cuando las pantallas lo requieran.

let Word = null; // Variable que almacena el contenido de tipo Object de la palabra
let Gif = null; // Variable que almacena el contenido de tipo Object del gif
let gifArray = []; // Arreglo que almacena los tres link de los gif a utilizar

// Setter-Word inicializa variable de word
export const setData=(wordObject)=>{
    Word = wordObject;
    return Word;
}

//Cuando un componente lo requiera, debe llamar a getData() para obtener datos de word
export const getData=()=>{
    return Word;
}

// Setter-gif, recibe un parámetro de tipo Object que es la respuesta de la API, la función procesa ese dato
// y lo convierte en un arreglo.
export const setGifData=(gifData)=>{
    gifArray.length=0
    Gif = gifData;
    Gif.data.map((image)=>(                               
        gifArray.push(image.images.downsized.url)
       ))
    return gifArray;
}

//El getter de los gif retorna el arreglo previamente seteado
export const getGifData=()=>{
    return gifArray;
}

//En la pantalla de DinoSearch solamente mostramos un gif, y ese dato lo tomamos de esta función.
export const singleGif=()=>{
    const url = gifArray[0];
    return url;
}

