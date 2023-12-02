function tocaSom (seletorAudio) {
    document.querySelector(seletorAudio);
    

    if (elemento === null) {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }

   //elemento.play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
   

    if (evento.code === 'Space'||evento.code === 'Space') {
        tecla.classList.add('ativa');
    }


    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }


}
