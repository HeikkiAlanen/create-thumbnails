var imgPath = process.argv[2];
var createThumbnails = require('./task-5.js');

if (!createThumbnails(imgPath)) {
    console.log("Given directory does not exist.");
}
