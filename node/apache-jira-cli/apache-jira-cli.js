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
var http = require('http');
var fs = require('fs');

var PostHeaderUrl = "http://jira.atlassian.com/secure/CreateIssueDetails.jspa?"
var auth = 'Basic' + new Buffer('lorin@adobe.com' + ':' + 'safety').toString('base64');
console.log(auth);
var PresetPostFields = {
    'pid' : '10420',
    'issuetype' : 2,
    'security' : -1
};

var PresetPostOptions = {
    'host' : "jira.atlassian.com",
    'port' : 80,
    'path' : "/secure/QuickCreateIssue.jspa",
    'method' : 'POST',
    'X-Atlassian-Token': 'no-check',
    'Authorization' : auth
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
function createIssuePostOptions() {
}

var data = {
    summary : "test issue",
    description : "issues test"
}

console.log(data);
console.log( createIssuePostData(data) );

var postReq = http.request(PresetPostOptions, function(res) {
    res.setEncoding('utf8');
    console.log(res.req._headerSent);
});

postReq.on('error', function(e) {
    console.log('fuckup: ' + e.message);
});

postReq.write(createIssuePostData(data));
postReq.end();

