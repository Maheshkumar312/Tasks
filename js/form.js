function f1()
    {
 alert($('#email').val())
 alert($('#pwd').val())
        
      var json={
        email:$('#email').val(),
        password:$('#pwd').val()
      };
      console.log(json)
    }
