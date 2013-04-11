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
var ArgumentParser = require('argparse');
var ApacheJiraFetch = require('./apachejirafetch.js');

var parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true
});

parser.addArgument( 
    ['-f', '--foo'], {help: 'bar foo'}
);

parser.addArgument(['-s', '--safemode'],{help: "print post fields and data, but no request is sent"});
parser.addArgument(['-',''],{});
/*
var commandLine = new CommandLine('opts');

function initCommandLine () {
    commandLine.addArgument("safemode"); 
    commandLine.addArgument("source",{type: 'string'});
    commandLine.addArgument("fetch");
    commandLine.addArgument("create");
    commandLine.addArgument("mod");
    commandLine.AddArgument("batchcreate"); 
    commandLine.AddArgument("batchcreate");
}
*/

console.log(process.argv)

// targeting Apache Cordova
var PresetPostFields = {
    'pid' : '12312420',
    'issuetype' : 2,
    'security' : -1
};

var IssuePutOptions = {
    'host' : "issues.apache.org",
    'path' : "/jira/rest/api/latest/issue",
    'method' : 'POST',
    'X-Atlassian-Token': 'no-check', 
    'headers': {
        'Content-Type' : "application/json"
    }
}

var JiraRestTemplate = {
    "fields" : {
        "project" : {
            "id" : -1
        },
    //    "summary" : -1,
    //    "description" : -1,
        "issuetype" : {
            "name" : "Bug"
        }
    }
}

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
    var auth = 'Basic ' + new Buffer(result.name + ':' + result.password).toString('base64');
    IssuePutOptions.headers.Authorization = auth;
    //rock (IssuePutOptions);
});

/**
 * sees everything
 */
function rock(requestOptions) {
    console.log(requestOptions);
    req = createRequest(requestOptions); 
    // readData()
    var data = JSON.stringify(createIssueRestData(),'utf8');
    console.log(createIssueRestData());
    //console.log(data);

    //req.write(data);
    //req.end();
}

function createIssueRestData() {
    JiraRestTemplate.fields.project.id = "12312420"; 
    JiraRestTemplate.fields.summary = "RestFul Test Issue";
    //JiraRestTemplate.fields.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    JiraRestTemplate.fields.issuetype.name = "Bug";
    return JiraRestTemplate;
}
/**
 * creates issue query string from presets and dynamic data 
 */
function createIssueQueryString(data) { 
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
        summary : "RestFul Test Issue",
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
}

/**
 * creates a request and sets error callback
 */
function createRequest(options) {
    var req = https.request(options, function(res) {
        res.setEncoding('utf8');
        console.log("Status Code: " + res.statusCode);
        console.log("Response Header: " + JSON.stringify(res.headers));
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    req.on('error', function(e) {
        console.log('fuckup: ' + e.message);
    });
    return req
}
