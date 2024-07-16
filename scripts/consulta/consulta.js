document.addEventListener('DOMContentLoaded', function() {
    const botaoConsultar = document.getElementById('consultar');

    document.getElementById('iframe').style.display = 'none';
    document.getElementById('verificacao').style.display = 'none';
                
    botaoConsultar.addEventListener('click', function() {
        const cnpj = document.getElementById('i-cnpj').value.trim();

        if (cnpj === '') {
            alert('O campo está vazio. Por favor, informe um CNPJ.');
            return;  // Interrompe a execução se o campo estiver vazio
        }

        const iframe = document.getElementById('iframe');
        const urlBase = `https://receitaws.com.br/v1/cnpj/${cnpj}`;

        iframe.src = urlBase;

        document.getElementById('iframe').style.display = 'block';
        document.getElementById('verificacao').style.display = 'flex';
        document.getElementById('i-code').value = "";
        document.getElementById('resultado').style.display = 'none';
    });
});
