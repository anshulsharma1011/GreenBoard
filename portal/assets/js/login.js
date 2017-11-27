/**
 * Created by Ritik on 07-08-2017.
 */
$(document).ready(function(){
    $(".login-preloader").hide();
    $(".password-form").hide();
    $(".next").click(function(){
        //Ajax Function Here
        if($(this).closest("form").find("input").val() == ""){
            $("p#error-username").html("<i class='fa fa-exclamation-triangle'></i> I don't think you understand the concept of username.");
        }
        else{
            $(".login-preloader").show();
            $("main").addClass("opac-07");
            setTimeout(function(){
                $(".login-preloader").fadeOut(300);
                $("main").addClass("opac-10");
                $(".username-form").hide();
                $(".password-form").fadeIn();
                $(".password-form").find("input").focus();
            },2000);
        }
    });
    $(".log-in").click(function(){
        //Ajax Function Here
        if($(this).closest("form").find("input").val() == ""){
            $("p#error-password").html("<i class='fa fa-exclamation-triangle'></i> You can not fool me with a blank password!");
        }
        else{
            if($(this).attr("id") == "faculty-login-button"){
                window.location.href="welcome-faculty.html";
            }
            else if($(this).attr("id") == "student-login-button"){
                window.location.href="welcome-student.html";
            }
        }
    });
    $("input").keypress(function(){
        $("p.error").html("");
    });
    $(".back").click(function(){
        $(".password-form").hide();
        $(".username-form").fadeIn();
        $(".username-form").find("input").focus();
    });
});
