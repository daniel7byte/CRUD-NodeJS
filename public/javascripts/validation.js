$( "form" ).submit(function( event ) {
  if ($("#inputTitle").val() === "" ) {
    $('#flashTxt').text('Debes ingrsar el titulo!').show();
    $('.flashBox').show();
    return false;
  }else{
    return true;
  }
});
