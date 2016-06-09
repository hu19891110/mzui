$(function() {
    $('#headNav').display({
        selector: 'a:not(.brand-name)',
        activeClass: 'active',
        target: '#navs',
        trigger: 'click',
        load: true,
        shown: function() {
            $('#navs > a[data-display-auto]').trigger('click');
        }
    });
});
