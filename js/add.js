
var token = localStorage.getItem('token');
if (token) {
  token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
}


$('#signup_button').on('click', function(){

  json_to_send = {
    "name" : $('#name').val(),
    "acuteHealthEffects" : $('#acuteHealthEffects').val(),
    "chronicHealthEffects" : $('#chronicHealthEffects').val(),
    "eyeContact" : $('#eyeContact').val(),
    "skinContact" : $('#skinContact').val(),
    "seriousSkinContact" : $('#seriousSkinContact').val(),
    "inhalation" : $('#inhalation').val(),
    "seriousInhalation" : $('#seriousInhalation').val(),
    "ingestion" : $('#ingestion').val(),
    "seriousIngestion" : $('#seriousIngestion').val()
  };

  json_to_send = JSON.stringify(json_to_send);

  $.ajax({
    url: 'https://quimicos-back.herokuapp.com/quimicos' ,
    // url: 'http://localhost:3000/quimicos',

    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      alert("Producto creado con exito");
      console.log('success: '+ data);
      window.location = './home.html'
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });

});


$('#get_button').on('click', function(){
  window.location = './home.html'
})

$('#update_button').on('click', function(){
  window.location = './update.html'
})
$('#delete_button').on('click', function(){
  window.location = './delete.html'
})
