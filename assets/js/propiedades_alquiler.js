const propiedadesAlquiler = [
  {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    nombre: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    direccion: "123 Main Street, Anytown, CA 91234",
    caracteristicas: [" 2 Habitaciones |", " 2 Baños"],
    precio: "$2.000",
    fumar: false,
    mascotas: true,
  },
  {
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    nombre: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    direccion: "456 Ocean Avenue, Seaside Town, CA 56789",
    caracteristicas: [" 3 Habitaciones |", " 3 Baños"],
    precio: "$2.500",
    fumar: true,
    mascotas: true,
  },
  {
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    nombre: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
    direccion: "123 Main Street, Anytown, CA 91234",
    caracteristicas: [" 2 Habitaciones |", " 2 Baños"],
    precio: "$2.200",
    fumar: false,
    mascotas: false,
  },
  {
    src: "https://static.mansionglobal.com/production/media/article-images/06e618218b271d95524cb9de9f4fb291/large_BN-MV307_0303pp_M_20160229122040.jpg",
    nombre: "Increíble mansión en zona lujosa",
    descripcion:
      "Esta mansión está ubicada en una zona privilegiada y tranquila.",
    direccion: "41 Arvida PKwy, CA 87652",
    caracteristicas: [" 8 Habitaciones |", " 3 Baños"],
    precio: "$7.000",
    fumar: true,
    mascotas: true,
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/107753165.jpg?k=84cf5d1bbc126ad2daf4ef5bc2092b9430d76e88d7b2d4caaab1a83ba3048129&o=&hp=1",
    nombre: "Lujoso apartamento en Los Ángeles",
    descripcion:
      "Alojamiento con una ubicación ideal, tiene vistas a la ciudad y piscina al aire libre.",
    direccion: "W Olympic Blvd and Figueroa st, CA 90015",
    caracteristicas: [" 2 Habitaciones |", " 1 Baños"],
    precio: "$3.000",
    fumar: false,
    mascotas: true,
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/122306748.jpg?k=fca4888ece6e6fe5074e85ba84e4285b747649ca20478bb53a503f952e7151a7&o=&hp=1",
    nombre: "Arroyo Aspen",
    descripcion:
      "El monumento nacional Devil's Postpile se encuentra a 10 minutos en coche.",
    direccion: "865 Majestic Pines Drive, CA 93546",
    caracteristicas: [" 3 Habitaciones |", " 1 Baños"],
    precio: "$2.3000",
    fumar: true,
    mascotas: true,
  },
];


const contenedorPropiedadesAlquiler = document.querySelector("#listadoAlquiler");
let html = "";

for (const propiedad of propiedadesAlquiler) {
  html += `
  <div class="col-md-4 mb-4">
  <div class="card">
    <img
      src="${propiedad.src}"
      class="card-img-top"
      alt="Foto de ${propiedad.nombre}"
    />
    <div class="card-body">
      <h5 class="card-title">
        ${propiedad.nombre}
      </h5>
      <p class="card-text">
       ${propiedad.descripcion}
      </p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}
      </p>
      <p>
        <i class="fas fa-bed"></i>${propiedad.caracteristicas[0]}
        <i class="fas fa-bath"></i> ${propiedad.caracteristicas[1]}
      </p>
      <p><i class="fas fa-dollar-sign"></i>${propiedad.precio}</p>
      <p class="${
        propiedad.fumar ? "text-success" : "text-danger"
      }"><i class="${
    propiedad.fumar ? "fas fa-smoking" : "fas fa-smoking-ban"
  }"></i> ${propiedad.fumar ? "Permitido fumar" : "No se permite fumar"}
      </p>
      <p class="${propiedad.mascotas ? "text-success" : "text-danger"}">
          <i class="${propiedad.mascotas ? "fas fa-paw" : "fas fa-ban"}"></i>
          ${
            propiedad.mascotas
              ? "Mascotas permitidas"
              : "No se permiten mascotas"
          }
        </p>
    </div>
  </div>
</div>
    `;
}

contenedorPropiedadesAlquiler.innerHTML = html;
