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
    console.log(result);
    startRequest();
});

var PostHeaderUrl = "https://jira.atlassian.com/secure/CreateIssueDetails.jspa?"
var auth = 'Basic' + new Buffer('lorin@adobe.com' + ':' + 'safety').toString('base64');
console.log(auth);
var PresetPostFields = {
    'pid' : '10420',
    'issuetype' : 2,
    'security' : -1
};

var PresetPostOptions = {
    'host' : "jira.atlassian.com",
    'path' : "/secure/QuickCreateIssue.jspa",
    'method' : 'POST',
    'X-Atlassian-Token': 'no-check',
    'Authorization' : auth
}

/**
 * sees everything
 */
var rock() {
    req = createRequest(PresetPostOptions); 
    
    // readData()
    req.write(data);

    req.end();
}

/**
 *
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
        summary : "test issue",
        description : "issues test"
    }
}

/**
 * creates a request and sets error callback
 */
function createRequest(options) {
    var postReq = https.request(options, function(res) {
        res.setEncoding('utf8');
        console.log(res.req._headerSent);
    });

    postReq.on('error', function(e) {
        console.log('fuckup: ' + e.message);
    });
}
