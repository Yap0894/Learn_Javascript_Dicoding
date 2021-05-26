const fs = require('fs');
const {resolve} = require('path');
const readFile = (e,d) =>{
    if(e){
        console.log('Gagal Baca data');
        return;
    }
    console.log(d);
}

fs.readFile(resolve(__dirname,'notes.txt'),'UTF-8',readFile);