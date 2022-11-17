



/* const $dropdown = $(".dropdown"); */
/* const $dropdownToggle = $(".dropdown-toggle"); */
/* const $dropdownMenu = $(".dropdown-menu"); */
/* const showClass = "show"; */
/*  */
/* $(window).on("load resize", function() { */
/*   if (this.matchMedia("(min-width: 768px)").matches) { */
/*     $dropdown.hover( */
/*       function() { */
/*         const $this = $(this); */
/*         $this.addClass(showClass); */
/*         $this.find($dropdownToggle).attr("aria-expanded", "true"); */
/*         $this.find($dropdownMenu).addClass(showClass); */
/*       }, */
/*       function() { */
/*         const $this = $(this); */
/*         $this.removeClass(showClass); */
/*         $this.find($dropdownToggle).attr("aria-expanded", "false"); */
/*         $this.find($dropdownMenu).removeClass(showClass); */
/*       } */
/*     ); */
/*   } else { */
/*     $dropdown.off("mouseenter mouseleave"); */
/*   } */
/* }); */
/*  */

// codigo para el spinner
//llama el spinner
//$("#overlay").fadeIn(300);　

// cuando termina de cargar el documento para el spinner
/*
$(function($){
   setTimeout(function(){ 
    $("#overlay").fadeOut(300); 
  },500); 
   
 }); 
*/
/*fadeIn()

/*
  function fadeIn() {
    setInterval(display, 500);
   }

  function display() {
    var body = document.getElementById("overlay");   
     body.style.opacity = 0
   }
*/
   function fadeIn() {
    const element = document.getElementById('overlay');
    element.style.display = 'none';
  }




/*
   function fade() {
    const element = document.getElementById('overlay');
    let Opacity = 0.1;
    element.style.display = 'block';
    const timer = setInterval(function () {
     if (Opacity >= 1){
      clearInterval(timer);
    }
    element.style.opacity = Opacity;
    Opacity += Opacity * 0.1;
    }, 300);
    }

    */