// Função para mostrar a página de Diário ou Love Rooms
function mostrarPagina(pagina) {
    // Esconde todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(function(p) {
        p.style.display = 'none';
    });

    // Exibe a página selecionada
    document.getElementById(pagina).style.display = 'block';

    // Esconde o GIF de boas-vindas na página de início
    if (pagina !== 'inicio') {
        document.getElementById('inicio-gif').style.display = 'none';
    } else {
        document.getElementById('inicio-gif').style.display = 'block';
    }
}

// Função para mostrar a barra lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Função de busca para pesquisar
function buscar() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm.includes('diário')) {
        mostrarPagina('diario');
    } else if (searchTerm.includes('love rooms')) {
        mostrarPagina('love-rooms');
    } else {
        alert('Nenhum resultado encontrado.');
    }
}

// Ao carregar a página, garantir que o "Início" seja mostrado primeiro
window.onload = function() {
    mostrarPagina('inicio');
};
