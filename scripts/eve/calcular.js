document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcular').addEventListener('click', function() {
        // Função para converter o valor de string para número, considerando a vírgula como separador decimal
        function parseValue(value) {
            return parseFloat(value.replace(',', '.'));
        }

        // Função para formatar o valor como dinheiro
        function formatCurrency(value) {
            return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        // Receitas
        let receitaTotal = 0;
        for (let i = 1; i <= 5; i++) {
            let receitaValue = document.getElementById('i-receita' + i).value;
            if (receitaValue) {
                receitaTotal += parseValue(receitaValue);
            }
        }
        let receitaMensal = receitaTotal / 5;
        let receitaAnual = receitaMensal * 12;
        document.getElementById('receita-anual').textContent = formatCurrency(receitaAnual);

        // Despesas
        let despesaTotal = 0;
        for (let i = 1; i <= 5; i++) {
            let despesaValue = document.getElementById('i-despesa' + i).value;
            if (despesaValue) {
                despesaTotal += parseValue(despesaValue);
            }
        }
        let despesaMensal = despesaTotal / 5;
        let despesaAnual = despesaMensal * 12;
        document.getElementById('despesa-anual').textContent = formatCurrency(despesaAnual);

        // Lucro Anual
        let lucroAnual = receitaAnual - despesaAnual;
        document.getElementById('lucro-anual').textContent = formatCurrency(lucroAnual);

        // Cálculo VPL
        let b9 = lucroAnual;
        let calculoVPL = ((b9 * 5) - ((b9 * 5) / 100 * 34.48)) + (b9 + (b9 / 100 * 301.8));
        document.getElementById('calculo-vpl').textContent = formatCurrency(calculoVPL);
        document.getElementById('vpl').textContent = formatCurrency(calculoVPL);
    });
});