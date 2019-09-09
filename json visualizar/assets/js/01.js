var input = document.getElementById('file'),
  code = document.getElementById('code');

input.addEventListener('change', function() {
      var file = input.files[0];

      var reader = new FileReader();
      reader.onload = function(e) {
        var json;
        // Aquí mostramos el texto que contiene el archivo
        code.value = e.target.result;

        // Aquí guardamos en una variable el resultado de parsear el JSON
        json = JSON.parse(e.target.result);
      };
      reader.readAsText(file);
});
