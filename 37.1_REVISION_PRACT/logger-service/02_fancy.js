const figlet = require('figlet');
const chalk = require('chalk'); 

module.exports = (msg) => {
    figlet(msg, (err, data) => {
        if (err) return console.log("🛑 Error");
        console.log(chalk.greenBright(data));
    });
};