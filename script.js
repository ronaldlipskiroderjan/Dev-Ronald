// Espera o site carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os elementos que queremos animar (que têm a classe .hidden)
    const hiddenElements = document.querySelectorAll('.hidden');

    // Cria o "observador". Ele verifica se os elementos estão visíveis na tela.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Se o elemento entrou na tela (está intersectando)
            if (entry.isIntersecting) {
                // Adiciona a classe .show que faz ele aparecer suavemente
                entry.target.classList.add('show');
                // (Opcional) Para de observar depois que já animou uma vez
                // observer.unobserve(entry.target); 
            }
             // Se quiser que a animação repita ao rolar para cima e para baixo,
             // descomente o 'else' abaixo:
             /* else {
                entry.target.classList.remove('show');
             } 
             */
        });
    }, {
        threshold: 0.2 // A animação começa quando 20% do elemento estiver visível
    });

    // Manda o observador vigiar cada um dos elementos escondidos
    hiddenElements.forEach((el) => observer.observe(el));
});