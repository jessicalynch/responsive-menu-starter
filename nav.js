/*
* Pure JavaScript and CSS Responsive Nav Starter
* Author: Jessica Lynch
* Author URI: https://jlyn.dev
* Version: 1.0
*/

(function() {
    
    // options
    const sticky = true; // fixed header on scroll
    const scrollOffset = 75; // vertical offset in px -- when sticky class is added
    
    // dom elements
    const header = document.getElementById('masthead');
    const button = document.getElementById('masthead__button');
    const menu = document.getElementById('masthead__menu'); // ul element
    
	if (!header || !button) {
		return;
	}

    if (!menu) {
        button.style.display = 'none';
		return;
	}
    
    // start with closed menu
    header.classList.add('collapsed');
    var headerHeight;
    menu.style.height = 0 + 'px';
    
    // toggle menu open/closed
    button.onclick = function() {
        
        // expand
        if (header.classList.contains('collapsed')) {
            header.classList.remove('collapsed');
            header.classList.add('expanded');
            headerHeight = menu.scrollHeight;
            menu.style.height = headerHeight + 'px';
        // collapse
        } else {
            header.classList.remove('expanded');
            header.classList.add('collapsed');
            menu.style.height = 0 + 'px';
        }
        
        window.console.log(header.scrollHeight);
    }
    
    // add `fixed` class on scroll
    if (sticky === true) {
        window.onscroll = function() {
            var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

            if (scrollTop > scrollOffset) {
                header.classList.add('fixed');
            } else {
                header.classList.remove('fixed');
            }
        }
    }

})();
