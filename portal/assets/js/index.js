/**
 * Created by Ritik on 07-08-2017.
 */
$(document).ready(function(){
    $(".welcome-to-greenboard").find("*").hide();
    setTimeout(function(){
        $(".welcome-to-greenboard").find("h3").fadeIn(600);
    },1200);
    setTimeout(function(){
        $(".welcome-to-greenboard").find("h3").fadeOut(600); //Welcome to GreenBoard - Gone
    },3000);
    setTimeout(function(){
        $(".welcome-to-greenboard").find("h5").fadeIn(600);
    },3600);
    setTimeout(function(){
        $(".welcome-to-greenboard").find("h5").fadeOut(600); //GreenBoard paragraph- Gone
    },10100);
    setTimeout(function(){
        $(".welcome-to-greenboard").find("p").fadeIn(600);
    },10700);
    setTimeout(function(){
        $(".welcome-to-greenboard").find("p").fadeOut(600); // Tell us who you are - Gone
    },12600);
    setTimeout(function(){
        $(".welcome-to-greenboard").find("a").fadeIn(600);
        $(".welcome-to-greenboard").find(".not-anyone").fadeIn(600);
    },13100);
    $("#skip").click(function(){
        var highestTimeoutId = setTimeout(";");
        for (var i = 1 ; i < highestTimeoutId ; i++) {
            clearTimeout(i);
        }
        setTimeout(function(){
            $(".preloading-screen").fadeOut(500);
        },1000);
        $(".welcome-to-greenboard").find("*").hide();
        $(".welcome-to-greenboard").find("a").show();
        $(".welcome-to-greenboard").find(".not-anyone").show();
    });
});
$("html").keypress(function(e){
    if(e.keyCode == 13){
        $("#skip").click();
        Materialize.toast("Skipped!", 3000, "rounded green")
    }
});