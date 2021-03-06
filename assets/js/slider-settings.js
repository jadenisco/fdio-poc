/**
 * Slider Setting
 */
jQuery(window).load(function () {
    jQuery('.slider-cycle').cycle({
        fx: 'fade',
        pager: '#controllers',
        activePagerClass: 'active',
        timeout: 2000,
        speed: 1000,
        pause: 1,
        pauseOnPagerHover: 1,
        width: '100%',
        containerResize: 0,
        fit: 1,
        after: function () {
            jQuery(this).parent().css("height", jQuery(this).height())
        },
        cleartypeNoBg: true
    })
});