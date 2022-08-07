$(document).ready(function(){
    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate({

            scrollTop: $(gato).offset().top - 50
        },800
        )

    })

})

$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
  
 

  });