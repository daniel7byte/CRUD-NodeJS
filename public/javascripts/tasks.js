function deleteTask(id){
  var confirmar = confirm('¿Esta seguro que quiere eliminar esta tarea?');
  if(confirmar){
    $.ajax({
      url: '/tasks/delete',
      method: 'post',
      data: {id: id},
      success: function(respuesta){
        if(respuesta){
          $('#row'+id).remove();
        }
      }
    });  
  }
}
