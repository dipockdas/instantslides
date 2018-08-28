# instantslides

Google Slides generation using Splunk Jubilee NLP API. Just enter your natural language query and get instant chart results...

A Google AppScript project that connects to Splunk Project Jubilee's REST API. The REST API lets you issue queries to get data out of Splunk using natural language. You don't need to use or learn SPL.

The project creates charts and tables for any query you want to ask of the data you have modeled in Splunk.

The project is written in AppScript. 

The following files exist

* Code.gs - the main code that creates a sidebar in Google Slides
* proxy.js - the connection code to the Jubilee REST API. You will have to replace the autentication token in this code before running it.
* jtable.gs - the code that creates a table in the spreadsheet
* jsprreadsheet.gs - the code that creates a chart (by first creating a Google Spreadsheet and then embedding a chart in the slide)
* sidebar.html - the HTML file for the side panel that shows the options to run the code.


To get this running in a Google Slide - Open Slides->Tools->Script Editor. Please upload or recreate each file and paste in the script code.

**Important!! **
This project uses moment.js library. To use this library you need to add it by going to Resources->Libraries. Enter the following key into the 'Add key' box and submit

15hgNOjKHUG4UtyZl9clqBbl23sDvWMS8pfDJOyIapZk5RBqwL3i-rlCo

Now you have moment.js added to the project you need to add the access token and the URL of the workspace you are querying.

Details to do this can be found in the following Github project
[here](https://github.com/dipockdas/jubilee-cli)



 
