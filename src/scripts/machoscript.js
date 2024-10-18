/*audio do macho */
const macho = new Audio('../audios/scream-raaagh.mp3')
/*script pra imagem do macho aparecer quando clicar na tela */
document.addEventListener('click',event =>{
    let aparece = document.getElementById('ogro'); /*conecta a foto no html ao javascript */
    aparece.classList.remove('esconde') /*remove a classe que esconde a foto */
    if(!aparece.classList.contains('esconde')){
        macho.play(); /*se não contém a classe que esconde, toca o audio */
    }
    setTimeout(()=> {
        aparece.classList.add('esconde') /**esconde a foto do macho após 3 seg */
    }, 3000)
    
});