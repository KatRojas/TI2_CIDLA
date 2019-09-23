<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <!-- Importa bootstrap, se usa ordenar los elementos -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <!-- Axios se usa para cargar la data json VueJS -->
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  <!-- VueJS se usa para mostrar la informacion -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
  <div class="container mt-4" id="app">
  <div class="row info-pannel">
    <!-- Foto temporal, eventualmente se cargara de json -->
    <div id="foto" class="col-sm-4">
      <img src="https://proxy.duckduckgo.com/ iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F49%2FElon_Musk_2015.jpg&f=1&nofb=1" width="200" height="267" alt="me">
    </div>
<!-- Informacion basica del paciente -->
    <div id="pac" class="col-sm-4">
      <h1 v-for="user of users">{{ user.name }}</h1>
      <p v-for="user of users">ID: {{ user.id }} GENERO: {{ user.genero }} </p> 
      <p v-for="user of users">EDAD: {{ user.edad }} FDN: {{ user.fdn }} </p> 
      <h1> Proxima visita </h1>
      <p v-for="user of users">{{ user.pvisita }}</p> 
      <p v-for="user of users">{{ user.sucursal }}</p> 
    </div>
<!-- Datos personales del paciente -->
    <div id="pers" class="col-sm-4">
      <h1>Informacion</h1>
      <p v-for="user of users">Estado civil: {{ user.ecivil }}</p> 
      <p v-for="user of users">Ocupacion: {{ user.ocupacion }}</p> 
      <p v-for="user of users">Sistema: {{ user.sistema }}</p> 
      <p v-for="user of users">Direccion: {{ user.direccion }}</p> 
      <p v-for="user of users">Telefono: {{ user.telefono }}</p>
      <p v-for="user of users">Correo: {{ user.correo }}</p>
    </div>
  </div>
  <div class="row">
<!-- Informacion medica del paciente -->
   <div id="inf" class="col-sm-4">
      <p>Alergias<p>
      <ul>
        <li v-for="user of users">{{ user.alergias }}</li>
      </ul>

      <p>Medicacion<p>
      <ul>
        <li v-for="user of users">{{ user.medicacion }}</li>
      </ul>

      <p>Codigo diagnosis<p>
      <ul>
        <li v-for="user of users">{{ user.cdiagnosis }}</li>
      </ul>

      <p>Procedimiento<p>
      <ul>
        <li v-for="user of users">{{ user.procedimiento }}</li>
      </ul>
    </div>
<!-- Informacion de las visitas previas -->
    <div id="proc" class="col-sm-4">
      <h1>Indicaciones</h1> 
      <p v-for="user of users">{{ user.indicaciones }}</p> 
      <h1>Inf ultima visita</h1>
      <p v-for="user of users">Fecha visita: {{ user.uvisita }}</p> 
      <p v-for="user of users">Procedimiento: {{ user.uprocedimiento }}</p> 
      <p v-for="user of users">Medico: {{ user.umedico }}</p> 
      <p>Palabras del paciente</p>
      <p v-for="user of users">{{ user.ppalabras }}</p> 
    </div>
  </div>

  </div>
  <script>
    var app = new Vue({
      el: '#app', //Elemento de id app
      data: {
        users: [] //Se crea un arreglo con los datos recibidos de la estructura json
      },
      mounted: function() {
        axios.get('https://api.myjson.com/bins/v8wkh') //Busca una estructura json en el servidor
            .then(response => {
              this.users = response.data;
              console.log(response);
            })
            .catch(error => { //Muestra error si la estructura no pudo cargarse
              console.log(error);
            });
      }
    })
  </script>
</body>
</html>