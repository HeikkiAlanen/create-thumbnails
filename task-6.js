var imgPath = process.argv[2];
var createThumbnails = require('./task-5.js');

if (imgPath) {
    if (!createThumbnails(imgPath)) {
        console.log("Given directory does not exist.");
    }
} else {
    console.log("Give path to images directory");
}
