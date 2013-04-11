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

var prompt = require('prompt');

var fs = require('fs');

contents = fs.readFileSync("json.dat", 'utf8', 'r');

ion = JSON.parse(contents);

console.dir(ion);

/*
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
    rock (IssuePutOptions);
});
*/
