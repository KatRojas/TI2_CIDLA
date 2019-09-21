<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Registro</title>
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <div class="divlogin">
      <div class="container">
        <div class="divcont">
          <h3>{{ title }}</h3>
          <form @submit.prevent="sendForm()" method="POST" id="frmajax">
        		<input type="email" :class="{'error':validaEmail}" placeholder="Email" v-model="form.email" name="gmail" id="gmail" >
        		<input type="password" v-if="form.type!=1" :class="{'error':validaPassword}" placeholder="Contraseña" v-model="form.password" name="contra" id="contra">
        		<button id="btnguardar" >Iniciar sesion</button>
        		<a href="javascript:void(0)" @click="form.type=1" v-if="form.type!=1">Recuperar contraseña</a>
        		<a href="javascript:void(0)" @click="form.type=0" v-if="form.type!=0">Iniciar sesion</a>
        	</form>
        </div>
      </div>
    </div>
    <script src="assets/js/vue.min.js" charset="utf-8"></script>
    <script src="assets/js/sesion.js" charset="utf-8"></script>
    <script src="assets/js/jquery-3.2.1.min.js" charset="utf-8"></script>
  </body>
</html>
<script type="text/javascript">
	$(document).ready(function(){
		$('#btnguardar').click(function(){
			var datos=$('#frmajax').serialize();
			$.ajax({
				type:"POST",
				url:"c_login.php",
				data:datos,
				success:function(r){
					if(r==1){
						window.location.replace("inicio.php");
					}else if (r==2) {
            alert("Error al ingresar");
          }
				}
			});

			return false;
		});
	});
</script>
