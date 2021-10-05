function fadeIn() {
    const titulo = document.querySelectorAll('principal.h3')
    const subtitulo = document.querySelectorAll('principal.h2');
    const boton = document.querySelectorAll('principal.a');
    titulo.style.animation = "slidein-left 2s, fadein 2s;";
    subtitulo.style.animation = "slidein-left 2s, fadein 2s;";
    boton.style.animation = "slidein-right 2s, fadein 2s;";
}
function fadeOut() {
    titulo.style.animationDirection = "reverse";
    subtitulo.style.animationDirection = "reverse";
    boton.style.animationDirection = "reverse";
}