# instantslides
Demonstration of slides content generation using Jubilee NLP API

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

Don't forget to update the token and the URL of the workspace you are querying.
 
