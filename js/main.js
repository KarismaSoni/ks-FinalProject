jQuery(document).ready(function($){
	//open the lateral panel
	$('ul.tabs li').on('click', function(e){
		e.preventDefault();
		var tabId = $(this).attr('data-tab');
		$('.ks-main-content').addClass('ks-slide-left');
		$('ul.tabs li').removeClass('is-visible');
		$('.ks-sub-pages').removeClass('is-visible');
		$("#" + tabId).addClass('is-visible');
	});
	//clode the lateral panel
	$('.ks-sub-pages').on('click', function(event){
		if( $(event.target).is('.ks-sub-pages') || $(event.target).is('.ks-sub-pages-close') ) { 
			$('.ks-sub-pages').removeClass('is-visible');
			$('.ks-main-content').removeClass('ks-slide-left');
			event.preventDefault();
		}
	});
	
	// Contact Form
	$('.ks-error-message').hide();
	$("#submit-form").click(function (e) {
		e.preventDefault();
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		$("#ks-return-message").empty();
		// Checking for blank fields.
		if (name == '' || email == '') {
			$('.ks-error-message').show();
		} else {
			$('.ks-error-message').hide();
			$.post("php/contact_form.php", {
				name: name,
				email: email,
				message: message
			}, function (data) {
				$("#ks-return-message").append(data);
				if (data == "Thank You for contacting me. I will get back to you soon.") {
					// $("#form input").val("");; // To reset form fields on success.
				}
			});
		}
	});
});






