function fadeIn() {
    const titulo = document.getElementsByClassName("titulo");
    const subtitulo = document.getElementsByClassName('subtitulo');
    const boton = document.getElementsByClassName('btn');
    titulo.style.animation = "slidein-left 2s, fadein 2s;";
    subtitulo.style.animation = "slidein-left 2s, fadein 2s;";
    boton.style.animation = "slidein-right 2s, fadein 2s;";
}
function fadeOut() {
    titulo.style.animationDirection = "reverse";
    subtitulo.style.animationDirection = "reverse";
    boton.style.animationDirection = "reverse";
}