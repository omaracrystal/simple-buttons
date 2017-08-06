(function ($, window, document, undefined) {

    'use strict';

    $(function () {

        $('input').on('change', function () {
            $(this).prev('.input-group-addon').removeClass('input-reg').addClass('input-hover');
        });

    });

})(jQuery, window, document);
