//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

// var $body = $('body'); 
// var $list-items = $('ul').children();
// this would create a variable representing the body elements

//Capture click event on image 
//Prevent new page from opening on click

$(document).ready(function() {

	var $overlay = $('<div id="overlay"></div>');
	var $image = $('<img></img>');
	var $caption = $('<p></p>');

	$('body').append($overlay);
	$overlay.append($image);
	$overlay.append($caption);
	// shows overlay when user clicks on image
	$('#imageGallery a').on('click', function(event) {
		event.preventDefault();
		$overlay.show();

		var location = $(this).attr('href');
		$image.attr('src', location);

		var captionText = $(this).children().attr('alt');
		console.log(captionText);

		$caption.text(captionText);
	})

	// hides overlay when user clicks on it
	$($overlay).on('click', function() {
		$overlay.hide();
	})

})








