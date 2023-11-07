//início da seleção do tema claro/escuro
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
}
// fim da seleção do tema.

// Função para rolar de volta para o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Função para mostrar/ocultar o botão "Retornar ao Menu" conforme a rolagem
window.onscroll = function () {
    const button = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Início do accordion
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.classList.remove('active');
                }
            });
            button.classList.toggle('active');
        });
    });
});
// fim do accordion

// Função para realizar a pesquisa na página
let lastSearch = ''; // Variável para armazenar a última pesquisa
let currentIndex = -1; // Índice da última ocorrência encontrada

// Função para realizar a pesquisa na página
function searchPage() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const sections = document.querySelectorAll("section");

    // Se a pesquisa mudou, redefinir o índice
    if (searchInput !== lastSearch) {
        lastSearch = searchInput;
        currentIndex = -1;
    }

    sections.forEach((section, index) => {
        const content = section.textContent.toLowerCase();
        if (content.includes(searchInput)) {
            section.style.display = "block";
            currentIndex = index;
        } else {
            section.style.display = "none";
        }
    });
}

// Função para pesquisar a próxima ocorrência da palavra
function searchNextOccurrence() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const sections = document.querySelectorAll("section");

    // Se não houver ocorrência atual, não fazer nada
    if (currentIndex === -1) return;

    // Iniciar a busca na próxima seção após a ocorrência atual
    for (let i = currentIndex + 1; i < sections.length; i++) {
        const content = sections[i].textContent.toLowerCase();
        if (content.includes(searchInput)) {
            sections[currentIndex].style.display = "none";
            sections[i].style.display = "block";
            currentIndex = i;
            return;
        }
    }

    // Se não houver mais ocorrências, retornar à primeira seção com a ocorrência
    for (let i = 0; i <= currentIndex; i++) {
        const content = sections[i].textContent.toLowerCase();
        if (content.includes(searchInput)) {
            sections[currentIndex].style.display = "none";
            sections[i].style.display = "block";
            currentIndex = i;
            return;
        }
    }
}

// Função para ativar o carrossel de imagens
$(document).ready(function(){
    $('.image-carousel').slick({
        infinite: true, // Habilita o loop infinito
        slidesToShow: 1, // Número de imagens exibidas por vez
        slidesToScroll: 1, // Número de imagens a rolar por vez
        autoplay: true, // Ativa a reprodução automática
        autoplaySpeed: 2000 // Velocidade da reprodução automática em milissegundos
    });
});