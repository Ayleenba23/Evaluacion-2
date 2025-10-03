const trabajos = [
  { nombre: "ChocoCraft Station", curso: "Procesos de Producción", calificacion: 4.8, imagen: "images/chococraft.jpg" },
  { nombre: "Un Recuerdo Eterno", curso: "Fotogrametría y Modelado 3D", calificacion: 5.0, imagen: "images/recuerdo.jpg" },
  { nombre: "Carruaje Fantasía", curso: "Fotogrametría y Modelado 3D", calificacion: 6.9, imagen: "images/carruaje.jpg" },
  { nombre: "Guardianes Nocturnos", curso: "Taller de Diseño Biológicamente Integrado", calificacion: 6.6, imagen: "images/guardianes.jpg" },
  { nombre: "Mocktail – Romper el Hielo", curso: "Taller Producto", calificacion: 7.0, imagen: "images/mocktail.jpg" },
  { nombre: "Cromalux – Luminaria", curso: "Iluminación", calificacion: 5.3, imagen: "images/cromalux.jpg" },
  { nombre: "Velas Osito Cansadito", curso: "Procesos de Producción", calificacion: 5.0, imagen: "images/velas.jpg" },
  { nombre: "T-37 Mesa Transportadora", curso: "Práctica Profesional en Fabrinox", calificacion: 6.6, imagen: "images/mesa.jpg" },
  { nombre: "Porta-Herramientas CNC", curso: "Diseño y Manufactura Digital CAD-CAM", calificacion: 7.0, imagen: "images/porta.jpg" },
];

// Render de proyectos
const portafolio = document.getElementById("portafolio");
trabajos.forEach(trabajo => {
  const item = document.createElement("div");
  item.classList.add("gallery-item");
  item.innerHTML = `
    <img src="${trabajo.imagen}" alt="${trabajo.nombre}">
    <div class="gallery-overlay">
      <h3>${trabajo.nombre}</h3>
      <p>${trabajo.curso} · Nota: ${trabajo.calificacion}</p>
    </div>
  `;
  portafolio.appendChild(item);
});

// Gráfico Chart.js
const ctx = document.getElementById("gradesChart");
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: trabajos.map(t => t.nombre),
    datasets: [{
      label: "Calificación",
      data: trabajos.map(t => t.calificacion),
      backgroundColor: "#c7a6f2"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true, max: 7 }
    }
  }
});
