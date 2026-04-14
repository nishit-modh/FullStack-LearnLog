const logger = require('./plugins'); // Automatically looks for index.js

// process.argv[2] is where your CLI input starts
const modeInput = process.argv[2] || '--mode=plain';
const message = "System Active";

if (modeInput === '--mode=fancy') {
    logger.fancy(message);
} else {
    console.log(logger.plain(message));
}