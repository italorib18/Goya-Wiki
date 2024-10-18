/*adiciona a musica */
const copnamao = new Audio('../audios/de-copao-na-mao-estourado.mp3')
/* toca a musica*/

document.getElementById('copao').addEventListener('click', () => {
    copnamao.play();
    chamaCaveira();
});
function chamaCaveira() {
    let cranio = document.getElementById('caveira');
    cranio.classList.remove('esconde');
    setTimeout(() => {
        cranio.classList.add('esconde');
    }, 15000);
}