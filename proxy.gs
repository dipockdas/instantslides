function connect(nlq,resultType) {
  
  // var url = 'https://api.askpony.com/services/search/GUID/daily sales in london last 10 days';
  var url = 'https://api.askpony.com/services/search/GUID/' + String(nlq);
  
    var response = UrlFetchApp.fetch(url, {
      headers: {
        Authorization:       'Bearer TOKEN',
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
    // Logger.log(result.queryResult.data);
    Logger.log('**************************************************************************');
  };

 return(result);
}