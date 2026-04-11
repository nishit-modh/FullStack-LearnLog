// if we start the server outside the dir, EJS by default looks for "views" dir where the server started, not in the parent dir of the file ("index.js" here).
// So we need to hardcode the path so we can start the server from anywhere whitout an issue -> Do this as a good practice for every file

// require path package
const path = require("path");

// Configure the directory where Express looks for view (template) files.
// By default, Express searches for a "views" folder in the directory where the server is started. Using __dirname ensures it always points to the "views" folder located next to this server file, no matter where the app is run from.
app.set('views', path.join(__dirname, 'views'));
// "__dirname" specifies path to directory where server is, "views" specifies that it is subfolder of current directory