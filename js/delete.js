
var token = localStorage.getItem('token');
if (token) {
  token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
}
//console.log('https://elvina-pasteleria-back.herokuapp.com/products/' + $('#_id').val())

$('#signup_button').on('click', function(){

  json_to_send = {
    "_id" : $('#_id').val()
  };

  json_to_send = JSON.stringify(json_to_send);

  $.ajax({
    url: 'https://quimicos-back.herokuapp.com/quimicos/' + $('#_id').val(),
    // url: 'http://localhost:3000/quimicos/' + $('#_id').val(),

    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'DELETE',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      alert("Producto eliminado con exito");
      console.log('success: '+ data);
      window.location = './home.html'
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });

});


$('#add_button').on('click', function(){
  window.location = './add.html'
})

$('#update_button').on('click', function(){
  window.location = './update.html'
})
$('#get_button').on('click', function(){
  window.location = './home.html'
})
