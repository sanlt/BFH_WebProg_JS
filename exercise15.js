function getQuote() {
    return new Promise(function (resolve, reject) {
        $('#get-quote').on('click', function(){
            $.ajax({
                url: "https://www.sws.bfh.ch/~locher/webprog/services/quote.php",
                type: "GET",
                dataType: "text",
                success: function (data) {
                    $('#quote').html(data);
                },
                error: function (jqXHR, status, msg) {
                    $("#error").html("Error! " + msg);
                }
            });
        });
    });
}
getQuote();


