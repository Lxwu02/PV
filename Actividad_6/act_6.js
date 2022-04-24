function cambiardiv1() {

    var x = document.getElementById("boton1");
    var y = document.getElementById("div1");

    if (x.textContent == "Esconder div"){

        x.textContent = "Revelar div";
        y.style.color = "#F0F8FF";

    } else {

        x.textContent = "Esconder div";
        y.style.color = "#00008B";

    }
}

function cambiardiv2() {

    var y = document.getElementById("div2");
    var x = document.getElementsByClassName("link");

    if (y.style.backgroundColor == "aliceblue"){

        y.style.backgroundColor = "darkblue";
        x.style.backgroundColor = "darkblue";

    } else {

        y.style.backgroundColor = "aliceblue";
        x.style.backgroundColor = "aliceblue";

    }
}


























$(document).ready(function(){

    var boton = document.getElementById("boton1");
    var div1 = document.getElementById("div1");

    var celeste = "rgb(" + 240 + "," + 248 + "," + 255 + ")";
    var azul = "rgb(" + 0 + "," + 0 + "," + 139 + ")";

    boton.click(function(){

        var idboton = $(this).text("Esconder div");

        if (idboton.innerText == "Esconder div"){

            $(selector).hide();

        } else {

            div1.style.color = azul;
            boton.textContent = "Esconder div";

        }
        
    });

});