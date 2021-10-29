function calcularNotas() {
    let notaN1 = Number(document.getElementById('inputNotaN1').value);
    let notaN2 = Number(document.getElementById('inputNotaN2').value);
    
    let notaFinal = (validaSeEVazio(notaN1) * 0.4) + (validaSeEVazio(notaN2) * 0.6);
    
    console.log(notaFinal.toFixed(2).replace(/\.?0*$/,''))
    exibirResultado(notaN1, notaN2, notaFinal);
}

function validaSeEVazio(valor) {
    if(valor === '' || valor > 100) {
        return 0;
    }else {
        return valor;
    }
}

function exibirResultado(n1, n2, resultado) {
    let painel = document.getElementById('panel-calcular-nota');

    painel.innerHTML = `<h3 class="text-center">RESULTADO</h3>
                        <hr>
                        <h4>Nota N1: ${n1}</h4>
                        <h4>Nota N2: ${n2}</h4>
                        `;

    if(resultado < 60) {
        painel.innerHTML += `<h4 class="text-danger text-center">Nota Final: ${resultado}</h4>`;
    }else {
        painel.innerHTML += `<h4 class="text-success text-center">Nota Final: ${resultado}</h4>`;
    }

    painel.innerHTML += `<hr>
                        <a href="calcularNota.html" class="btn btn-default link-panel">Voltar</a>
                        `;
}
