document.getElementById('preencher').addEventListener('click', () => {
    const textarea = document.getElementById('i-code').value;
    
    if (textarea === '') {
        alert('O campo está vazio. Por favor, informe o código da consulta.');
        return;
    }

    try {
        const jsonData = JSON.parse(textarea);

        // Função para formatar números para dinheiro (ponto e vírgula)
        const formatarDinheiro = (valor) => {
            return parseFloat(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        };

        // Mapeia os IDs dos elementos e suas respectivas chaves no objeto JSON
        const elementos = {
            'cnpj': 'cnpj',
            'razaosocial': 'nome',
            'abertura': 'abertura',
            'porte': 'porte',
            'naturezajuridica': 'natureza_juridica',
            'capitalsocial': 'capital_social',
            'logradouro': 'logradouro',
            'numero': 'numero',
            'bairro': 'bairro',
            'cidade': 'municipio',
            'estado': 'uf',
            'atv-code': 'atividade_principal',
            'atv-descricao': 'atividade_principal'
        };

        // Itera sobre os elementos e atualiza seus textContent com os valores correspondentes do JSON
        Object.keys(elementos).forEach(id => {
            const chave = elementos[id];
            const elemento = document.getElementById(id);

            if (elemento && jsonData[chave] !== undefined) {
                // Se for o capital_social, formata para dinheiro
                if (id === 'capitalsocial') {
                    elemento.textContent = formatarDinheiro(jsonData[chave]);
                } else if (id === 'atv-code' || id === 'atv-descricao') {
                    // Se for atv-code ou atv-descricao, verifica se é um array e ajusta
                    if (Array.isArray(jsonData[chave]) && jsonData[chave].length > 0) {
                        elemento.textContent = jsonData[chave][0][id === 'atv-code' ? 'code' : 'text'];
                    } else {
                        elemento.textContent = '';
                    }
                } else {
                    elemento.textContent = jsonData[chave];
                }
            }
        });

    } catch (error) {
        alert('O código inserido não é válido, tente novamente ou entre em contato com o Designer.');
    }
});
