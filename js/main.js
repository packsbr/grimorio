/* =============================================
   GRIMÓRIO DAS BRUXAS — JavaScript Principal
   Edite este arquivo para mudar comportamentos:
   - Contador regressivo
   - FAQ accordion
   - Campo de estrelas
   ============================================= */


/* ---------- 1. CAMPO DE ESTRELAS ---------- */

(function criarEstrelas() {
  const container = document.getElementById('campo-estrelas');
  if (!container) return;

  const TOTAL_ESTRELAS = 60; // ← altere a quantidade de estrelas

  for (let i = 0; i < TOTAL_ESTRELAS; i++) {
    const estrela = document.createElement('div');
    estrela.classList.add('estrela');

    const tamanho = Math.random() * 3 + 1; // px
    estrela.style.width  = tamanho + 'px';
    estrela.style.height = tamanho + 'px';
    estrela.style.top    = Math.random() * 100 + '%';
    estrela.style.left   = Math.random() * 100 + '%';
    estrela.style.animationDelay    = Math.random() * 5 + 's';
    estrela.style.animationDuration = (Math.random() * 3 + 2) + 's';

    container.appendChild(estrela);
  }
})();


/* ---------- 2. CONTADOR REGRESSIVO ---------- */
/*
  Para mudar o tempo inicial, altere os valores
  abaixo em HORAS, MINUTOS e SEGUNDOS.
*/

(function iniciarContador() {
  let HORAS    = 23; // ← altere aqui
  let MINUTOS  = 47; // ← altere aqui
  let SEGUNDOS = 12; // ← altere aqui

  const elHoras    = document.getElementById('c-horas');
  const elMinutos  = document.getElementById('c-minutos');
  const elSegundos = document.getElementById('c-segundos');

  if (!elHoras) return;

  function atualizar() {
    elHoras.textContent    = String(HORAS).padStart(2, '0');
    elMinutos.textContent  = String(MINUTOS).padStart(2, '0');
    elSegundos.textContent = String(SEGUNDOS).padStart(2, '0');
  }

  atualizar();

  const intervalo = setInterval(function () {
    if (SEGUNDOS > 0) {
      SEGUNDOS--;
    } else if (MINUTOS > 0) {
      MINUTOS--;
      SEGUNDOS = 59;
    } else if (HORAS > 0) {
      HORAS--;
      MINUTOS  = 59;
      SEGUNDOS = 59;
    } else {
      clearInterval(intervalo);
      // Quando zerar, reinicia (ou remova esta linha para parar em 00:00:00)
      HORAS = 23; MINUTOS = 59; SEGUNDOS = 59;
    }
    atualizar();
  }, 1000);
})();


/* ---------- 3. FAQ ACCORDION ---------- */

(function iniciarFAQ() {
  const itens = document.querySelectorAll('.faq-item');

  itens.forEach(function (item) {
    const btn = item.querySelector('.faq-pergunta');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const jaAberto = item.classList.contains('aberto');

      // Fecha todos os itens abertos
      itens.forEach(function (i) { i.classList.remove('aberto'); });

      // Abre o clicado (se não estava aberto)
      if (!jaAberto) {
        item.classList.add('aberto');
      }
    });
  });
})();


/* ---------- 4. SCROLL SUAVE PARA ÂNCORAS ---------- */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    const alvo = document.querySelector(link.getAttribute('href'));
    if (alvo) {
      e.preventDefault();
      alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
