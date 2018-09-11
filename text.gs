function setText(pageId, nlg, x, y, w, h) {

  // This creates the text box
  Logger.log('set text to %s', nlg);
  var textbox = pageId.insertShape(SlidesApp.ShapeType.TEXT_BOX,x,y,w,h).getText().setText(nlg);
  textbox.getTextStyle().setFontFamily('Roboto');
  textbox.getTextStyle().setFontSize(12);
}

