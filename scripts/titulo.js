document.addEventListener('DOMContentLoaded', function() {
    var orcamento = document.getElementById('orcamento');
    var eve = document.getElementById('eve');
    var bv = document.getElementById('bv');
    var dmpl = document.getElementById('dmpl');
    var contrato = document.getElementById('contrato');

    const exportar = document.getElementById('exportar');
    var cnpj = document.getElementById('cnpj').textContent;
    
    if (orcamento) {
        console.log('Título: Orçamento');

        exportar.addEventListener('click', () => {
            var total = document.getElementById('total').textContent;

            document.title = 'ASJ Assessoria [Orçamento de R$ ' + total + '] - ' + cnpj;
        });

    } else if (eve) {
        console.log('Título: EVE');

        exportar.addEventListener('click', () => {      
            document.title = 'ASJ Assessoria - Estudo de Viabilidade Econômica [' + cnpj + ']';
        });

    } else if (bv) {
        console.log('Título: BV');

        exportar.addEventListener('click', () => {      
            document.title = 'ASJ Assessoria - Business Valuation [' + cnpj + ']';
        });

    } else if (dmpl) {
        console.log('Título: DMPL');

        exportar.addEventListener('click', () => {
           document.title = 'ASJ Assessoria - Demonstração das Mutações do Patrimônio Líquido [' + cnpj + ']';
        });
        
    } else if (contrato) {
        console.log('Título: Contrato');

        exportar.addEventListener('click', () => {     
            document.title = 'ASJ Assessoria - Contrato de Serviço [' + cnpj + ']';
        });

    } else {
        console.log('Título: Documento não identificado.');
    }
});