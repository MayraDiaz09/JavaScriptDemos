window.onload = function () {
  agregarTabFocus();             
  habilitarNavegacionConFlechas(); 
};


function upDate(previewPic) {
  console.log("upDate Esto está funcionando");
  console.log("Alt de la imagen:", previewPic.alt);
  console.log("Src de la imagen:", previewPic.src);

  let imageDiv = document.querySelector("#image");
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.textContent = previewPic.alt;
}


function unDo() {
  console.log("unDo Esto está funcionando");
  let imageDiv = document.querySelector("#image");
  imageDiv.style.backgroundImage = "none";
  imageDiv.textContent = "Mostrarla aquí.";
}


function agregarTabFocus() {
  console.log("Evento onload disparado");

  let imagenes = document.querySelectorAll(".preview");
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].setAttribute("tabindex", "0");

    
    imagenes[i].addEventListener("focus", function () {
      upDate(imagenes[i]);
    });
    imagenes[i].addEventListener("blur", function () {
      unDo();
    });
  }
}


function habilitarNavegacionConFlechas() {
  const previews = Array.from(document.querySelectorAll(".preview"));

  document.addEventListener("keydown", function (event) {
    const activo = document.activeElement;
    const index = previews.indexOf(activo);

    if (index === -1) return;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        if (index < previews.length - 1) {
          previews[index + 1].focus();
          event.preventDefault();
        }
        break;

      case "ArrowLeft":
      case "ArrowUp":
        if (index > 0) {
          previews[index - 1].focus();
          event.preventDefault();
        }
        break;
    }
  });
}
