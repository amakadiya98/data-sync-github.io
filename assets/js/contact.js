  $(document).ready(function () {
    const phoneInputField = document.querySelector(".country-dropdown");
    const phoneInput = window.intlTelInput(phoneInputField, {
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
  });

  $(document).ready(function () {
    $('#message').on('input', function() {
        $('#charCount').text(this.value.length);
      });      
  })