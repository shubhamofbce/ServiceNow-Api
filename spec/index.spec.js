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

var base_url = 'https://'+instance+'.service-now.com' +
                '/api/now/table/incident?';

const incident_details = {
    'short_description': 'This is a dummy incident created with REST API',
    'assignment_group':'287ebd7da9fe198100f92cc8d1d2154e',
    'urgency':'2',
    'impact':'2'
};

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
