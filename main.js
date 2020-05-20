var database = firebase.database();
var contactRef = database.ref("contact/");
$("#success").hide();
$("#myform").on('submit', (e)=> {
    e.preventDefault();
    $("#submit-btn").html("Please Wait...").attr("disabled", true);
    var name = $("#name-field").val();
    var email = $("#email-field").val();
    var subject = $("#subject-field").val();
    var message = $("#message-field").val();
    if(name == '' || email == '' || subject == '' || message == ''){
        alert('Please enter all fields before submitting');
    }
    else{
        var newMessage = contactRef.push();
        newMessage.set({
            name: name,
            email: email,
            subject: subject,
            message: message,
            status: false
        }).then(() => {
            $("#submit-btn").html("Send Message").attr("disabled", false);
            $("#myform").hide();
            $("#success").show();
        }).catch((err) => {
            alert("There was an error: "+err);
        });
    }
});





// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

