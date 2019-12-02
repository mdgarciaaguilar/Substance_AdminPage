
var token = localStorage.getItem('token');
if (token) {
  token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
}


$('#getID_button').on('click', function(){


  $.ajax({
    url: 'https://quimicos-back.herokuapp.com/quimicos/' + $('#_id').val(),
    // url: 'http://localhost:3000/quimicos/' + $('#_id').val(),

    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'GET',
    dataType: 'json',

    success: function(data){
      //alert("Producto eliminado con exito");
      console.log('success: '+ data);
      //window.location = './index.html'
      $('#name').val(data.name);
      $('#acuteHealthEffects').val(data.acuteHealthEffects);
      $('#chronicHealthEffects').val(data.chronicHealthEffects);
      $('#eyeContact').val(data.eyeContact);
      $('#skinContact').val(data.skinContact);
      $('#seriousSkinContact').val(data.seriousSkinContact);
      $('#inhalation').val(data.inhalation);
      $('#seriousInhalation').val(data.seriousInhalation);
      $('#ingestion').val(data.ingestion);
      $('#seriousIngestion').val(data.seriousIngestion);
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });

});

$('#saveChanges_button').on('click', function(){

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
    url: 'https://quimicos-back.herokuapp.com/quimicos/' + $('#_id').val(),
    // url: 'http://localhost:3000/quimicos/' + $('#_id').val(),

    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'PATCH',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      alert("Producto modificado con exito");
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

$('#get_button').on('click', function(){
  window.location = './home.html'
})
$('#delete_button').on('click', function(){
  window.location = './delete.html'
})
