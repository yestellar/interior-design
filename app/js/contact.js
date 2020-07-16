$(function() {

  $(document).ready(function(){

    $('.contact__form-button').click(function(){
        // getting form data
        var user_name    = $('#form_name').val()
        var user_email   = $('#form_email').val()
        var user_message = $('#form_message').val()

        if (user_name == "" || user_email == "" || user_message == "") {
          $("#message_container").html("Please fill all fields")
          return
        }
        // отправляем данные
        $.ajax({
            url: "php/send.php", // php mail script
            type: "post", // method
            data: {
                "name":    user_name,
                "email":   user_email,
                "message":   user_message,
            },
            error:function(){$("#message_container").html("An error has occurred. Please contact directly to lee@knellerdesign.com");},
            // if error
            beforeSend: function() {
                $("#message_container").html("Your message is sending. Please wait...");
            },
            success: function(result){
            // If ok
                $('#message_container').html(result);
                console.log("Mail was sent");
            }
        });
    });
  });

})
