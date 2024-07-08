document.getElementById('i-total').addEventListener('input', function() {
    var cnpj = document.getElementById('cnpj').textContent;

    var total = document.getElementById('total').textContent;

    document.title = "ASJ Assessoria [Orçamento de R$ " + total + "] - " + cnpj;
});
