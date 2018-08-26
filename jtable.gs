function createTable(results, nlg) {
  
  var presentationId = SlidesApp.getActivePresentation().getId(); 
  // Logger.log(presentationId);
  
  var slides = SlidesApp.getActivePresentation().getSlides();
  var pageId = SlidesApp.getActivePresentation().insertSlide(slides.length);
   Logger.log(slides.length);
  
 Logger.log('Insane but the only way I think I can do this');
 var title = pageId.insertTable(1, 1);
 title.setLeft(10);
 title.setTop(10);
 title.getCell(0, 0).getText().setText(String(nlg));
  
  Logger.log('Well it did not break');
  
  if (results) {
  
  var table = pageId.insertTable(results.length, results[0].length);
  
  // Populate the table with result data.
  for (var i = 0; i < results.length; i++) {
    for (var j = 0; j < results[0].length; j++) {
      table.getCell(i, j).getText().setText(String(results[i][j]));
    }
  }
  };

}

