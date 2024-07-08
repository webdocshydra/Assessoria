document.getElementById('preencher').addEventListener('click', () => {
    const textarea = document.getElementById('i-code').value;
    
    if (textarea === '') {
        alert('O campo está vazio. Por favor, informe o código da consulta.');
        return;
    }

    try {
        const jsonData = JSON.parse(textarea);
        document.getElementById('cnpj').textContent = jsonData.cnpj;
        document.getElementById('razaosocial').textContent = jsonData.nome;
    } catch (error) {
        alert('O código inserido não é válido, tente novamente ou entre em contato com o Designer.');
    }
});