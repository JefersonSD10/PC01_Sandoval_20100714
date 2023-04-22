const profesionales = [
    {
      nombre: "John Doe",
      correo: "john.doe@example.com",
      foto: "https://randomuser.me/api/portraits/men/1.jpg",
      github: "https://github.com/johndoe"
    },
    {
      nombre: "Jane Smith",
      correo: "jane.smith@example.com",
      foto: "https://randomuser.me/api/portraits/women/2.jpg",
      github: "https://github.com/janesmith"
    },
    {
      nombre: "Bob Johnson",
      correo: "bob.johnson@example.com",
      foto: "https://randomuser.me/api/portraits/men/3.jpg",
      github: "https://github.com/bobjohnson"
    },
    {
      nombre: "Emily Davis",
      correo: "emily.davis@example.com",
      foto: "https://randomuser.me/api/portraits/women/4.jpg",
      github: "https://github.com/emilydavis"
    },
    {
      nombre: "Bryan Canston",
      correo: "brian.cns@example.com",
      foto: "https://randomuser.me/api/portraits/women/7.jpg",
      github: "https://github.com/emilydavis"
    },
    {
      nombre: "Richard Nixon",
      correo: "rich.nx@example.com",
      foto: "https://randomuser.me/api/portraits/men/4.jpg",
      github: "https://github.com/emilydavis"
    }
  ];
  
  const listaProfesionales = document.getElementById("profesionales");
  
  profesionales.forEach((profesional) => {
    const elementoProfesional = document.createElement("li");
    elementoProfesional.classList.add("profesional");
  
    const imagen = document.createElement("img");
    imagen.src = profesional.foto;
  
    const info = document.createElement("div");
  
    const nombre = document.createElement("h2");
    nombre.textContent = profesional.nombre;
  
    const correo = document.createElement("p");
    correo.textContent = profesional.correo;
  
    const botonGithub = document.createElement("a");
    botonGithub.href = profesional.github;
    botonGithub.textContent = "GitHub";
    botonGithub.target = "_blank";
  
    info.appendChild(nombre);
    info.appendChild(correo);
    info.appendChild(botonGithub);
  
    elementoProfesional.appendChild(imagen);
    elementoProfesional.appendChild(info);
  
    listaProfesionales.appendChild(elementoProfesional);
  });
  