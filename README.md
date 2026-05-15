# Lucas Lima | Portfólio

Portfólio pessoal desenvolvido com HTML5, CSS3 e JavaScript puro — sem frameworks, sem dependências de build. Design dark com tema neon azul e suporte a PWA.

**URL de produção:** <https://portfolio.limaatec.com.br>

---

## Estrutura de arquivos

```text
portfoliolucas/
├── index.html              # Estrutura e conteúdo da página
├── style.css               # Estilos e responsividade
├── script.js               # Interações e animações
├── manifest.json           # Configuração do PWA
├── sw.js                   # Service Worker (cache offline)
├── favicon.svg             # Ícone da aba (32×32) — <LV/>
├── icon-512.svg            # Ícone do app instalável (512×512)
├── og-image.svg            # Template para imagem Open Graph (1200×630)
├── portfolio.png           # Screenshot do portfólio — 600×338px (providenciar)
├── igreja-messianica.png   # Screenshot da landing page IMMB — 600×338px (providenciar)
├── curriculo.pdf           # Currículo para download (link no footer)
└── README.md               # Este arquivo
```

---

## Seções

| Seção | Descrição |
| --- | --- |
| **Hero** | Abertura com nome, efeito typewriter e botões de ação |
| **Sobre mim** | 3 parágrafos com personalidade — quem é, o que faz, o que o move |
| **Projetos** | Cards com screenshot, descrição, tags e links (ver ao vivo + GitHub) |
| **Contato** | 4 ícones clicáveis: WhatsApp, E-mail, LinkedIn, GitHub |

---

## Funcionalidades

### Animações

- **Hero:** elementos entram em sequência via CSS `@keyframes` com `animation-delay` crescente
- **Typewriter:** alterna entre três textos usando `setTimeout` recursivo
- **Scroll reveal:** seções entram com `translateY` + `opacity` via `IntersectionObserver` — executa apenas uma vez
- **Stagger interno:** cards de Projetos aparecem com 150ms de delay entre eles
- **Navbar ativa:** link do menu da seção visível recebe `.active` via `IntersectionObserver` com `rootMargin`

### UI

- Hover com borda neon em todos os cards
- Navbar fixa com `backdrop-filter: blur` e `scroll-behavior: smooth`
- Logo clicável que retorna ao hero
- Seta animada no hero que navega para `#sobre`
- Hamburger menu no mobile com animação ☰ → ✕ e botão CTA WhatsApp

### PWA

- `manifest.json` configurado com nome, cores e ícone
- Service Worker (`sw.js`) com cache offline
- Instalável na tela inicial via Chrome/Safari

### SEO / Compartilhamento

- `<meta name="description">` para buscadores
- Open Graph tags para prévia no WhatsApp e redes sociais
- Imagem OG: `og-perfil.png` na raiz (gerar a partir de `og-image.svg`)

---

## Tecnologias

- HTML5 semântico (`<main>`, `<header>`, `<section>`, `<article>`, `<address>`, `<footer>`)
- CSS3 com variáveis, Grid, Flexbox e `@keyframes`
- JavaScript ES6+ puro (`IntersectionObserver`, Service Worker)
- [Font Awesome 6.5](https://fontawesome.com) via CDN — ícones de contato e projetos
- Fontes: [Inter](https://fonts.google.com/specimen/Inter) + [Orbitron](https://fonts.google.com/specimen/Orbitron) via Google Fonts

---

## Deploy (Cloudflare)

1. Faça upload de todos os arquivos na raiz do domínio `portfolio.limaatec.com.br`
2. Adicione `portfolio.png` e `igreja-messianica.png` (600×338px cada)
3. Adicione `og-perfil.png` (1200×630px, gerado a partir de `og-image.svg`)
4. O Cloudflare já serve HTTPS — PWA e Service Worker funcionam na primeira visita
5. Após cada deploy: **Cloudflare → Caching → Purge Everything**

---

## Pendências

- [ ] Adicionar `portfolio.png` — screenshot do portfólio (600×338px)
- [ ] Adicionar `igreja-messianica.png` — screenshot da landing page (600×338px)
- [ ] Adicionar `og-perfil.png` — imagem para compartilhamento (1200×630px)
- [ ] Substituir `href="#"` no "Ver projeto" da Landing Page IMMB pelo link ao vivo

---

## Autor

**Lucas Lima** — Desenvolvedor Web

[LinkedIn](https://www.linkedin.com/in/lucasviniguimalima) · [GitHub](https://github.com/lucasviniguimalima-stack) · lucasviniguimalima@gmail.com
