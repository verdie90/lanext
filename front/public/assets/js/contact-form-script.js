!(function ($) {
    'use strict'
    function a() {
        $('#contactForm')
            .removeClass()
            .addClass('shake animated')
            .one(
                'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                function () {
                    $(this).removeClass()
                },
            )
    }
    function b(b, c) {
        if (b) var a = 'h4 tada animated text-success'
        else var a = 'h4 text-danger'
        $('#msgSubmit').removeClass().addClass(a).text(c)
    }
    $('#contactForm')
        .validator()
        .on('submit', function (c) {
            var d, e, f, g, h
            c.isDefaultPrevented()
                ? (a(), b(!1, 'Did you fill in the form properly?'))
                : (c.preventDefault(),
                  (d = $('#name').val()),
                  (e = $('#email').val()),
                  (f = $('#msg_subject').val()),
                  (g = $('#phone_number').val()),
                  (h = $('#message').val()),
                  $.ajax({
                      type: 'POST',
                      url: 'assets/php/form-process.php',
                      data:
                          'name=' +
                          d +
                          '&email=' +
                          e +
                          '&msg_subject=' +
                          f +
                          '&phone_number=' +
                          g +
                          '&message=' +
                          h,
                      success: function (c) {
                          'success' == c
                              ? ($('#contactForm')[0].reset(),
                                b(!0, 'Message Submitted!'))
                              : (a(), b(!1, c))
                      },
                  }))
        })
})(jQuery)
