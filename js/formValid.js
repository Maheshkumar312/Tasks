function getData()
    {
      alert("success")
 
        
      var json={
        Name:$('#name').val(),
        email:$('#email').val(),
        password:$('#pwd').val(),
        eskill:$('#empskill').val(),
        radio:$('input[name="optradio"]:checked').val(),
        checkbox:$('#check').val(),
        
      };
      console.log(json)
    }
