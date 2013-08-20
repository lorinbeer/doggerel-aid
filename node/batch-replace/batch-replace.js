

var fs = require("fs");

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

processDir("/Users/lorin/dev/doggerel-aid/node/batch-replace");
