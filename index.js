const dotenv = require('dotenv');
const request = require('request');
dotenv.config();
const instance = process.env.instance;             // Instance name of service now
const authUsername = process.env.username;         //Username and password for authentication
const authPassword = process.env.password;
const sys_limit = process.env.sys_limit;          // Limit the number of records coming in response
const header = "Accept:application/json";

const incident_details = {
    'short_description': 'This is a dummy incident created with REST API',
    'assignment_group':'287ebd7da9fe198100f92cc8d1d2154e',
    'urgency':'2',
    'impact':'2'
};

// url for the request

var session_url = 'https://'+instance+'.service-now.com' +
                    '/api/now/table/incident?';

if(sys_limit>0){
    session_url += 'sysparm_limit='+sys_limit;
}

function post_ticket(session_url,header,authUsername,authPassword,incident_details,callback) {
    request.post({
            url: session_url,
            headers: header,
            auth: {
                'user': authUsername,
                'pass': authPassword
            },
            body: incident_details,
            json: true
        },
        function (error, response, body) {
            if (error) {
                return callback(error || {statusCode: response.statusCode});
            }
            callback(null, response.statusCode);
        });
}

post_ticket(session_url,header,authUsername,authPassword,incident_details, function (err,statusCode) {
    if (err) {
        console.log(err);
    } else {
        if(statusCode==201){
            console.log("Ticket Created Successfully");
        }
        else{
            console.log(("Authorisation failed"));
        }
    }
});

module.exports = {
    api:post_ticket
};
