function tabuada(num) {
  let x = 1;
  let resultado = '';

  while (x < 11) {
    resultado += `${num} x ${x} = ${num * x} <br>`;

    x++;
  }

  return resultado;
}

function mostrarTabuada() {
  let numero = document.querySelector('#numero').value;

  let resultado = tabuada(numero);

  document.querySelector('#resultado').innerHTML = resultado;
}
