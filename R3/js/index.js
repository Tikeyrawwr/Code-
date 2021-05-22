//**Informacion del modal solamente  */
var modal = document.getElementById("Modal_interno");
var btn = document.getElementById("Abrir_Modal");
var span = document.getElementsByClassName("Cerrar")[0];
/*Fin Modales*/

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 