function createCharts(rows, nlresult, nlg, iteration) {
  
  Logger.log('now create charts page');

  // create new page   
  var pageId = createNewPage();
 
  // add the header 
  setTitle(pageId, nlg);
  
  Logger.log('add spreadsheet chart');  
  var sheet = createSpreadSheet(rows, nlg, iteration,pageId); 
  
  Logger.log('add pie chart');  
  var pie = createPieChart(rows, nlg, iteration,pageId);
  
  Logger.log('add text description');
  setText(pageId, nlresult, 20, 320, 600, 60);
  
}

