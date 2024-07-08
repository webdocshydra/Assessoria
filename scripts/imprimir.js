document.addEventListener('DOMContentLoaded', () => {
    const exportar = document.getElementById('exportar');
    const config = document.getElementById('config');
    const documento = document.getElementById('documento');
    const capa = document.getElementById('capa');
    const pagina1 = document.getElementById('pagina1');
    const pagina2 = document.getElementById('pagina2');

    if (exportar && config) {
        exportar.addEventListener('click', () => {
            config.style.display = "none";
            
            documento.style.gap = "0px";
            documento.style.scale = "1.0";

            capa.style.display = "flex";
            capa.style.border = "none";

            pagina1.style.border = "none";

            pagina2.style.display = "flex";
            pagina2.style.border = "none";

            window.print();

            setTimeout(() => {
                config.style.display = "block";

                documento.style.gap = "10px";
                documento.style.scale = "1.0";

                capa.style.display = "none";
                capa.style.border = "1px solid var(--cor-3)";

                pagina1.style.border = "1px solid var(--cor-3)";

                pagina2.style.display = "none";
                pagina2.style.border = "1px solid var(--cor-3)";
            }, 100);
        });
    }
});
