document.addEventListener('DOMContentLoaded', () => {
    const exportar = document.getElementById('exportar');
    const config = document.getElementById('config');
    const documento = document.getElementById('documento');
    const capa = document.getElementById('capa');
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');
    const contracapa = document.getElementById('contracapa');

    var orcamento = document.getElementById('orcamento');
    var eve = document.getElementById('eve');


    function ImprimirBASE() {
        pagina1.style.border = 'none';
        pagina2.style.display = 'flex';
        pagina2.style.border = 'none';
    }

    function BASE() {
        pagina1.style.border = '1px solid var(--cor-3)';
        pagina2.style.display = 'none';
    }

    function ImprimirDMPL() {
        if (pagina2) {
            console.log('Imprimir: É uma DMPL');
        } else {
            pagina1.style.border = 'none';
        }
    }

    function DMPL() {
        if (pagina2) {
            console.log('Imprimir: É uma DMPL');
        } else {
            pagina1.style.border = '1px solid var(--cor-3)';
        }
    }

    function ImprimirContrato() {
        pagina2.style.border = 'none';
        pagina1.style.display = 'flex';
        pagina1.style.border = 'none';
    }

    function Contrato() {
        pagina2.style.border = '1px solid var(--cor-3)';
        pagina1.style.display = 'none';
    }

    if (exportar && config) {
        exportar.addEventListener('click', () => {
            config.style.display = 'none';
            
            documento.style.gap = '0px';

            capa.style.display = 'flex';
            capa.style.border = 'none';

            contracapa.style.display = 'flex';
            contracapa.style.border = 'none';

            if (orcamento) {
                ImprimirBASE();
                console.log('Imprimir: Orçamento.');
            } else if (eve) {
                ImprimirBASE();
                console.log('Imprimir: EVE.');
            } else if (bv) {
                ImprimirBASE();
                console.log('Imprimir: BV.');
            } else if (dmpl) {
                ImprimirDMPL();
                console.log('Imprimir: DMPL.');
            } else if (contrato) {
                ImprimirContrato();
                console.log('Imprimir: Contrato.');
            } else {
                alert('Erro na Impressão: Documento não identificado. Entre em contato com o Designer.');
                return;
            }
        
            window.print();

            setTimeout(() => {
                config.style.display = 'block';

                documento.style.gap = '10px';

                capa.style.display = 'none';
                contracapa.style.display = 'none';
                
                if (orcamento) {
                    BASE();
                } else if (eve) {
                    BASE();
                } else if (bv) {
                    BASE();
                } else if (dmpl) {
                    DMPL();
                } else if (contrato) {
                    Contrato();
                } else {
                    alert('Erro na Impressão: Documento não identificado. Entre em contato com o Designer.');
                    return;
                }
            }, 100);
        });
    };
});
