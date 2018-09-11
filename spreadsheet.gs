// Use this is we can't just populate the table directly
function createSpreadSheet(rows, nlg, iteration, pageId) {
  // Create the new results spreadsheet.
  
  // Logger.log('get the spreadsheetURL property');
  var spreadsheetURL = PropertiesService.getScriptProperties().getProperty('key');
  
  var spreadsheet = SpreadsheetApp.openByUrl(spreadsheetURL);
  var sheet = spreadsheet.getActiveSheet();

  Logger.log('Insert new sheet');
  sheet = spreadsheet.insertSheet(pageId);
  
 // sheet.getRange(row, column, numRows, numColumns)
  sheet.getRange(3, 1, rows.length, rows[0].length).setValues(rows);
  var palatte = ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'];
  var shade = '#f3b49f';

var colr = '';

 switch(iteration) 
 {
    
   case 1:
        Logger.log('1');
        colr = '#e0440e';
        break;    
   case 2:
        Logger.log('2');
        colr =  '#77b710';
        break;
   case 3:
           Logger.log('3');
        colr =  '#0581c1';
        break;
   case 4:
           Logger.log('4');
        colr =  '#8613c4';
        break; 
   case 5:
           Logger.log('5');
       colr = '#c4122d';
        break;
   case 6:
           Logger.log('6');
        colr =  '#eee7b6';
        break;
   case 7:
           Logger.log('7');
        colr =  '#ff6d6d';
        break;
   default:
           Logger.log('default');
        colr =  '#ff5d00';
 }


var chart = sheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(sheet.getRange(3, 1, rows.length, rows[0].length))
    .setOption('colors',[colr])
    .setPosition(5, 5, 0, 0)
    .build();  

  sheet.insertChart(chart);

  var spreadsheetcharts = sheet.getCharts()[0];
  var slidechart = pageId.insertSheetsChart(spreadsheetcharts, 360,60, 360, 240);
  return spreadsheet.getId();
}