const btn = document.querySelector('#btn');

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

function fadeOut(button) {
  let opacity = 1; // Opacidade inicial (totalmente visível)

  const fadeInterval = setInterval(function () {
    opacity -= 0.05; // Diminui a opacidade aos poucos
    button.style.opacity = opacity; // Aplica a opacidade ao botão

    if (opacity <= 0) {
      clearInterval(fadeInterval); // Para a animação quando a opacidade atingir 0
    }
  }, 100); // Atualiza a cada 50 milissegundos
}


function playMusic(button) {
  let opacity = 1; // Opacidade inicial (totalmente visível)

  // Intervalo para diminuir a opacidade gradualmente
  const fadeInterval = setInterval(function () {
    opacity -= 0.05; // Diminui a opacidade aos poucos
    button.style.opacity = opacity; // Aplica a opacidade ao botão

    // Quando a opacidade chegar a 0, pare a animação e execute o próximo código
    if (opacity <= 0) {
      clearInterval(fadeInterval); // Para a animação quando a opacidade atingir 0

      // Ações que ocorrem após a animação de opacidade
      const btn = document.getElementById('btn');
      btn.style.display = 'none'; // Esconde o botão

      const titulo = document.querySelector('.focus-in-expand');
      titulo.style.display = 'flex'; // Exibe o título

      const night = document.querySelector('.night');
      night.style.display = 'flex'; // Exibe o elemento com classe "night"

      const flowers = document.querySelector('.flowers');
      flowers.style.display = 'flex'; // Exibe o elemento com classe "flowers"

      const audio = document.getElementById('bg-music');
      audio.play(); // Reproduz a música de fundo

      document.body.onclick = null; // Remove o evento de clique após o primeiro
    }
  }, 100); // Atualiza a cada 100 milissegundos
}




// btn.addEventListener('click', function () {
//   fadeOut(this);
// });