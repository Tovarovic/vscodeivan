// Registro de Mascotas y Dueños

// Mantenemos una única fuente de verdad global
let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];

// Variables
const formulario = document.getElementById("formularioMascota");

formulario.addEventListener("submit", guardarMascota);

document
  .getElementById("filtroTipo")
  .addEventListener("change", mostrarMascotas);
document
  .getElementById("filtroVacunas")
  .addEventListener("change", mostrarMascotas);

function guardarMascota(event) {
  event.preventDefault();

  const mascota = {
    nombreMascota: document.getElementById("nombreMascota").value.trim(),
    tipoMascota: document.getElementById("tipoMascota").value,
    edadMascota: parseInt(document.getElementById("edadMascota").value), // Convertimos a número para cálculos limpios
    nombreDuenho: document.getElementById("nombreDuenho").value.trim(),
    telefonoDuenho: document.getElementById("telefonoDuenho").value.trim(),
    tieneVacunas: document.getElementById("tieneVacunas").value,
  };

  // CORRECCIÓN: Modificamos la variable global directamente, no creamos una nueva con 'let'
  mascotas.push(mascota);

  // Sincronizamos con LocalStorage
  localStorage.setItem("mascotas", JSON.stringify(mascotas));

  alert("Mascota registrada exitosamente");
  formulario.reset();

  // Ahora sí se actualizarán con los datos reales vigentes
  mostrarMascotas();
  mostrarEstadisticas();
}

function calcularEdadHumana(tipo, edad) {
  // Aseguramos que opere con números
  const edadNum = Number(edad);
  if (tipo === "perro" || tipo === "gato") {
    return edadNum * 7;
  }
  return edadNum;
}

function mostrarMascotas() {
  let filtroTipo = document.getElementById("filtroTipo").value;
  let filtroVacunas = document.getElementById("filtroVacunas").value;
  let tbody = document.getElementById("tbody");

  tbody.innerHTML = "";

  for (let i = 0; i < mascotas.length; i++) {
    let mascota = mascotas[i];

    if (filtroTipo !== "todos" && mascota.tipoMascota !== filtroTipo) {
      continue;
    }

    if (filtroVacunas !== "todos" && mascota.tieneVacunas !== filtroVacunas) {
      continue;
    }

    let fila = document.createElement("tr");

    // Colores según tipo
    if (mascota.tipoMascota === "perro") {
      fila.style.backgroundColor = "#cce5ff";
    } else if (mascota.tipoMascota === "gato") {
      fila.style.backgroundColor = "#ffe5b4";
    } else if (mascota.tipoMascota === "ave") {
      fila.style.backgroundColor = "#d4edda";
    } else if (mascota.tipoMascota === "roedor") {
      fila.style.backgroundColor = "#f8d7da";
    }

    fila.innerHTML = `
            <td>${mascota.nombreMascota}</td>
            <td>${mascota.tipoMascota}</td>
            <td>${mascota.edadMascota}</td>
            <td>${mascota.nombreDuenho}</td>
            <td>${mascota.telefonoDuenho}</td>
            <td>${mascota.tieneVacunas === "true" ? "Sí" : "No"}</td>
            <td>${calcularEdadHumana(mascota.tipoMascota, mascota.edadMascota)}</td>
        `;

    tbody.appendChild(fila);
  }
}

function mostrarEstadisticas() {
  let perros = 0;
  let gatos = 0;
  let aves = 0;
  let roedores = 0;
  let otros = 0;
  let vacunadas = 0;

  for (let i = 0; i < mascotas.length; i++) {
    if (mascotas[i].tipoMascota === "perro") {
      perros++;
    } else if (mascotas[i].tipoMascota === "gato") {
      gatos++;
    } else if (mascotas[i].tipoMascota === "ave") {
      aves++;
    } else if (mascotas[i].tipoMascota === "roedor") {
      roedores++;
    } else {
      otros++;
    }

    if (mascotas[i].tieneVacunas === "true") {
      vacunadas++;
    }
  }

  let porcentaje = 0;

  if (mascotas.length > 0) {
    porcentaje = (vacunadas * 100) / mascotas.length;
  }

  document.getElementById("estadisticas").innerHTML =
    "Perros: " +
    perros +
    "<br>" +
    "Gatos: " +
    gatos +
    "<br>" +
    "Aves: " +
    aves +
    "<br>" +
    "Roedores: " +
    roedores +
    "<br>" +
    "Otros: " +
    otros +
    "<br>" +
    "Porcentaje de vacunadas: " +
    porcentaje.toFixed(0) +
    "%";
}

// Carga inicial
mostrarMascotas();
mostrarEstadisticas();
