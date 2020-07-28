var api = require('../index').api;
var request = require("request");
const dotenv = require('dotenv');
dotenv.config();
const instance = process.env.instance;             // Instance name of service now
const authUsername = process.env.username;         //Username and password for authentication
const authPassword = process.env.password;
const dummyUser = 'wrong';                        // Wrong credentials for test case.
const dummyPassword = 'wrong';
const sys_limit = process.env.sys_limit;          // Limit the number of records coming in response
const header = "Accept:application/json";

const incident_details = {
    'description': 'This is a dummy incident created with REST API',
};

// url for the request

var session_url = 'https://'+instance+'.service-now.com' +
    '/api/now/table/'+process.env.table_api_name;


// Test case to check whether Ticket is created successfully
// Status Code Expected is 201

describe("Create a new Ticket with authentication", function() {
    it("returns status code 201", function (done) {
        api(base_url,header,authUsername,authPassword,incident_details,
            function (error, body) {
            expect(body).toBe(201);
            done();
        });
    });

});


// Test case to check whether authentication fails or not for wrong credentials
// Status Code Expected is 401

describe("Create a new Ticket without authentication", function() {
    it("returns undefined with wrong credentials", function (done) {
        api(base_url,header,dummyUser,dummyPassword,incident_details,
            function (error, body) {
                expect(body).toBe(401);
                done();
            });
    });

});
