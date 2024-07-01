

const propiedadesAlquiler = [
    {
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      nombre: "Apartamento de lujo en zona exclusiva",
      descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
      direccion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      caracteristicas: [" 4 Habitaciones |", " 4 Baños"],
      precio: "$5000",
      fumar: false,
      mascotas: false,
    },
    {
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      nombre: "Apartamento acogedor en la montaña",
      descripcion:
        "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
      direccion: "789 Mountain Road, Summit Peaks, CA 23456",
      caracteristicas: [" 2 Habitaciones |", " 1 Baños"],
      precio: "$1.200",
      fumar: true,
      mascotas: true,
    },
    {
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      nombre: "Penthouse de lujo con terraza panorámica",
      descripcion:
        "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
      direccion: "567 Skyline Avenue, Skyview City, CA 56789",
      caracteristicas: [" 3 Habitaciones |", " 3 Baños"],
      precio: "$4.500",
      fumar: false,
      mascotas: true,
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/460766500.jpg?k=874b22b3a421ae82fae59d0ae12d391f5d693f46b7e91d1b1bcde22d8edba9a7&o=&hp=1",
      nombre: "Departamento remodelado cerca de Koreatown",
      descripcion:
        "Este hermoso departamento se encuentra en el barrio de Hollywood.",
      direccion: "616 North Normandie Avenue, CA 90004",
      caracteristicas: [" 3 Habitaciones |", " 1 Baños"],
      precio: "$3.500",
      fumar: true,
      mascotas: true,
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/532159728.jpg?k=b667cf273ed137e06b942e5606e400d06ff211d30a8e3109887b81910cb64cf0&o=&hp=1",
      nombre: "Enorme Penthouse con vistas a todo San Diego",
      descripcion:
        "Ofrece un balcón con vistas al mar y a la montaña, hermosa piscina.",
      direccion: "1025 Island Avenue, CA 92101",
      caracteristicas: [" 4 Habitaciones |", " 1 Baños"],
      precio: "$3.500",
      fumar: true,
      mascotas: true,
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/388038447.jpg?k=71c52c357d73f25d76449fefe257226f6a8f4b5a4b0f14876787d63b9b93fec3&o=&hp=1",
      nombre: "Hermosa casa en el campo",
      descripcion: "Jardín con piscina al aire libre, incluye un sauna y bañera de hidromasaje. además de un lugar muy tranquilo.",
      direccion: "400 Squaw Creek Road, Olympic Valley, CA 96146",
      caracteristicas: [" 6 Habitaciones |", " 2 Baños"],
      precio: "$6.700",
      fumar: true,
      mascotas: true,
    },
  ];
  

  
  const contenedorPropiedadVenta = document.querySelector("#listadoVenta");
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
  
  contenedorPropiedadVenta.innerHTML = html;
  