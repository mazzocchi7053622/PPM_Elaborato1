// Funzione per aprire o chiudere un elemento
function toggleElement(elementId) {
    var body = document.getElementById('page');
    var element = document.getElementById(elementId);
    if(element.style.display === 'block') {
        element.style.display = 'none';
        body.style.overflowY= 'auto';
    } else {
        element.style.display = 'block';
        body.style.overflowY= 'hidden';
    }
}

// Funzione per chiudere un elemento
function closeElement(elementId) {
    var element = document.getElementById(elementId);
    if(element.style.display === 'block') {
        element.style.display = 'none';
    }
}

document.getElementById('selects-button').addEventListener('click', function() {
    // Chiudi la barra di ricerca se è aperta
    closeElement('search');
    // Apri o chiudi il menu a tendina
    toggleElement('arrow');
    toggleElement('dropdown-menu');
});

document.getElementById('search-button').addEventListener('click', function() {
    // Chiudi il menu a tendina se è aperto
    closeElement('arrow');
    closeElement('dropdown-menu');
    // Apri o chiudi la barra di ricerca
    toggleElement('search');
});
