// Use this is we can't just populate the table directly
function createSpreadSheet(rows, nlg) {
  // Create the new results spreadsheet.
  
  // Logger.log(rows);
  Logger.log(nlg);
  
  Logger.log('create spreadsheet');
  var name = Utilities.getUuid();
  var spreadsheet = SpreadsheetApp.create(name);
  
   Logger.log('get active spreadsheet');
  var sheet = spreadsheet.getActiveSheet();
  
  // Add headers to Sheet.
//  var headers = queryResults.schema.fields.map(function(field) {
//    return field.name.toUpperCase();
//  });
    // var headers = ["Date", "Value"];
    // sheet.appendRow(headers);
    
    // Logger.log('elements');
    // Logger.log(rows.length);
    // Logger.log(rows[0].length);
    // Logger.log('now setting elements');
    
 
 // sheet.getRange(row, column, numRows, numColumns)
sheet.getRange(3, 1, rows.length, rows[0].length).setValues(rows);


var chart = sheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(sheet.getRange(3, 1, rows.length, rows[0].length))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);


var spreadsheetcharts = sheet.getCharts()[0];

Logger.log('Getting chart info');

Logger.log(spreadsheet.getId());
Logger.log('Chart ID');
Logger.log(spreadsheetcharts.getId());


  Logger.log('create new slide and insert chart');
  var presentationId = SlidesApp.getActivePresentation().getId(); 
  // Logger.log(presentationId);
  
  var slides = SlidesApp.getActivePresentation().getSlides();
  Logger.log(slides.length);
  
  var insertPoint = slides.length - 1;
  var pageId = SlidesApp.getActivePresentation().insertSlide(insertPoint);
  pageId.getBackground().setSolidFill('#FFFFFF');
  
  var slidechart = pageId.insertSheetsChart(spreadsheetcharts, 30,60, 600, 300);
  
  var title = pageId.insertTable(1, 1);
   title.setLeft(10);
   title.setTop(10);
   title.getCell(0, 0).getText().setText(String(nlg));
   title.getCell(0, 0).getText().getTextStyle().setFontFamily('Roboto');
   title.getCell(0, 0).getText().getTextStyle().setFontSize(20);
  
  // Logger.log(spreadsheet.getId());
  return spreadsheet.getId();
}