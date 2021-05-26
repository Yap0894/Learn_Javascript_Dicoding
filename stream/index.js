const fs = require ('fs');
const {resolve} = require ('path');

function path(filename){
    return resolve(__dirname, filename);
}

const readStream = fs.createReadStream(path('./input.txt'), {
    highWaterMark: 15
});

const writeStream = fs.createWriteStream(path('./output.txt'));



const input = readStream.on('readable',() => {
    try{
        const msg = `${readStream.read()}\n`; 
        writeStream.write(msg);
    }
    catch(error){
        throw error;
    }
})

readStream.on('end',() =>{
    console.log('Done');
})