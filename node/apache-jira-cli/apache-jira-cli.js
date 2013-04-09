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

var querystring = require('querystring');
var https = require('https');
var prompt = require('prompt');

// targeting Apache Cordova
var PresetPostFields = {
    'pid' : '10420',
    'issuetype' : 2,
    'security' : -1
};

// to get apache jira password and username 
var promptSchema = {
    properties : {
        name : {
            required : true
        },
        password : {
            required : true,
            hidden : true
        }
    }
}

prompt.start();
prompt.get(promptSchema, function (err, result) {
    var auth = 'Basic' + new Buffer(result.name + ':' + result.password).toString('base64');
    rock ({
        'host' : "jira.atlassian.com",
        'path' : "/secure/QuickCreateIssue.jspa",
        'method' : 'POST',
        'X-Atlassian-Token': 'no-check',
        'Authorization' : auth
    });
});

/**
 * sees everything
 */
function rock(requestOptions) {
    console.log(requestOptions);
    req = createRequest(requestOptions); 
    
    // readData()
    var data = readData();
    req.write(createIssuePostData(data));
    req.end();
}

/**
 * creates issue query string from presets and dynamic data 
 */
function createIssuePostData(data) { 
    for (var key in PresetPostFields) {
        data[key] = PresetPostFields[key];
    }
    return querystring.stringify(data);
}

/**
 * 
 */
function readData(data) {
    return {
        summary : "Test Issue",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
}

/**
 * creates a request and sets error callback
 */
function createRequest(options) {
    var req = https.request(options, function(res) {
        res.setEncoding('utf8');
        console.log(res.req._headerSent);
    });

    req.on('error', function(e) {
        console.log('fuckup: ' + e.message);
    });
    return req
}
