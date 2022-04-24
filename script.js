const frases = Array.from(document.querySelectorAll('[data-frase]'));
const personagens = Array.from(document.querySelectorAll('[data-personagem]'));
const container = document.querySelectorAll('[data-container]')
const randomBtn = document.querySelector('[data-randomBotao]');
let i;


function randomFrase() {
    fetch('https://animechan.vercel.app/api/quotes') 
          .then(response => response.json()) // sai uma array com objetos
          .then(quotes => {
              for(let i = 0; i <= 10; i++) {
                  frases[i].innerHTML = '"' + quotes[i].quote + '"';
                  personagens[i].innerHTML = '- ' + quotes[i].character;
              }
              return iniciarFetch;
            });
    
    const todasFrases = document.querySelector('[data-todasFrases]');
    const linhas = document.querySelectorAll('.linha');
    const animeEscolhido = document.querySelector('.anime-escolhido');
    animeEscolhido.innerHTML = 'Random Quotes';

    animeEscolhido.style.display = "block";
    todasFrases.style.display = "grid";
    linhas.forEach((linha) => {
      linha.style.display = "block";
    })

    container.forEach((container) => {
          container.classList.add('animar');
          setTimeout(() => {
              container.classList.remove('animar');
          }, 3000)
      })
  
}

randomBtn.addEventListener('click', randomFrase);
