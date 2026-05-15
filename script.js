// ============================================================
// HAMBURGER MENU (menu mobile)
// ============================================================

// Seleciona o botão hamburger e a lista de links pelo seletor CSS
const hamburger = document.querySelector('.hamburger');
const navList   = document.querySelector('.nav-links');

// Verifica se os dois elementos existem no DOM antes de usar
// (evita erro caso o HTML esteja em cache sem o botão hamburger)
if (hamburger && navList) {

    // Escuta o clique no botão hamburger
    hamburger.addEventListener('click', () => {
        // classList.toggle adiciona a classe se não tiver, remove se já tiver
        // e retorna true/false indicando se ficou aberto ou fechado
        const isOpen = hamburger.classList.toggle('open');

        // Sincroniza a classe 'open' na lista de links com o estado do botão
        navList.classList.toggle('open', isOpen);

        // Atualiza o atributo de acessibilidade (leitores de tela)
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Seleciona todos os links dentro do menu e percorre cada um
    navList.querySelectorAll('a').forEach((link) => {

        // Ao clicar em qualquer link, fecha o menu automaticamente
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navList.classList.remove('open');
            hamburger.setAttribute('aria-expanded', false);
        });
    });
}

// ============================================================
// TYPEWRITER (efeito de digitação no Hero)
// ============================================================

// Array com os textos que vão se alternar na animação
const roles = ['Desenvolvedor Web em ascensão', 'Entusiasta de Front-end', 'Apaixonado por Tecnologia'];

let roleIndex = 0;    // índice do texto atual na array (começa no primeiro)
let charIndex = 0;    // quantos caracteres estão sendo exibidos no momento
let deleting  = false; // controla se está digitando (false) ou apagando (true)

// Seleciona o elemento HTML onde o texto será exibido
const typeEl = document.querySelector('.typewriter');

function type() {
    const current = roles[roleIndex]; // pega o texto atual baseado no índice

    if (!deleting) {
        // DIGITANDO: aumenta charIndex e exibe mais uma letra com slice()
        // slice(0, n) retorna os primeiros n caracteres da string
        typeEl.textContent = current.slice(0, ++charIndex);

        // Quando terminar de digitar o texto inteiro...
        if (charIndex === current.length) {
            deleting = true;           // muda para modo apagar
            setTimeout(type, 2200);    // espera 2,2s antes de começar a apagar
            return;                    // sai da função para respeitar o delay
        }
    } else {
        // APAGANDO: diminui charIndex e exibe menos uma letra
        typeEl.textContent = current.slice(0, --charIndex);

        // Quando apagar tudo...
        if (charIndex === 0) {
            deleting  = false; // volta para modo digitar
            // Avança para o próximo texto; o % garante que volta ao início após o último
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    // Chama a função novamente após um intervalo:
    // apagando = 45ms (mais rápido), digitando = 85ms (mais devagar, parece natural)
    setTimeout(type, deleting ? 45 : 85);
}

// Inicia o typewriter após 1,2s — dá tempo do hero aparecer na tela antes de começar
if (typeEl) setTimeout(type, 1200);

// ============================================================
// SCROLL REVEAL — animação de entrada das seções
// ============================================================

// IntersectionObserver observa elementos e dispara uma função
// quando eles entram ou saem da área visível da tela (viewport)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        // isIntersecting = true quando o elemento está visível na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // adiciona a classe que ativa a animação CSS
            observer.unobserve(entry.target);   // para de observar — anima apenas uma vez
        }
    });
}, { threshold: 0.1 }); // threshold: 0.1 = dispara quando 10% do elemento está visível

// Seleciona todos os elementos com classe 'hidden' e manda o observer vigiar cada um
document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));

// ============================================================
// SCROLL REVEAL — animação escalonada dos cards internos
// ============================================================

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // classe que ativa a animação CSS do card
            cardObserver.unobserve(entry.target);  // anima apenas uma vez
        }
    });
}, { threshold: 0.1 });

// Seleciona todos os elementos com atributo data-animate
document.querySelectorAll('[data-animate]').forEach((el) => {

    // Encontra os irmãos (elementos no mesmo nível) que também têm data-animate
    // :scope > [data-animate] = filhos diretos do pai que têm o atributo
    const siblings = [...el.parentElement.querySelectorAll(':scope > [data-animate]')];

    // Descobre a posição deste elemento entre os irmãos (0, 1, 2...)
    const index = siblings.indexOf(el);

    // Aplica um delay crescente: 0s, 0.15s, 0.30s... — cria o efeito cascata
    el.style.transitionDelay = `${index * 0.15}s`;

    cardObserver.observe(el); // começa a observar o elemento
});

// ============================================================
// NAVBAR ATIVA — destaque do link conforme a seção visível
// ============================================================

// Seleciona todas as seções com id e todos os links do menu
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        // Busca o link do menu cujo href bate com o id da seção
        const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);

        // Se não encontrar o link (ex: seção hero sem link no menu), ignora
        if (!link) return;

        if (entry.isIntersecting) {
            // Remove a classe 'active' de todos os links
            navLinks.forEach((l) => l.classList.remove('active'));
            // Adiciona 'active' só no link da seção atual
            link.classList.add('active');
        }
    });
// rootMargin define uma margem virtual no viewport:
// -25% no topo e -65% na base = só considera a faixa do meio da tela
// isso evita que múltiplas seções ativem ao mesmo tempo
}, { rootMargin: '-25% 0px -65% 0px' });

sections.forEach((section) => navObserver.observe(section));

// ============================================================
// MODAL — lightbox para imagens dos projetos
// ============================================================

const modal      = document.getElementById('modal');
const modalImg   = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.project-img').forEach((img) => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ============================================================
// SERVICE WORKER (PWA — instalação como aplicativo)
// ============================================================

// Verifica se o browser suporta Service Worker
if ('serviceWorker' in navigator) {

    // Aguarda a página carregar completamente antes de registrar
    window.addEventListener('load', () => {
        // Registra o arquivo sw.js como service worker
        // Ele vai cachear os arquivos para funcionar offline
        navigator.serviceWorker.register('/sw.js');
    });
}
