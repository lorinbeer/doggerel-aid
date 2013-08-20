

var fs = require("fs");
var target = null;

function readfile(filename, bytes, cb) {
    var readstream = fs.createReadStream(filename, {'encoding':'utf8'}),
        chunk = null, 
        buffer = "";
    readstream.on('readable', function (fd) {
        while (null != (chunk = readstream.read())) {
            buffer = buffer + chunk;
        }
        cb(buffer);
    });
}

function processDir(dir) {
    fs.readdir(dir, function (err, files) {
        for (var i in files) {
            console.log(files[i]);
            processFile(files[i]);
        }
    });
}

function processFile(fileName) {
    var readstream = fs.createReadStream(fileName, {'encoding':"utf8"});
    readstream.on('readable', function (fd) {
        var chunk;
        while (null != (chunk = readstream.read())) {
            console.log(chunk);
        }
    });
}

// read and set the target
readfile("target.data", function(data) {
    target = data;
    // once the target has been set we can begin processing the directory
    processDir("/Users/lorin/dev/doggerel-aid/node/batch-replace");
});
//processDir("/Users/lorin/dev/doggerel-aid/node/batch-replace");
