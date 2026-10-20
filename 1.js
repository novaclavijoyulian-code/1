document.getElementById("btnJean").addEventListener("click", function() {
    document.getElementById("mensajeJean").textContent = "Seleccionaste el jean más chimba del mundo";
    document.getElementById("mensajeChaqueta").textContent = "";
    document.getElementById("mensajeCamiseta").textContent = ""
});

document.getElementById("btnChaqueta").addEventListener("click", function() {
    document.getElementById("mensajeChaqueta").textContent = "Seleccionaste la chaqueta más chimba del mundo";
    document.getElementById("mensajeCamiseta").textContent = "";
    document.getElementById("mensajeJean").textContent = ""
});

document.getElementById("btnCamiseta").addEventListener("click", function() {
    document.getElementById("mensajeCamiseta").textContent= "Seleccionaste la camiseta más chimba del mundo";
    document.getElementById("mensajeChaqueta").textContent = "";
    document.getElementById("mensajeJean").textContent = ""
});