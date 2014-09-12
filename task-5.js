var fs = require("fs");
var easyimg = require('easyimage');

module.exports = function (imgDirectory) {
    // Path to source and destination
    var srcPath = './' + imgDirectory;
    var dstPath = srcPath + '/thumbnails';

    // If source directory does not exist, return false.
    if (!fs.existsSync(srcPath)) {
        return (false);
    }

    // If thumbnail-directory does not exist, create it.
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
    return (true);
};