$(document).ready(function(){
    $('#menuOptions').hide();
        
$('#menuOptionsButton').click(function() {
    $('#menuOptions').show();
    
})
                                 
// $("#startButton").click(function() {
 //   window.location = "gamepage.html" 
// })  
  $("#startButton").click(function() {
    window.location = "samplegame1.html" 
 }) 
    $("#homeButton").click(function() {
    window.location = "home-page.html"                   
 })
    $("#bankPage").click(function() {
        window.location = "Bank.html"

})  
        $("#reStart").click(function() {
         window.location.reload()
    })
    $("#logOut").click(function() {
    window.location = "login-page.html"                   
 })

    $("#creditRoll").click(function() {
    window.location = "credits.html" 
})
    
});