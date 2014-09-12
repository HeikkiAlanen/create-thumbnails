var fs = require("fs");
var easyimg = require('easyimage');

// Read file names from images-folder
var srcPath = './images';
var dstPath = './images/thumbnails';

// If thumbnail-folder does not exist, create it.
if (!fs.existsSync(dstPath)) {
    fs.mkdirSync(dstPath);
}

// Read source file names
var imgFiles = fs.readdirSync(srcPath);

// Go through every source file
imgFiles.forEach (function (image) {
    var srcFile = srcPath + '/' + image;
    var dstFile = dstPath + '/' + image.replace(/\.jpg$/, '_thumb.jpg');
    
    /* For testing purposes
    console.log(srcFile);
    console.log(dstFile);
    */

    // If source is a file then create thumbnail
    var stat = fs.statSync(srcFile)
    if (stat && stat.isFile()) {
        easyimg.thumbnail({
            src: srcFile, 
            dst: dstFile,
            width:100, 
            height:100,
            x:0, 
            y:0
        }).then(
          function(image) {
             console.log('Thumbnail created: ' + image.name + ' ' + image.width + ' x ' + image.height);
          },
          function (err) {
            console.log("Can't create thumbnail!");
          }
        );
    }
});
