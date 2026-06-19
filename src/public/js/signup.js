console.log("Signup frontend javascript file");

$(function(){     });

    //   $(".member-nick").click(function() {
    //     alert(".member-phone").toggle();
    //   });
    // 
function validateSignupForm() {
        // console.log("Executed validateSignupForm");
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const memberPassword = $(".confirm-password").val();

    if (
    memberNick === "" || 
    memberPhone === ""  ||
    memberPassword === "" ||
    confirmPassword === "" 
    ) {
        alert ("Please insert all required inputs");
        return false;
    }

    if (memberPassword !== confirmPassword) {
        alert("Password differs, please check!")
        return false;
    }

    
}

