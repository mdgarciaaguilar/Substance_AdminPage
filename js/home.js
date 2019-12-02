var token = localStorage.getItem('token');
if (token) {
  token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
}


$('#get_button').on('click', function(){
  $.ajax({
    // url: 'http://localhost:3000/quimicos',
    url: 'https://quimicos-back.herokuapp.com/quimicos',
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data)

      $('#quimicos-list').empty()

      let newHtml = ''

      for( let i = 0; i < data.length; i++) {
        // aqui va su código para agregar los elementos de la lista
        //console.log(data[i].description)
        newHtml += `
          <li class="listReq" style="list-style-type:none">
          <legend name="producto" value=${data.length + 1}>
          <span><h1>${data[i].name}</h1></span>
          <span>ID: ${data[i]._id}</span>
          <span><h2>Hazards: </h2></span>
          <div><strong>Potential Acute Health Effects: </strong>${data[i].acuteHealthEffects}</div>
          <div><strong>Potential Chronic Health Effects: </strong>${data[i].chronicHealthEffects}</div>
          <span><h2>First Aid: </h2></span>
          <div><strong>Eye Contact:</strong> ${data[i].eyeContact}</div>
          <div><strong>Skin Contact:</strong> ${data[i].skinContact}</div>
          <div><strong>Inhalation:</strong> ${data[i].inhalation}</div>
          <div><strong>Ingestion:</strong> ${data[i].ingestion}</div>
          `
        
          newHtml += `
          <div></div>
          </li>`
        // algo asi:
        // addTodo(data[i]._id, data[i].description, data[i].completed)
        // no tienen que usar la funcion de addTodo, es un ejemplo

      }
      $('#quimicos-list').append(newHtml)
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });
})


$('#add_button').on('click', function(){
  window.location = './add.html'
})

$('#update_button').on('click', function(){
  window.location = './update.html'
})
$('#delete_button').on('click', function(){
  window.location = './delete.html'
})


//logout
$('#logout_button').on('click', function(){

  $.ajax({
    // url: 'http://localhost:3000/logout',
    url: 'https://quimicos-back.herokuapp.com/quimicos',
    headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + token
    },
    method: 'POST',
    data: 'json',
    dataType: 'json',
    success: function(data){
      alert("Logout");
      window.location = './index.html'
    },
    error: function(error_msg) {
      // alert("error");
      window.location = './index.html'
    }
  });

});