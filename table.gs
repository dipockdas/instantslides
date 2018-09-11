function createTable(results, nlg) {
  
  // create new page   
  var pageId = createNewPage();
 
  // add the header 
  setTitle(pageId, nlg);
 
 // Logger.log('Write table contents');
  
  // write the table of results
  if (results) {
  
  var table = pageId.insertTable(results.length, results[0].length);
  
  // Populate the table with result data.
  for (var i = 0; i < results.length; i++) {
    for (var j = 0; j < results[0].length; j++) {
      table.getCell(i, j).getText().setText(String(results[i][j]));
      table.getCell(i,j).getText().getTextStyle().setFontFamily('Roboto');
      table.getCell(i,j).getText().getTextStyle().setFontSize(10);
    }
  }
  };

}
