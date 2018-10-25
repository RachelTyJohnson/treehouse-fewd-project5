$(document).ready(function() {
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc:'title'
		}
	});

	$("#searchbox").on("keyup", function() {
	    let value = $(this).val().toLowerCase();
	    $(".gallery-item a").filter(function() {
				if ( $(this).attr('title').toLowerCase().indexOf(value) > -1 ){
					$(this).parent().show();
				} else {
					$(this).parent().hide();
				}
	    });
	  });
});
