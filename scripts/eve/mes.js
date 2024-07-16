document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento <select> com id "select-mes"
    const selectMes = document.getElementById('select-mes');

    // Função para calcular o mês seguinte baseado no mês atual
    function calcularMesSeguinte(mesAtual) {
        const meses = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        // Encontra o índice do mês atual
        let indiceAtual = meses.indexOf(mesAtual);

        // Calcula o índice do próximo mês
        let proximoIndice = (indiceAtual + 1) % meses.length;

        return meses[proximoIndice];
    }

    // Função para atualizar os textContent dos itens de mês
    function atualizarMeses(mesSelecionado) {
        document.getElementById('mes1').textContent = mesSelecionado;

        // Calcula os próximos meses baseados no mês selecionado
        let mesAtual = mesSelecionado;
        for (let i = 2; i <= 5; i++) {
            mesAtual = calcularMesSeguinte(mesAtual);
            document.getElementById(`mes${i}`).textContent = mesAtual;
        }
    }

    // Executa a função ao carregar a página inicialmente
    atualizarMeses(selectMes.value);

    // Adiciona um event listener para mudanças no select
    selectMes.addEventListener('change', function() {
        atualizarMeses(this.value);
    });
});
