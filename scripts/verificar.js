document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('resultado').style.display = 'none';

    document.getElementById('verificar').addEventListener('click', () => {
        const textarea = document.getElementById('i-code').value;
        
        if (textarea === '') {
            alert('O campo está vazio. Por favor, informe o código da consulta.');
            return;
        }

        try {
            const jsonData = JSON.parse(textarea);
            document.getElementById('resultado-cnpj').textContent = jsonData.cnpj;
            document.getElementById('resultado-rs').textContent = jsonData.nome;
            document.getElementById('iframe').style.display = 'none';
            document.getElementById('resultado').style.display = 'flex';
        } catch (error) {
            alert('O código inserido não é válido, tente novamente ou entre em contato com o Designer.');
        }
    });
});