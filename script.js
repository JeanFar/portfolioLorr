function imprimirFormulario() {
    const textareas = document.querySelectorAll(".text-area");
    const divs = [];

    textareas.forEach(textarea => {
        const div = document.createElement("div");
        div.textContent = textarea.value; // Copia o conteúdo
        div.style.cssText = `
            min-height: ${textarea.scrollHeight}px;
            width: ${textarea.offsetWidth}px;
            border: 1px solid #ccc;
            padding: 5px;
            white-space: pre-wrap;
            overflow-wrap: break-word;
            text-align: left;
        `;

        textarea.parentNode.replaceChild(div, textarea);
        divs.push({ div, textarea }); // Guarda referência para restaurar depois
    });

    window.print();

    // Restaurar os textareas após a impressão
    divs.forEach(({ div, textarea }) => {
        div.parentNode.replaceChild(textarea, div);
    });
}

// Selecione o elemento #about
const aboutElement = document.querySelector('#about');

// Crie o observador de interseção
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    // Se o #about estiver na tela, adiciona a classe .in-view
    if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
    } else {
        // Se o #about sair da tela, remove a classe .in-view
        entry.target.classList.remove('in-view');
    }
});
}, {
threshold: 0.5 // Define que 50% do elemento precisa estar visível para ativar a classe
});

// Comece a observar o elemento #about
observer.observe(aboutElement);

//--------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const textareas = document.querySelectorAll(".text-area");

    textareas.forEach(textarea => {
        textarea.addEventListener("input", function () {
            this.style.height = "auto"; // Reseta a altura antes de calcular o novo tamanho
            this.style.height = this.scrollHeight + "px"; // Define a nova altura
        });
    });
});
