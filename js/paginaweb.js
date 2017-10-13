$(document).ready(function()
{

      $('.parallax').parallax();

      $('#btn_send').click(function()
      {

      	var name = $('#name').val();
      	var email = $('#email').val();
      	var input_text = $('#input-text').val();
            
            var exp_name = /^[a-zA-Z.\s]+(?!.*[\!\"\#\$\%\&\/\(\)\=\?\¡\¿\+\´\*\¨\]\[\{\}\-\,\<\>\|\°\¬])/;
            var exp_email = /^[a-zA-Z\.\-\_]+[@][a-zA-Z]{3,}[\.][.\w]+/;

      	if(exp_email.test(email) && exp_name.test(name))
            {
                  alert("Mensaje Enviado")
            }
            else
            {
                  alert("Algun Campo es Incorrecto")
            }


      });
});