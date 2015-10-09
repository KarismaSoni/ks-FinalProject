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
});






