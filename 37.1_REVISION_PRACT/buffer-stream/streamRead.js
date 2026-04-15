const fs = require('fs')

let readStream = fs.createReadStream('bigData.txt')
let writeStream = fs.createWriteStream('smallData.txt')

// creating an eventlistener on readStream for data
// readStream.on('data', (chunk) => {
//     console.log('--------------New Chunk------------')
//     console.log(chunk.toString())
//     writeStream.write('\n--------------New Chunk------------\n')
//     writeStream.write(chunk)
// })

// same code using pipe
readStream.pipe(writeStream)