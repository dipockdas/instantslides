 "dialog": {
      "intents": [
        {
          "name": "GetTravelTime",
          "confirmationRequired": false,
          "prompts": {},
          "slots"



function connect(nlq,resultType) {
  
  // var url = 'https://api.askpony.com/services/search/1cc86d4308f147f09c90c3acc58835cf/daily sales in london last 10 days';
  var url = 'https://api.askpony.com/services/search/1cc86d4308f147f09c90c3acc58835cf/' + String(nlq);
  
    var response = UrlFetchApp.fetch(url, {
      headers: {
        Authorization:       'BEARER TOKEN HERE',
        'Cache-Control': 'no-cache',
        'X-Requested-By': 'STANDALONE',
        strictSSL: false,
        rejectUnauthorized: false
      },
      method: 'GET',
      // The Content-Type header must be set to an empty string when passing no JSON payload.
      contentType: ''
    });
    var result = JSON.parse(response.getContentText());
  
    // Return null if no data returned.
  if (!result.queryResult.data) {
    return Logger.log('No rows returned.');
  } else {
    Logger.log(result.queryResult.data);
  };

 return(result);
}
