const fs = require('fs')

// to preven errors if json doesn't exist
try{
    // can be used require but it won't detect changes (immidiately) - Reason: caching
    const data = fs.readFileSync('./08_setup.json') 
    folderName = process.argv[2] || `${data.root}`
    // create main folder
    fs.mkdirSync(`../${folderName}`);
    data.folders.forEach(element => {
        fs.mkdirSync(`../${folderName}/${element}`,{recursive: true})
    });
    data.files.forEach(element => {
        fs.writeFileSync(`../${folderName}/${element}`,'//content')
    })
    console.log(`🚀 Success! ${folderName} has been created!`)
} catch(err){
    console.log('🛑 Operation Failed: ', err.message)
}