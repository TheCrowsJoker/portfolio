$(document).ready(function () {
    var phrase = "'";

    $('#input').change(function() {
        var text = $('#input').val();
        if (text === phrase) {
            $(".catcher").addClass("allowedAccess");
        }
    });
    if (!$(".catcher").hasClass("allowedAccess")) {
        setInterval(function() {
            $('#input').focus();
        }, 1000);
    }
});
