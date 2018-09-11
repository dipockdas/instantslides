// Use this is we can't just populate the table directly
function createPieChart(rows, nlg, iteration, pageId) {
  // Create the new results spreadsheet.
  
  Logger.log('Pie');
  
  // Logger.log('get the spreadsheetURL property');
  var spreadsheetURL = PropertiesService.getScriptProperties().getProperty('key');
  var spreadsheet = SpreadsheetApp.openByUrl(spreadsheetURL);
  var sheet = spreadsheet.getActiveSheet();

  // Logger.log('Insert new sheet');
  sheet = spreadsheet.insertSheet(pageId);
  
  // sheet.getRange(row, column, numRows, numColumns)
  sheet.getRange(3, 1, rows.length, rows[0].length).setValues(rows);

  var palatte = ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'];

  var chart = sheet.newChart()
    .setChartType(Charts.ChartType.PIE)
    .addRange(sheet.getRange(3, 1, rows.length, rows[0].length))
    // .setOption('title', nlg)    // we will just put one title on the screen
    .setOption('width', 400)
    .setOption('height', 240)
    .setOption('colors', ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'])
    .setPosition(5, 5, 0, 0)
    .build();  

  sheet.insertChart(chart);

  var pie = sheet.getCharts()[0]; 
  var slidechart = pageId.insertSheetsChart(pie, 30,60, 300, 240);
  
  return spreadsheet.getId();
}

