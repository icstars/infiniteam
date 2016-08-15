'use strict'

$(document).ready(function(){
	$('#hiddenMessageBtn').click(function(val){
		var name = $('#name').val();
		$('#hiddenMessage').show();
		$('#insertName').html(name);
	});
});


$(document).ready(function(){
    $('#menuOptions').hide();
        
$('#menuOptionsButton').click(function() {
    $('#menuOptions').show();
    
})
                                 
// $("#startButton").click(function() {
 //   window.location = "justin.html" 
// })  
  $("#startButton").click(function() {
    window.location = "samplegame.html" 
 }) 
    $("#homeButton").click(function() {
    window.location = "courtney.html"                   
 })
    $("#bankButton").click(function() {
        window.location = "anna2.html"
    });
})
   $("#creditRoll").click(function() {
        window.location = "denzel.html"
    });

    
