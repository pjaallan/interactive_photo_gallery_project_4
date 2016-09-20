//variable for overlay so we can call it from where ever
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $arrow-l = $();

//Add image to overlay
$overlay.append($image);

//Add caption to image
$overlay.append($caption);

//Add overlay div to page body
$("body").append($overlay);

//Capture mouse click event on image thumb nail to trigger lightbox
$(".gallery a").click(function(event) {	
	event.preventDefault(); //Prevents mouse click opening the image link, we don't want that!	
	var imageLocation = $(this).attr("href"); //Creates variable containing all the href links in class="gallery"

	$image.attr("src", imageLocation);  //Insert image into the overlay when clicked
	$overlay.show(); //Display overlay to cover the page
	
	//Add alt attribute as caption on image
	var $captionText = $(this).children("img").attr("alt");
	$caption.text($captionText);
});

// Hide the overlay and image when clicked
 $overlay.click(function(){
 	$overlay.hide();
 });

 

 
  //2.1 add image
  //2.2 add caption

 
