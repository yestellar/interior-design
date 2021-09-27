$(function() {

  $(document).ready(function(){

    $('.contact__form-button').click(function(){
        $("#message_container").html("Sending...");
        // getting form data
        var user_name    = $('#form_name').val()
        var user_email   = $('#form_email').val()
        var user_message = $('#form_message').val()

        if (user_name == "" || user_email == "" || user_message == "") {
          $("#message_container").html("Please fill all fields")
          return
        }
        // отправляем данные
        var data = {
          service_id: 'service_q3hse16',
          template_id: 'template_33jd72n',
          user_id: 'user_IJB37yUREedGSRJFXNo4E',
          template_params: {
              'user_name': user_name,
              'replyTo': user_email,
              'message': user_message
          }
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json'
        }).done(function() {
          $("#message_container").html("Thank You! Message sent successfully")
        }).fail(function(error) {
          $("#message_container").html("Message failed to send, please contact to lee@knellerdesign.com")
        });
    });
  });

})
