function setTitle(pageId, nlg) {

  // This creates the header
  var title = pageId.insertShape(SlidesApp.ShapeType.TEXT_BOX, 20,10, 800, 30).getText().setText(nlg);
  title.getTextStyle().setFontFamily('Roboto');
  title.getTextStyle().setFontSize(20);
}

