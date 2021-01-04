window.addEventListener('load', () => {
  init();
});

function init() {
  const value = 1599;
  const isValid = /^[0-9]+$/.test(value);

  if (isValid) {
    checkOrderedValues(value.toString());
  } else {
    result.innerText = "Informe um valor válido!";
  }
}

function checkOrderedValues(value) {
  const arrCrescente = [...value];
  const arrDecrescente = [...value];

  arrCrescente.sort((a, b) => {
    return a - b;
  });

  arrDecrescente.sort((a, b) => {
    return b - a;
  });

  let valido;
  for (let i = 0; i < arrCrescente.length - 1; i++) {
    if (arrCrescente[i + 1] <= Number(arrCrescente[i]) + 1) {
      valido = true;
    } else {
      valido = false;
      break;
    }
  }

  const strCrescente = arrCrescente.join("");
  const strDecrescente = arrDecrescente.join("");

  if (valido && (value === strCrescente || value === strDecrescente)) {
    console.log(`Input (${value}) - Está ordenado`);
  } else {
    console.log(`Input (${value}) - Não está ordenado`);
  }
}