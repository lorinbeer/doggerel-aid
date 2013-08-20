

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

function processdir(dir) {
    fs.readdir(dir, function (err, files) {
        for (var i in files) {
            readfile(files[i], 0, function(data) {
                // horribly inefficient,
                if(data.search(target) == 0) { //set to 0, current application is to replace only beginning of file
                    replace(filepath);
                }
            });
        }
    });
}

function replace(filepath) {
    console.log("replace");
}

// read and set the target
readfile("target.data", 0, function(data) {
    target = data;
    // once the target has been set we can begin processing the directory
    processdir("/Users/lorin/dev/doggerel-aid/node/batch-replace");
});
