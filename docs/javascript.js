function fadeOut() {
    const titulo = document.getElementsByClassName("titulo");
    const subtitulo = document.getElementsByClassName('subtitulo');
    const boton = document.getElementsByClassName('btn');
    titulo.style.animationDirection = "reverse";
    subtitulo.style.animationDirection = "reverse";
    boton.style.animationDirection = "reverse";
}