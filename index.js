// old modules (These modules were used before ES6.)

// import file
// const {sum,sub} =require('./local')

// console.log(sum(12 ,21));
// console.log(sub(21 ,11));

// ES6 modules
// import mod from './local.js';

// console.log(mod);

// ** FS (file system) module

const fs = require('fs')

// file create

// fs.writeFile('write.md','nodejs',(err)=>{
//     if(err) throw err;
//     console.log("file created sucessfull");
// })

// file read

// fs.readFile('./write.md','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// file rename

// fs.rename('write.md','rewrite.md',(err)=>{
//     if(err) throw err;
//     console.log("rename sucessfull");
// })

// file delete

// fs.unlink('rewrite.md',(err)=>{
//     if(err) throw err;
//     console.log("deleted");
// })

let ops = process.argv[2]
let write = process.argv[3]
let data = process.argv[4]

// console.log(process.argv);

let generat = ()=>{
    fs.writeFile(write,data,(err)=>{
    if(err) throw err;
    console.log("file created");
    })
}

let read = ()=>{
    fs.readFile(write,'utf-8',(err,data)=>{
        if(err) throw err
        console.log(data);
    })
}

let rename = ()=>{
    fs.rename(write,data,(err)=>{
        if(err) throw err
        console.log('file renamed');
    })
}

let dlt = ()=>{
    fs.unlink(write,(err)=>{
        if(err) throw err
        console.log('file deleted');
    })
}

let append = ()=>{
    fs.appendFile(write,data,(err)=>{
        if(err) throw err;
        console.log('data appended to file!');
    })
}

if(ops == 'create'){
    generat()
}
else if(ops == 'read'){
    read()
}
else if(ops == 'rename'){
    rename()
}
else if(ops == 'dlt'){
    dlt()
}
else if(ops == 'append'){
    append()
}
