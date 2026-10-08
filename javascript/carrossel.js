//Captura o botão "próximo"
let btnProximo = document.getElementById("proximo");
//Captura o botão "anterior"
let btnAnterior = document.getElementById("anterior");
//captura o quadro aonde a fotográfia é exibida
let Quadroimagem = document.getElementById("slides");
//Cria o album e guarda as fotos

let album = [
   "imagens/shared image.jfif",
   "imagens/shared image (1).jfif",
   "imagens/shared image (2).jfif",
   "imagens/shared image (3).jfif",
   "imagens/Multimedia (4).jfif"
]
//Quando o próximo botão for clicado,
//executará a função mostrarproximo
btnProximo.addEventListener("click", mostrarProximo);

//Define a posição inicial da fotográfia do album

let foto = 0;

//Função responsável por mostrar a próxima fotográfia
function mostrarProximo() {
    //Avança uma posição do álbum
    foto = foto + 1;
    //Verifica se passou a última fotográfia
    if (foto >= album.length) {
        //Volta a posição inicial
        foto = 0;
    }
    Quadroimagem.src = album[foto];

}

// Quando o botão anterior for clicado
// executará a função mostrarAnterior

btnAnterior.addEventListener("click", mostrarAnterior);
//Função responsável por mostrar a fotográfia anterior
function mostrarAnterior() {
    //Regride a posição do álbum
    foto = foto - 1;

    if (foto < 0) {
        foto = album.length - 1 
    }
        Quadroimagem.src = album[foto];
}



// let i = 0
// setInterval(() => {
//   i =(i + 1)%5
//   document.getElementById("slides").style.transform = `translateX(-${i * 80}%)`;
// }, 4000);

// let index = 0;
// function mover(dir) {
//   const total = document.querySelectorAll('.slides img').length;
//   index = (index + dir + total) % total;
//   document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
// }
// automático a cada 4 segundos
/*setInterval(() => mover(1), 4000);*/
 