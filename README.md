# ServiceNow API

In this app we are calling the `POST /now/table/incidents` api that
                               Inserts one record in the incidents table according the passed in parameters.


Create a .env file in the project directory and add the following variables
Here is an example env file:
`instance=dev64765`<br>
`username=admin`<br>
`password=Shubham123`<br>
 <br>

Go to `index.js` and change the incident_description and fill the details of incidents(tickets):<br>
`const incident_details = {`<br>
    `'short_description': 'This is a dummy incident created with REST API'`<br>
    `'assignment_group':'287ebd7da9fe198100f92cc8d1d2154e'`,<br>
    `'urgency':'2'`,<br>
    `'impact':'2'
}`


Steps to start the Application:
<br>Step1. Run `npm install` to install all the dependency<br>
Step2. Add `.env` file with your config details as explained above.<br>
Step3. Run `node index.js` to start the application.<br>

You can see the results in your console.
