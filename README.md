# Lucas Lima | Portfólio

Portfólio pessoal desenvolvido com HTML5, CSS3 e JavaScript puro — sem frameworks, sem dependências de build. Design dark com tema neon azul e suporte a PWA.

**URL de produção:** https://portfolio.limaatec.com.br

---

## Estrutura de arquivos

```
portfoliolucas/
├── index.html       # Estrutura e conteúdo da página
├── style.css        # Estilos e responsividade
├── script.js        # Interações e animações
├── manifest.json    # Configuração do PWA
├── sw.js            # Service Worker (cache offline)
├── favicon.svg      # Ícone da aba (32×32) — <LV/>
├── icon-512.svg     # Ícone do app instalável (512×512)
├── curriculo.pdf    # Currículo para download
└── README.md        # Este arquivo
```

---

## Seções

| Seção | Descrição |
|---|---|
| **Hero** | Abertura com nome, efeito typewriter e botões de ação |
| **Sobre mim** | Apresentação pessoal |
| **Educação** | Formação técnica no IFMT (2023–2025) |
| **Habilidades** | Hard Skills e Soft Skills |
| **Projetos** | Cards com tags de tecnologia e links |
| **Contato** | WhatsApp, e-mail, LinkedIn e GitHub |
| **Currículo** | Download do PDF |

---

## Funcionalidades

### Animações
- **Hero:** elementos entram em sequência via CSS `@keyframes` com `animation-delay` crescente ao carregar a página
- **Typewriter:** alterna entre três textos no hero (`Desenvolvedor Web em ascensão`, `Entusiasta de Front-end`, `Apaixonado por Tecnologia`) usando `setTimeout` recursivo
- **Scroll reveal:** seções entram com `translateY` + `opacity` ao aparecerem no viewport, via `IntersectionObserver` — executa apenas uma vez por elemento
- **Stagger interno:** cards de Projetos, Habilidades e Educação aparecem com `150ms` de delay entre cada um ao entrarem na tela
- **Navbar ativa:** link do menu correspondente à seção visível recebe a classe `.active` via segundo `IntersectionObserver` com `rootMargin`

### UI
- Hover com borda neon nos cards de Projetos, Habilidades e Educação
- Navbar fixa com `backdrop-filter: blur` e `scroll-behavior: smooth` no `html`
- Logo clicável que retorna ao topo (`#hero`)
- Seta animada no hero que navega para `#sobre`

### PWA
- `manifest.json` configurado com nome, cores e ícone
- Service Worker (`sw.js`) com cache offline dos arquivos estáticos
- Instalável na tela inicial via Chrome/Safari em dispositivos móveis
- Requer HTTPS — funciona em produção no Cloudflare

### SEO / Compartilhamento
- `<meta name="description">` para buscadores
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) para prévia no WhatsApp e redes sociais
- Imagem OG: `og-perfil.png` — deve ser gerada e colocada na raiz do projeto

---

## Tecnologias

- HTML5 semântico (`<main>`, `<header>`, `<section>`, `<article>`, `<address>`, `<footer>`)
- CSS3 com variáveis (`--accent-blue`, `--bg-color`, etc.), Grid, Flexbox e `@keyframes`
- JavaScript ES6+ puro (`IntersectionObserver`, `querySelector`, `classList`, Service Worker)
- Fontes: [Inter](https://fonts.google.com/specimen/Inter) + [Orbitron](https://fonts.google.com/specimen/Orbitron) via Google Fonts

---

## Deploy (Cloudflare)

1. Faça upload de todos os arquivos na raiz do domínio `portfolio.limaatec.com.br`
2. Certifique-se de que `og-perfil.png` está na raiz (necessário para prévia no WhatsApp)
3. O Cloudflare já serve HTTPS por padrão — o PWA e o Service Worker funcionam na primeira visita

---

## Pendências

- [ ] Substituir `href="#"` nos botões "Ver Projeto" e "GitHub" dos cards pelos links reais
- [ ] Criar e adicionar `og-perfil.png` na raiz (1200×630px) para prévia no WhatsApp
- [ ] Descomentar o card de Engenharia de Software em `#educacao` quando aplicável

---

## Autor

**Lucas Lima** — Desenvolvedor Web  
[LinkedIn](https://www.linkedin.com/in/lucasviniguimalima) · [GitHub](https://github.com/lucasviniguimalima-stack) · lucasviniguimalima@gmail.com
