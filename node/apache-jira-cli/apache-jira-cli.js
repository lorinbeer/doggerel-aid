
var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

var PostHeaderUrl = "http://jira.atlassian.com/secure/CreateIssueDetails.jspa?"

var PresetPostFields = {
    'pid' : '10420',
    'issuetype' : 2,
    'security' : -1
};
var PresetPostOptions = {
    host : 'jira.atlassian.com',
    port : '80',
    path : 'secure/QuickCreateIssue.jspa',
    method : 'POST'
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

var postreq = http.request(PresetPostOptions, function(res) {
    res.setEncoding('utf8');
});

postreq.write(createIssuePostData(data));
postreq.end();

