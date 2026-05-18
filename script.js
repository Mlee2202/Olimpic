let indice = 0;

const tablas =
document.querySelectorAll(".tabla");

function mostrarTabla(){

  tablas.forEach(tabla => {
    tabla.classList.remove("visible");
  });

  tablas[indice].classList.add("visible");
}

function siguiente(){

  indice++;

  if(indice >= tablas.length){
    indice = 0;
  }

  mostrarTabla();
}

function anterior(){

  indice--;

  if(indice < 0){
    indice = tablas.length - 1;
  }

  mostrarTabla();
}

mostrarTabla();
