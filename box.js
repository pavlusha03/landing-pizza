$(document).ready(function() {
    $('.product-image').click(function() {
        var fullImageUrl = $(this).data('full-image');
        openFullScreenImage(fullImageUrl);
    });

    function openFullScreenImage(url) {
        var modal = $('<div class="modal"></div>');
        var image = $('<img src="' + url + '" alt="Full Screen Image">');

        modal.append(image);
        $('body').append(modal);

        modal.click(function() {
            modal.remove();
        });
    }
});