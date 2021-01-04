window.addEventListener('load', () => {
  init();
});

function init() {
  const characters = "((){}[[])";

  const validationString = (value) => {
    const expr = value.split("");
    const pilha = [];

    for (let simb in expr) {
      if ((expr[simb] == '(') || (expr[simb] == '{') || (expr[simb] == '[')) {
        pilha.push(expr[simb]);

      } else if ((expr[simb] == ')') || (expr[simb] == '}') || (expr[simb] == ']')) {
        if ((pilha.length > 0) && (pilha.indexOf('(') > -1) ||
          (pilha.indexOf('{') > -1) || (pilha.indexOf('[') > -1)) {

          if (expr[simb] == ')') {
            pilha.splice(pilha.indexOf('('), 1);

          } else if (expr[simb] == '}') {
            pilha.splice(pilha.indexOf('{'), 1);

          } else if (expr[simb] == ']') {
            pilha.splice(pilha.indexOf('['), 1);

          }
        } else {
          pilha.push(expr[simb]);
          break;
        }
      }
    }

    if (pilha.length == 0) {
      return `${value} é uma sequência válida`;

    } else if (pilha.indexOf('(') > -1 || pilha.indexOf(')') > -1) {
      return `${value} não é uma sequência válida (Há um parêntese posicionado incorretamente)`;

    } else if (pilha.indexOf('{') > -1 || pilha.indexOf('}') > -1) {
      return `${value} não é uma sequência válida (Há uma chave posicionada incorretamente)`;

    } else if (pilha.indexOf('[') > -1 || pilha.indexOf(']') > -1) {
      return `${value} não é uma sequência válida (Há um colchete posicionado incorretamente)`;
    }
  };

  console.log(validationString(characters));
}
