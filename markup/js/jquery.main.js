jQuery(document).ready(function($){
	initMobileNav();
});

// mobile menu init
function initMobileNav() {
	var navopener = jQuery('.nav-opener'),
		navwrap   = jQuery('#nav'),
		navactive = 'nav-active';

	navopener.click(function() {
		jQuery('body').toggleClass(navactive);
	});

	jQuery('html').on('click', function(e) {
		var target = jQuery(e.target);
		if(!target.closest(navopener).length && !target.closest(navwrap).length) {
			jQuery('body').removeClass(navactive);
		}
	});
}