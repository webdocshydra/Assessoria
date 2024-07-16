document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gerar-grafico').addEventListener('click', function() {
        // Função para converter o valor de string para número, considerando a vírgula como separador decimal
        function parseValue(value) {
            return parseFloat(value.replace(',', '.'));
        }

        // Função para formatar o valor como dinheiro
        function formatCurrency(value) {
            return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        // Inputs de receita e despesa
        let inputs = [
            'i-receita1', 'i-receita2', 'i-receita3', 'i-receita4', 'i-receita5',
            'i-despesa1', 'i-despesa2', 'i-despesa3', 'i-despesa4', 'i-despesa5'
        ];

        // Coleta os valores dos inputs
        let valores = inputs.map(id => parseValue(document.getElementById(id).value || '0'));

        // Encontra o maior valor
        let maxValor = Math.max(...valores);

        // Arredonda o valor para o múltiplo de 5.000 mais próximo
        let baseValor = Math.ceil(maxValor / 5000) * 5000;

        // Atualiza o valor arredondado no elemento gfc-1
        document.getElementById('gfc-1').textContent = formatCurrency(baseValor);

        // Calcula e atualiza os valores dos elementos gfc-2, gfc-3 e gfc-4
        document.getElementById('gfc-2').textContent = formatCurrency((baseValor * 3) / 4);
        document.getElementById('gfc-3').textContent = formatCurrency(baseValor / 2);
        document.getElementById('gfc-4').textContent = formatCurrency(baseValor / 4);

        // Define a altura máxima em pixels
        const maxHeight = 200;

        // Função para calcular a altura da coluna com base na regra de 3
        function calcularAltura(valor, base) {
            let proporcao = valor / base;
            return Math.max(1, proporcao * maxHeight);
        }

        // Atualiza as alturas das colunas
        inputs.forEach((id, index) => {
            let altura = calcularAltura(valores[index], baseValor);
            document.getElementById(id.replace('i-', '')).style.height = altura + 'px';
        });
    });
});