/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var fs = require("fs"),
    path = require("path"),
    targpath = process.argv[2],
    sourpath = process.argv[3],
    targetdir = path.join(__dirname, process.argv[4]),
    target = null,
    source = null; 

function readfile(filepath, bytes, cb) {
    var readstream = fs.createReadStream(filepath, {'encoding':'utf8'}),
        chunk = null, 
        buffer = "";
    readstream.on('readable', function (fd) {
        while (null != (chunk = readstream.read())) {
            buffer = buffer + chunk;
        }
        cb(buffer, filepath);
    });
}

function replace(filepath, data) {
    var update = data.replace(target, source);
        writestream = fs.createWriteStream(filepath, {'encoding':'utf8'});
    writestream.write(update);
}

function processdir(dir) {
    var i = 0;
    fs.readdir(dir, function (err, files) {
        for (i = 0; i < files.length; i=i+1) {
            console.log("processing " + files[i] + " in " + targetdir, i);
            function cb(data, filepath) {
                // horribly inefficient,
                if(data.indexOf(target) == 0) { //set to 0, current application is to replace only beginning of file
                    console.log("target found in file: " + filepath);
                    replace(filepath, data);
                }
            }
            readfile(path.join(targetdir,files[i]), 0, cb);
        }
    });
}

// read and set the target
readfile(path.join(__dirname,sourpath), 0, function(data) {
    source = data;
});

readfile(path.join(__dirname,targpath), 0, function(data) {
    target = data;
    // once the target has been set we can begin processing the directory
    processdir(targetdir);
});
