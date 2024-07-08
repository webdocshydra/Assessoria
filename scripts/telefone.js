document.getElementById('i-telefone').addEventListener('input', function(event) {
	let input = event.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    let inputFormatado;

    if (input.length > 11) {
        input = input.slice(0, 11); // Limita a 11 dígitos
    }

    if (input.length === 10) {
        inputFormatado = input.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
    } else if (input.length === 11) {
        inputFormatado = input.replace(/^(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4');
    } else {
        inputFormatado = input;
    }

    event.target.value = inputFormatado;
});
