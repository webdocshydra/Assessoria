document.addEventListener('DOMContentLoaded', function() {
    const consultarBtn = document.getElementById('consultarBtn');
    const resultadoDiv = document.getElementById('resultado');
    const cnpjSpan = document.getElementById('cnpj');
    const razaoSpan = document.getElementById('razao');

    consultarBtn.addEventListener('click', function() {
        const cnpj = document.getElementById('cnpjInput').value.trim();

        if (cnpj === '') {
            resultadoDiv.textContent = 'Por favor, digite um CNPJ.';
            return;
        }

        const apiUrl = `https://cors-anywhere.herokuapp.com/https://receitaws.com.br/v1/cnpj/${cnpj}`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                // Extraindo apenas os campos específicos do JSON
                const resultado = {
                    CNPJ: data.cnpj,
                    Razão_Social: data.nome,
                    Nome_Fantasia: data.fantasia,
                    Data_de_Abertura: data.abertura,
                    Porte: data.porte,
                    Natureza_Jurídica: data.natureza_juridica,
                    Capital_Social: data.capital_social,
                    Situação: data.situacao,
                    Logradouro: data.logradouro,
                    Número: data.numero,
                    Bairro: data.bairro,
                    Cidade: data.municipio,
                    UF: data.uf,
                    CEP: data.cep,
                    Complemento: data.complemento,
                    CNAES_Código: data.atividade_principal[0].code,
                    CNAES_Descrição: data.atividade_principal[0].text
                };

                // Inserindo o CNPJ no span com id="cnpj"
                cnpjSpan.textContent = resultado.CNPJ;
                razaoSpan.textContent = resultado.Razão_Social;

                // Construindo a string formatada sem aspas e chaves para exibir em resultadoDiv
                let formattedResult = '';
                for (const key in resultado) {
                    formattedResult += `${key}: ${resultado[key]}\n`;
                }

                resultadoDiv.textContent = formattedResult;
            })
            .catch(error => {
                resultadoDiv.textContent = 'Erro ao buscar os dados da API: ' + error.message;
            });
    });
});
