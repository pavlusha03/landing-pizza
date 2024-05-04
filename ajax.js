document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('.order__form');
const successMessage = document.getElementById('success-message'); 
const submitButton = document.querySelector('.order__form .btn'); 

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        let formData = new FormData(form); 
        fetch('Fake_backend_url', { 
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Произошла ошибка при отправке заказа');
            }
            return response.text();
        })
        .then(data => {
            form.reset();
            successMessage.textContent = 'Спасибо за заказ';
        })        
    });
        let nameInput = document.getElementById('name');
        nameInput.addEventListener('input', function() {
            this.value = this.value.replace(/\./g, '');
        })
        $(document).ready(function($) {
        $('.popup-open').click(function() {
            $('.popup-fade').fadeIn();
            return false;
        });	
        
        $('.popup-close').click(function() {
            $(this).parents('.popup-fade').fadeOut();
            return false;
        });		
     
        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.popup-fade').fadeOut();
            }
        });
        $('.popup-fade').click(function(e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();					
            }
        });
    });
});