$('#map path').click(function() {
    $('#map path').each(function() {
       $(this).removeClass('active');  
    });
    $(this).addClass('active'); 
});
