//javascript lectura de documentos
function comenzar() {
  data_zone = document.getElementById("data-zone");
  var archivos = document.getElementById("archivos");
  archivos.addEventListener("change",procesar, false);
}

function procesar(e) {
  var archivos = e.target.files;
  var mi_archivo = archivos[0];
  var lectura  = new FileReader();
  lectura.readAsText(mi_archivo);
  lectura.addEventListener("load", mostrar_datos, false);
}

function mostrar_datos(e) {
  var resultado = e.target.result;
  data_zone.innerHTML = resultado;
}

window.addEventListener("load", comenzar, false);
