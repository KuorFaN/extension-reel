var Tn=Object.defineProperty;var An=(Q,P,ee)=>P in Q?Tn(Q,P,{enumerable:!0,configurable:!0,writable:!0,value:ee}):Q[P]=ee;var G=(Q,P,ee)=>An(Q,typeof P!="symbol"?P+"":P,ee);/** @license ESUIT
 * COPYRIGHT (C) 2023 ESUIT. ALL RIGHTS RESERVED.
 *
 * This code is the intellectual property of ESUIT and is protected by
 * copyright law. Any unauthorized use, copying or reproduction of this
 * code without the expressed written permission of ESUIT is strictly
 * prohibited.
 *
 * For more information, please visit https://esuit.dev/.
 */(function(){

// Función para obtener el nombre del video y la cantidad de reproducciones
function obtenerTituloYReproducciones(video) {
    const titulo = video.titulo || 'Video sin título';
    const reproducciones = video.reproducciones || '0 reproducciones';
    return `${titulo} / ${reproducciones}`;
}

// Función para crear un archivo de transcripción
function crearArchivoTranscripcion(video, transcripcion) {
    const nombreArchivo = `${video.titulo}.txt`;
    const blob = new Blob([transcripcion], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = nombreArchivo;
    link.click();
}

// Función para descargar videos
function descargarVideos(videos, limite) {
    const carpeta = obtenerCarpetaDescarga();
    videos.slice(0, limite).forEach(video => {
        const tituloYReproducciones = obtenerTituloYReproducciones(video);
        const nombreArchivo = `${carpeta}/${tituloYReproducciones}.mp4`;
        descargarVideo(video.url, nombreArchivo);
        crearArchivoTranscripcion(video, video.transcripcion);
    });
}

// Función para obtener la carpeta de descarga elegida por el usuario
function obtenerCarpetaDescarga() {
    // Lógica para obtener la carpeta elegida por el usuario
    return 'carpeta/elegida/por/usuario';
}

// Función para descargar un video
function descargarVideo(url, nombreArchivo) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = nombreArchivo;
            link.click();
        })
        .catch(error => console.error('Error al descargar el video:', error));
}

// Ejemplo de uso
const videos = obtenerVideosDeFacebook();
const limite = obtenerLimiteDelUsuario(); // Obtener el límite definido por el usuario
descargarVideos(videos, limite);

// Función para obtener videos de Facebook (simulación)
function obtenerVideosDeFacebook() {
    // Lógica para obtener los videos de Facebook
    return [
        {
            url: 'https://facebook.com/video1.mp4',
            titulo: 'Esta carlota de durazno es tan rica que no volverás a pensar en la de Limón.',
            reproducciones: '22 mil reproducciones',
            transcripcion: 'Transcripción del video 1...'
        },
        {
            url: 'https://facebook.com/video2.mp4',
            titulo: 'Título del video 2',
            reproducciones: '10 mil reproducciones',
            transcripcion: 'Transcripción del video 2...'
        }
    ];
}

// Función para obtener el límite definido por el usuario (simulación)
function obtenerLimiteDelUsuario() {
    // Lógica para obtener el límite definido por el usuario
    return 200; // Ejemplo de límite definido por el usuario
}

})();
