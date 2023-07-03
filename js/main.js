const menu = document.querySelector("[data-menu]");
const campoNavegacao = document.querySelector("[data-navegacao]");


const campoDeCategorias = document.querySelectorAll("[data-campo-categoria]");
const categorias = document.querySelectorAll("[data-categoria]");
const arrowDark = document.querySelectorAll("[data-arrow-dark]");
const arrowLight = document.querySelectorAll("[data-arrow-light]");
const campoDeItens = document.querySelectorAll("[data-campo-itens]");

menu.addEventListener("click", (evento) => {

    let srcImagemMenu = evento.target.currentSrc;

    if (srcImagemMenu.indexOf("hamburger") >= 0) {
        menu.classList.add("close");

        menu.src = srcImagemMenu.replace("hamburger", "close");
        campoNavegacao.style.display = 'block';
    } else {
        menu.classList.remove("close");

        menu.src = srcImagemMenu.replace("close", "hamburger");
        campoNavegacao.style.display = 'none';
    }
    
});

categorias.forEach((categoria) => categoria.addEventListener("click", (evento) => {

    if (evento.target.innerHTML == 'Product') {
        
        if (campoDeItens[0].style.display == 'block') {
            campoDeItens[0].style.display = 'none';
            arrowDark[0].classList.remove("arrow-dark");
            arrowLight[0].classList.remove("arrow-light");
        } else if (campoDeItens[0].style.display == '' || campoDeItens[0].style.display == 'none') {
            console.log("clicou")
            campoDeItens[0].style.display = 'block';
            arrowDark[0].classList.add("arrow-dark");
            arrowLight[0].classList.add("arrow-light");
        }    

    };
    
    if (evento.target.innerHTML == 'Company') {
        
        if (campoDeItens[1].style.display == 'block') {
            campoDeItens[1].style.display = 'none';
            arrowDark[1].classList.remove("arrow-dark");
            arrowLight[1].classList.remove("arrow-light");
        } else if (campoDeItens[1].style.display == '' || campoDeItens[1].style.display == 'none') {
            campoDeItens[1].style.display = 'block';
            arrowDark[1].classList.add("arrow-dark");
            arrowLight[1].classList.add("arrow-light");
        }    

    };
    
    if (evento.target.innerHTML == 'Connect') {
        
        if (campoDeItens[2].style.display == 'block') {
            campoDeItens[2].style.display = 'none';
            arrowDark[2].classList.remove("arrow-dark");
            arrowLight[2].classList.remove("arrow-light");
        } else if (campoDeItens[2].style.display == '' || campoDeItens[2].style.display == 'none') {
            campoDeItens[2].style.display = 'block';
            arrowDark[2].classList.add("arrow-dark");
            arrowLight[2].classList.add("arrow-light");
        }    

    };

}));
