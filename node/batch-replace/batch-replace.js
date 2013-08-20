

var fs = require("fs");

function processDir(dir) {
    fs.readdir(dir, function (err, files) {
        for (var i in files) {
            console.log(files[i]);
            var readstream = fs.createReadStream("LICENSE", {'start':0, 'end':64, 'encoding':"utf8"});
            readstream.on('readable', function (fd) {
                var chunk;
                while (null != (chunk = readstream.read())) {
                    console.log(chunk);
                }
            });
        }
    });
}



function processFile() {
    //find match
    console.log("processing file");    
//console.log(filestream.read(64));
    
/*
    fs.read(file, buffer, 0, 16, 0, function(err, bytesRead, buffer) {
        console.log(buffer);
    });
*/    //adjust position
    //insert new     
}

processDir("/Users/lorin/dev/doggerel-aid/node/batch-replace");
