//App de registro de mascotas

//Variables
const formulario = document.getElementById("formularioMascota");

//Funciones
function cargarMascota(event) {
  event.preventDefault();

  const mascota = {
    nombreMascota: document.getElementById("nombreMascota").value.trim(),
    tipoMascota: document.getElementById("tipoMascota").value,
    edadMascota: document.getElementById("edadMascota").value,
    nombreDuenho: document.getElementById("nombreDuenho").value.trim(),
    telefonoDuenho: document.getElementById("telefonoDuenho").value.trim(),
    tieneVacunas: document.getElementById("tieneVacunas").value,
  };

  let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
  mascotas.push(mascota);
  localStorage.setItem("mascotas", JSON.stringify(mascotas));

  alert("Mascota registrada exitosamente");
  formulario.reset();
  mostrarMascotas();
}

function mostrarMascotas() {
  const mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  mascotas.forEach((mascota) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${mascota.nombreMascota}</td>
      <td>${mascota.tipoMascota}</td>
      <td>${mascota.edadMascota}</td>
      <td>${mascota.nombreDuenho}</td>
      <td>${mascota.telefonoDuenho}</td>
      <td>${mascota.tieneVacunas === "true" ? "Sí" : "No"}</td>
    `;
    tbody.appendChild(fila);
  });
}

//Eventos
formulario.addEventListener("submit", cargarMascota);

document.addEventListener("DOMContentLoaded", () => {
  mostrarMascotas();
});
