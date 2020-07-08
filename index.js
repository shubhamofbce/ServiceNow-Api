const dotenv = require('dotenv');
const request = require('request');
dotenv.config();

const instance = process.env.instance;             // Instance name of service now
const authUsername = process.env.username;         //Username and password for authentication
const authPassword = process.env.password;
const sys_limit = process.env.sys_limit;          // Limit the number of records coming in response
const header = "Accept:application/json";

// url for the request

var session_url = 'https://'+instance+'.service-now.com' +
                  '/api/sn_sc/servicecatalog/catalogs?';
if(sys_limit>0){
    session_url += 'sysparm_limit='+sys_limit;
}

const options = {
    url: session_url,
    header: {
        header
    },
    auth: {
        'user': authUsername,
        'pass': authPassword
    }
};
function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
        const info = JSON.parse(body);
        console.log(info);
    }
    else if (response.statusCode === 400) {
        console.log("User does not have acces to catalog or Invalid sys_id");
    }
    else if(response.statusCode === 500) {
        console.log("Internal error occurred while executing the request");
    }
    else {
        console.log("Some error occured");
    }
}
request(options,callback);
