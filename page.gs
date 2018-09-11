// INSERT A NEW PAGE INTO THE PRESENTATION
// RETURN THE PAGEID

function createNewPage() {
  var presentationId = SlidesApp.getActivePresentation().getId(); 
  var slides = SlidesApp.getActivePresentation().getSlides();
  var insertPoint = slides.length - 1;
  var pageId = SlidesApp.getActivePresentation().insertSlide(insertPoint);
  
  // change background to white
  pageId.getBackground().setSolidFill('#FFFFFF');
  
  return pageId;
}

