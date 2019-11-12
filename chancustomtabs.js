jQuery(document).ready(function($) {
	/* Blurbs as Tabs */
	$('.tab-title').each(function () {	
		var section_id = $(this).find("a").attr("href");
		$(this).find("a").removeAttr("href");	
		$(this).click(function() {
			$(this).siblings().removeClass("active-tab");
	                $(this).addClass("active-tab");
			$('.tab-content').hide();
			$(section_id).show();
		});
	});
});