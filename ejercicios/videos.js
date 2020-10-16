const titulo = document.getElementById('titulo');
const video = document.getElementById('video');
const generarPedido = () => {
    const url = new URL(window.location.href);
    const categoria = url.searchParams.get('categoria');
    if (categoria == '' || categoria == undefined) {
        alert('categoria inválido, vuelve a intentarlo');
        window.location.href = 'index.html';
    } else {
        if (categoria === 'abc') {
            titulo.innerHTML = 'Abecedario';
            video.src = '';
        } else if (categoria === 'espa') {
            titulo.innerHTML = 'Español';
            video.src = '';
        } else if (categoria === 'mate') {
            titulo.innerHTML = 'Matemáticas';
            video.src = '';
        } else if (categoria === 'histo') {
            titulo.innerHTML = 'Historia';
            video.src = '';
        }
    }
}