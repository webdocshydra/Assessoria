document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('capa').style.display = 'none';
    document.getElementById('contracapa').style.display = 'none';

    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');

    var orcamento = document.getElementById('orcamento');
    var eve = document.getElementById('eve');
    var bv = document.getElementById('bv');
    var dmpl = document.getElementById('dmpl');
    var contrato = document.getElementById('contrato');
    
    if (orcamento) {
        pagina2.style.display = 'none';

        console.log("Carregar: Orçamento - Capa, Página 2 e Contracapa ocultas / Páginas 1 em exibição.");
    } else if (eve) {
        pagina2.style.display = 'none';

        console.log("Carregar: EVE - Capa, Página 2 e Contracapa ocultas / Páginas 1 em exibição.");
    } else if (bv) {
        pagina2.style.display = 'none';

        console.log("Carregar: BV - Capa, Página 2 e Contracapa ocultas / Páginas 1 em exibição.");
    } else if (dmpl) {
        if (pagina2) {
            console.log("Carregar: DMPL - Página 02 não existe.");
        } else {
            console.log("Carregar: DMPL - Capa e Contracapa ocultas / Página 1 em exibição.");
        }
    } else if (contrato) {
        pagina1.style.display = 'none';

        console.log("Carregar: Contrato - Capa, Página 1 e Contracapa ocultas / Páginas 2 em exibição.");
    } else {
        console.log("Carregar: Documento não identificado.");
    }
});