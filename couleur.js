var spans = document.querySelectorAll('#menuToggle span');

function resetColor() {
    document.body.classList.remove("base");
    document.body.classList.remove("violet");
    document.body.classList.remove("bleu");
    document.body.classList.remove("gris");
    document.body.classList.remove("violet");
    
    document.querySelector('.menucc').classList.remove("base2");
    document.querySelector('.menucc').classList.remove("violetClair");
    document.querySelector('.menucc').classList.remove("blanc");
    document.querySelector('.menucc').classList.remove("vert");
    document.querySelector('.menucc').classList.remove("rose");

    document.querySelector('.btn-color-mode-switch > label.btn-color-mode-switch-inner').classList.remove("violetClair");

    spans.forEach(function(span) {
      if (span.classList.contains("blanc")) {
          span.classList.remove("blanc");
      }
  });

    document.querySelector('.champ').classList.remove("violetBorder");

    document.querySelector('.btnAjouter').classList.remove("violetBorder");

    document.querySelector('.champ').classList.remove("violetClair");

    document.querySelector('.btnAjouter').classList.remove("violetClair");
 
    document.querySelector('.conteneur-today').classList.remove("blancToday");

    document.querySelector('.conteneur-today').classList.remove("violetShadow");

    document.querySelector('.titre').classList.remove("blancTitre");

    document.querySelector('#menu').classList.remove("menuBlanc");
    
  }
  
  function hideAllCircles() {
  const allCircles = document.querySelectorAll('.cercle');
  allCircles.forEach(circle => {
    circle.classList.add("noDisplay");
  });
}

function resetHideCircle() {
  const visible = document.querySelectorAll('.cercle');
  visible.forEach(circle => {
    circle.classList.remove("noDisplay");
  });
  const visibleDrop = document.querySelectorAll('.change-color');
  visibleDrop.forEach(circle => {
    circle.classList.remove("noDisplay");
  });
}

  function menuDrop() {
    resetHideCircle ();

    document.querySelector('.menucc').classList.toggle("grand-menu");
    document.querySelector('.change-color').classList.toggle("noDisplay");
  }    
  
  function colorBase() {
    resetColor();
    hideAllCircles();
    
    document.body.classList.toggle("marron");
    
    document.querySelector('.menucc').classList.toggle("base2");
    document.querySelector('.menucc').classList.remove("grand-menu")
    document.querySelector('.cercle-marron').classList.remove("noDisplay");
    document.querySelector('.change-color').classList.remove("noDisplay");
  }
  
  function colorViolet() {
    resetColor();
    hideAllCircles();

        spans.forEach(function(span) {
            span.classList.toggle("blanc");
        });

    document.body.classList.toggle("violet");

    document.querySelector('.btn-color-mode-switch > label.btn-color-mode-switch-inner').classList.toggle("violetClair");

    document.querySelector('.champ').classList.toggle("violetBorder");

    document.querySelector('.btnAjouter').classList.toggle("violetBorder");

    document.querySelector('.champ').classList.toggle("violetClair");

    document.querySelector('.btnAjouter').classList.toggle("violetClair");

    document.querySelector('.conteneur-today').classList.toggle("blancToday");

    document.querySelector('.conteneur-today').classList.toggle("violetShadow");

    document.querySelector('.titre').classList.toggle("blancTitre");

    document.querySelector('#menu').classList.toggle("menuBlanc");
    
    document.querySelector('.menucc').classList.toggle("violetClair"); 
    document.querySelector('.menucc').classList.remove("grand-menu");  
    document.querySelector('.cercle-violet').classList.remove("noDisplay"); 
    document.querySelector('.change-color').classList.remove("noDisplay");
  }

  function colorBleu() {
    resetColor();
    hideAllCircles();

    document.body.classList.toggle("bleu");
    
    document.querySelector('.menucc').classList.toggle("blanc");
    document.querySelector('.menucc').classList.remove("grand-menu");  
    document.querySelector('.cercle-bleu').classList.remove("noDisplay");  
    document.querySelector('.change-color').classList.remove("noDisplay");
  }

  function colorVert() {
    resetColor();
    hideAllCircles();

    document.body.classList.toggle("gris");
    
    document.querySelector('.menucc').classList.toggle("vert"); 
    document.querySelector('.menucc').classList.remove("grand-menu");  
    document.querySelector('.cercle-vert').classList.remove("noDisplay");   
    document.querySelector('.change-color').classList.remove("noDisplay");
  }

  function colorDark() {
    resetColor();
    hideAllCircles();

    document.body.classList.toggle("violet");
    
    document.querySelector('.menucc').classList.toggle("rose");   
    document.querySelector('.menucc').classList.remove("grand-menu");  
    document.querySelector('.cercle-dark').classList.remove("noDisplay");
    document.querySelector('.change-color').classList.remove("noDisplay");
  }