const frases = Array.from(document.querySelectorAll('[data-frase]'));
const personagens = Array.from(document.querySelectorAll('[data-personagem]'));
const containers = document.querySelectorAll('[data-container]');
const randomBtn = document.querySelector('[data-randomBotao]');
const error = document.querySelector('[data-erro]');
const copys = document.querySelectorAll('.copy');
let i;

async function randomFrase() {
  const requisicao = await fetch('https://animechan.vercel.app/api/quotes');
  const json = requisicao.json();
  json.then((quotes) => {
    for (i = 0; i <= 10; i += 1) {
      frases[i].innerHTML = `“${quotes[i].quote}”`;
      personagens[i].innerHTML = `- ${quotes[i].character}`;
    }
  });

  if (!requisicao.ok) {
    error.style.display = 'block';
    return this;
  }

  const todasFrases = document.querySelector('[data-todasFrases]');
  const linhas = document.querySelectorAll('.linha');

  function clipboard() {
    navigator.clipboard.writeText(this.parentElement.innerText);
  }

  todasFrases.style.display = 'grid';
  linhas.forEach((linha) => {
    linha.style.display = 'block';
  });
  copys.forEach((copy) => {
    copy.style.display = 'block';
    copy.addEventListener('click', clipboard);
  });

  containers.forEach((container) => {
    container.classList.add('animar');
    setTimeout(() => {
      container.classList.remove('animar');
    }, 1000);
  });
  return randomFrase;
}

randomBtn.addEventListener('click', randomFrase);
