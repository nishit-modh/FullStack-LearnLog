const fs = require('fs');
const folderName = process.argv[2] || 'Project-Alpha'; 

// TASK: 
try{
    // 1. Use fs.mkdirSync() to create the folder.
    fs.mkdirSync(`./${folderName}`)
    // 2. Use fs.writeFileSync() to create 'index.js' and 'style.css' inside it.
    fs.writeFileSync(`./${folderName}/index.html`,'')
    fs.writeFileSync(`./${folderName}/style.css`,'')
    // 3. Log "Folder Created" once done.
    console.log(`🚀 Success! ${folderName} has been created!`)
} catch(err){
    console.error('🛑 Operation failed: ', err.message)
}