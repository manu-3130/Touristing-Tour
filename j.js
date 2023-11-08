const informacion = document.getElementById("informacion");
const boton = document.getElementById("boton");
  console.log(window.screen.width)
  function bajar(){
    if(boton.ariaExpanded == "true" && window.screen.width == 500){
      informacion.style.top = "38%";
    }else if(boton.ariaExpanded == "false" && window.screen.width == 500){
      informacion.style.top = "18%";
    }
  }