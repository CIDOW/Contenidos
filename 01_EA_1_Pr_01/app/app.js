let mensajes = document.getElementById('mensaje');
mensajes.innerHTML = "Cargando audio files..."
window.addEventListener('load', (event) => {
    mensajes.innerHTML = "¡Estamos listos!"
});
const enuncTxt = "Indique en qué frecuencia se produce el incremento de 12dB sobre la señal de Ruido Rosa";
let enunciado = document.getElementById('enunciado');
enunciado.innerHTML = enuncTxt;
const cachondo = new Array(" ( ͡° ͜ʖ ͡°)", "¡Eres un crack practicando! ", "¡Me sorprendes!", "¡Incansable!", "Estamos orgullosos de ti", "Como tú no hay otro", "(▀̿Ĺ̯▀̿ ̿)", "¯\_(ツ)_/¯", "(ง ͠° ͟ل͜ ͡°)ง", "ʕ•ᴥ•ʔ", "ಠ_ಠ", "̿̿ ( ▀ ͜͞ʖ▀) ", "(͡ ͡° ͜ つ ͡͡°)", "(ง'̀-'́)ง", "(ᵔᴥᵔ)", "(¬‿¬)", "( ͡ᵔ ͜ʖ ͡ᵔ )", "◉_◉", "༼ʘ̚ل͜ʘ̚༽", "(ง°ل͜°)ง", "(°ロ°)☝", "ಠ⌣ಠ", "╚(ಠ_ಠ)=┐", "( ⚆ _ ⚆ )", "(ʘ‿ʘ)", "◔ ⌣ ◔")

let calificacion;
let retos = 1;
let laMalla = document.getElementsByClassName('malla');
let lista = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let estiloMalla = "", spc = " ";

//aleator x 10
function fisherAndYates(lista) {
    var sz = lista.length, r, temp;
    for (i = 0; i < sz; i++) {
        r = Math.floor(Math.random() * (sz));
        temp = lista[r];
        lista[r] = lista[i];
        lista[i] = temp;
        console.log(r)
    }
    console.log(sz, lista);
}
function rebujaPreguntas(lista) {
    estiloMalla = 'grid-template-areas: ';
    estiloMalla = estiloMalla + '"renglon_0"' + spc;
    for (i = 0; i < lista.length; i++) {
        estiloMalla = estiloMalla + '"renglon_' + lista[i] + '"' + spc;
    }
    estiloMalla = estiloMalla + ";"
    laMalla[0].style.cssText = estiloMalla;
    console.log(estiloMalla)
    estiloMalla = "";
}
function uncheckRadio(lista) {
    var idRpta;
    for (i = 0; i < lista.length; i++) {
        for (j = 0; j < 5; j++) {
            idRpta = 'r' + ('0' + (i + 1)).slice(-2) + ('0' + (j + 1)).slice(-2)
            document.getElementById(idRpta).checked = false;
        }
    }
}

function evaluarRespuestas(lista) {
    var idRpta, puntaje = 0;
    for (i = 0; i < lista.length; i++) {
        if (i < 5) {
            idRpta = 'r' + ('0' + (i + 1)).slice(-2) + ('0' + (i + 1)).slice(-2)
            if (document.getElementById(idRpta).checked) puntaje = puntaje + 2;

        } else {
            idRpta = 'r' + ('0' + (i + 1)).slice(-2) + ('0' + (i - 4)).slice(-2)
            if (document.getElementById(idRpta).checked) puntaje = puntaje + 2;
        }

        calificacion = 'Nota: ' + ("0" + puntaje).slice(-2);
        mensajes.innerHTML = calificacion;
    }
    imprimeClave(lista);
}

function nuevoJuego(lista) {
    retos++;
    let cachondeo = Math.floor(Math.random() * Math.floor(27))
    mensajes.innerHTML = "¡Reto " + retos + "!" + "  " + cachondo[cachondeo];
    enunciado.innerHTML = enuncTxt;
    uncheckRadio(lista);
    fisherAndYates(lista);
    rebujaPreguntas(lista);

}
function imprimeClave(lista) {
    let clave = 'Rptas.: ';
    for (i = 0; i < lista.length; i++) {
        switch (lista[i]) {
            case 1:
                clave = clave + '63Hz, ';
                break;
            case 2:
                clave = clave + '125Hz, ';
                break;
            case 3:
                clave = clave + '250Hz, ';
                break;
            case 4:
                clave = clave + '500Hz, ';
                break;
            case 5:
                clave = clave + '1000Hz, ';
                break;
            case 6:
                clave = clave + '63Hz, ';
                break;
            case 7:
                clave = clave + '125Hz, ';
                break;
            case 8:
                clave = clave + '250Hz, ';
                break;
            case 9:
                clave = clave + '500Hz, ';
                break;
            case 10:
                clave = clave + '1000Hz, ';
                break;
            default:
                break;
        }

    }
    console.log(lista, clave);
    enunciado.innerHTML = clave;
}
function colorizanteAleatorio(lista) {
    let r, g, b, rgb;
    let bc;

    for (i = 0; i < lista.length; i++) {
        rC = "renglon_" + (i + 1);
        r = Math.random().toString(16).substr(2, 2);
        g = 'a5';
        b = Math.random().toString(16).substr(2, 2)
        rgb = '#' + r + g + b;
        bc = document.getElementsByClassName("renglon_" + (i + 1));
        bc[0].style.backgroundColor = rgb;

    }

}

//laMalla[0].style.backgroundColor = "yellow";


//laMalla[0].style.cssText = 'grid-template-areas: "renglon_0" "renglon_2" "renglon_5" "renglon_4" "renglon_1" "renglon_3"; background-color : cyan;';
//laMalla[0].style.cssText = "background-color : green;";



fisherAndYates(lista);
rebujaPreguntas(lista);
colorizanteAleatorio(lista);

