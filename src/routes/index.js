var n1 = "hola mundo"

const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about',(req, res)=>{
  res.render('about');
});


router.post('/send-email', async (req, res) => {
  //var n = 'bryanalejandro132@gmail.com';
  var codigo = Math.floor(Math.random() * ((999999+111111)-1)+111111);
  var cod2 = codigo.toString();
  const { email } = req.body;

  contentHTML = `
        <h1>CODIGO DE VERIFICACION</h1>
        <ul>
        Usar este codigo en la pagina para verificar que es el usuario correcto.
        </ul>
        <p>Codigo: ${cod2}</p>
    `;

  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
          user: 'bryanalejandro132@gmail.com',
          pass: 'bryan2017'
      },
      tls: {
          rejectUnauthorized: false
      }
  });

  let info = await transporter.sendMail({
      from: '"Prueba server" <bryanalejandro132@gmail.com>', 
      to: email, //aqui tendremos que reemplazar por variable que venga con el correo del otro formulario
      subject: 'Verificacion',
      //text: cod2
      html: contentHTML
  });
  
  console.log('Message sent', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  res.redirect('/codigo2')

});

module.exports = router;

function newFunction() {
  return document.email.value;
}
