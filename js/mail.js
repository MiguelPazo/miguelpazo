$(document).ready(function () {
    $('#contact_form').submit(function (e) {
        e.preventDefault();

        var data = e.serialize();
        var url = $(this).attr('action');

        $.get(url, data, function (response) {
            if (response.success) {

            }

            $('#response_message').text(response.message);
        });
    });
});