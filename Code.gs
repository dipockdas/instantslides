// Ask Splunk plug-in example

var moment = Moment.load();

/**
 * Create Ask Splunk menu item.
 * @param {Event} event The open event.
 */
function onOpen(event) {
  SlidesApp.getUi().createAddonMenu()
      .addItem('Ask Splunk', 'showSidebar')
      .addToUi();
}

/**
 * Open the Add-on upon install. Need to invoke this function to force the registration and authentication
 * @param {Event} event The install event.
 */
function onInstall(event) {
  onOpen(event);
}

/**
 * Opens a sidebar in the document containing the add-on's user interface.
 */
function showSidebar() {
  var ui = HtmlService
      .createHtmlOutputFromFile('sidebar')
      .setTitle('Project Jubilee');
  SlidesApp.getUi().showSidebar(ui);
}

/**
 * Recursively gets child text elements a list of elements.
 * @param {PageElement[]} elements The elements to get text from.
 * @return {Text[]} An array of text elements.
 */
function getElementTexts(elements) {
  var texts = [];
  elements.forEach(function(element) {
    switch (element.getPageElementType()) {
      case SlidesApp.PageElementType.GROUP:
        element.asGroup().getChildren().forEach(function(child) {
          texts = texts.concat(getElementTexts(child));
        });
        break;
      case SlidesApp.PageElementType.TABLE:
        var table = element.asTable();
        for (var y = 0; y < table.getNumColumns(); ++y) {
          for (var x = 0; x < table.getNumRows(); ++x) {
            texts.push(table.getCell(x, y).getText());
          }
        }
        break;
      case SlidesApp.PageElementType.SHAPE:
        texts.push(element.asShape().getText());
        break;
    }
  });
  return texts;
}

/**
 * Passes the selected text elements to the Jubilee API.
 *
 * @param {string} targetLanguage The two-letter short form for the target language. (ISO 639-1)
 * @return {number} The number of elements translated.
 */
function translateSelectedElements(resultType) {
  // Get selected elements.
  // Logger.log('Selection');
  // Logger.log(resultType);
  
  
  var selection = SlidesApp.getActivePresentation().getSelection();
  var selectionType = selection.getSelectionType();
  var texts = [];
  switch (selectionType) {
    case SlidesApp.SelectionType.PAGE:
      var pages = selection.getPageRange().getPages().forEach(function(page) {
        texts = texts.concat(getElementTexts(page.getPageElements()));
      });
    break;
    case SlidesApp.SelectionType.PAGE_ELEMENT:
      var pageElements = selection.getPageElementRange().getPageElements();
      texts = texts.concat(getElementTexts(pageElements));
    break;
    case SlidesApp.SelectionType.TABLE_CELL:
      var cells = selection.getTableCellRange().getTableCells().forEach(function(cell) {
        texts.push(cell.getText());
      });
    break;
    case SlidesApp.SelectionType.TEXT:
      var elements = selection.getPageElementRange().getPageElements().forEach(function(element) {
        texts.push(element.asShape().getText());
      });
    break;
  }

  // Convert selected elements in-place.
  var answer = '';
  texts.forEach(function(text) {
  
    // despite saying its a string - it's not. it;s an object with some funky behaviour
    // so we Stringify it then strip the line break and the quotes
    // pretty knarly stuff
    // Logger.log(text.asString());
    var nlg = JSON.stringify(text.asString());
    nlg = nlg.replace(/"+/g,"");
    var nlgi = nlg.length;
    nlg = nlg.slice(0, (nlgi - 2));
    
    // text.setText(connect(nlg, resultType));
    // Logger.log(answer);
    
    result = connect(nlg, resultType);
    
       // Return null if no data returned.
  if (!result.queryResult.data) {
    return Logger.log('No rows returned.');
  } else {
    Logger.log(result.queryResult.data);
  };
  
  Logger.log('now create table');
  createTable(result.queryResult.data, nlg);
  
  Logger.log('now create spreadsheet');
  var sheet = createSpreadSheet(result.queryResult.data, nlg); 
  Logger.log('remove spreadsheet');
 
  // var foo = DriveApp.getFileById(sheet).setTrashed(true);  // DriveApp.getFileById(spreadsheet.getId()).setTrashed(true);
  
  
  var restStr = 'No results'; 
  if (result.queryResult.pagination.totalRows > 0){
    
        restStr = '';
        const resultArry = result.queryResult.nl.display.split(' ');

        resultArry.forEach(function (n) {
          restStr = restStr + n + ' ';  
        });
    
        Logger.log(restStr);
  
  };

  if (resultType === 'spl') {
    text.setText(result.dslQuery);
  } else {
    text.setText(restStr);
  };
  
  
    
  });


  return texts.length;
}




