# ServiceNow API

In this app we are calling the `POST /now/table/incidents` api that
                               Inserts one record in the incidents table according the passed in parameters.

## Service Now Setup

1. Visit [Service Now developer](https://developer.servicenow.com/dev.do) and Sign Up.
2. Sign In with your account after sign up.
3. Click on `Request Instance` on the top-right corner of the screen.
4. select `orlando` and click on Request.
5. It will give you your instance URl with your username and password
6. Visit that URL and change your password (Remember to note down your username and password as it will be required in the React Native App).
7. As soon as you get into your instance .You will see a search bar in the left side with label `filter navigator` 
8. Search for Tables in the filter navigator and select the `Tables` option under the `System definition` Category
9. You will see a list of tables now Click on New to create a new table.
10. Fill in the table label and Name will be filled automatically.  
    *Note:* This name will be used in future for API calls. So note the name, not the label
11. Go to the columns below and add a new column with column label `description`. This way you created a new table for your tickets.
12. Now You need to create a new application and connect this table with that application.
13. Search for `Company application` in the filter navigator
14. Click on `Create New` to create a new company app.
15. Fill in the details like app name and description.
16. In roles set admin only and continue ,
17. select workspace and continue.
18. In tables search for the table that you created earlier. Select it and continue then start the application.
19. Click on continue until you get an option to open your app
20. As soon as you get the open option Click on it and it will open your application in a new tab
21. Clck on the list and here you will see a list of tickets for this specific app


### NodeJS App Setup
1. Create a .env file in the project directory and add the following variables Here is an example env file:
```
instance=yourinstance
username=Your_username
password=your_password
table_api_name=your_table  
 ```
 
 

2. Go to `index.js` and change the incident_description and fill the details of incidents(tickets):<br>
`const incident_details = {`<br>
    `'short_description': 'This is a dummy incident created with REST API'`<br>
    `'assignment_group':'287ebd7da9fe198100f92cc8d1d2154e'`,<br>
    `'urgency':'2'`,<br>
    `'impact':'2'
}`


<b>Steps to start the Application:</b>
<br>Step1. Run `npm install` to install all the dependency<br>
Step2. Add `.env` file with your config details as explained above.<br>
Step3. Run `node index.js` to start the application.<br>

You can see the results in your console.

<b>Steps to Test the Application:</b><br>
Step1. Run `npm run test-init` to initialise the test.<br>
Step2. Run  `npm run test` to start the unit test.<br>
Step3. Check the results in the console.<br>

<i><b>Note:</b></i> If you get Timeout error for the test then you need to run the test again as it happens when the service now server doesn't responds properly.


