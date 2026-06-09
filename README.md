# Meu Portfólio Profissional 🚀

Seja bem-vindo(a) ao repositório do meu portfólio pessoal! Este projeto foi desenvolvido com o objetivo de centralizar minha trajetória acadêmica em Engenharia de Software, exibir minhas principais competências técnicas, destacar os projetos que tenho construído e fornecer um canal direto de comunicação para recrutadores e desenvolvedores.

O portfólio foi planejado e codificado do zero, aplicando boas práticas de arquitetura de software front-end, design responsivo (Mobile-First) e semântica estrutural.

---

## 💻 Páginas do Projeto

O sistema está estruturado de forma modular em 4 páginas principais:

1. **Início (Index):** Uma seção de apresentação (Hero Section) objetiva e moderna, contendo uma introdução ao meu perfil de atuação e chamadas para ação (CTAs) rápidas para as seções de projetos e contato.
2. **Sobre Mim:** Detalhamento da minha jornada profissional, interesses na área de tecnologia e uma grade visual (Tech Grid) exibindo as tecnologias que domino e estou me aprofundando.
3. **Projetos:** Galeria estruturada utilizando **CSS Grid Layout** para exibir meus principais desenvolvimentos, repositórios e deploys, mantendo um alinhamento perfeito e adaptável a qualquer tamanho de tela.
4. **Contato:** Página com um formulário funcional estruturado para coleta de mensagens.

---

## 🛠️ Tecnologias e Conceitos Aplicados

Para a construção deste ecossistema, optei por utilizar tecnologias nativas da Web para demonstrar forte domínio nos fundamentos do desenvolvimento Front-End:

* **HTML5 Semântico:** Utilização de tags estruturais corretas (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) garantindo acessibilidade, melhor indexação em motores de busca (SEO) e organização limpa.
* **CSS3 Avançado (Flexbox & Grid):** * **Flexbox:** Utilizado para o alinhamento dinâmico do cabeçalho, da seção hero e do posicionamento vertical dos itens.
  * **CSS Grid:** Implementado na galeria de projetos para criar um layout robusto de cartões que se autoajusta conforme o espaço disponível.
  * **Design Responsivo & Transições:** Uso de `@media queries` para garantir uma experiência fluida no mobile, além de efeitos visuais sutis de hover nos botões e cartões usando `transition`.
* **JavaScript (Vanilla JS):**
  * **Menu Hambúrguer Responsivo:** Lógica desenvolvida para gerenciar dinamicamente a ativação/desativação de classes CSS (`classList.toggle`), permitindo que a barra de navegação deslize suavemente na tela do celular e transforme o ícone em "X".
  * **Validação Nativa de Formulário:** Interceptação do evento de envio (`submit`) através do DOM, uso de `preventDefault()` para controle do fluxo, tratamento de strings com `.trim()` para evitar campos vazios e reset automático após o envio bem-sucedido.

---

## 📱 Visualização Mobile (Menu Hambúrguer)

No desenvolvimento do layout responsivo para telas menores (até 768px), o menu tradicional se transforma automaticamente no padrão hambúrguer. A arquitetura funciona sob o seguinte fluxo de código:

1. O CSS esconde as opções padrão e renderiza as três barras verticais.
2. O JavaScript escuta o evento de clique no botão do menu e injeta a classe `.active`.
3. O CSS reage à classe ativa movendo a posição horizontal (`left: 0`) para fazer o menu deslizar de forma suave e oculta a barra central alterando a angulação das barras superior e inferior para desenhar o caractere de fechamento ("X").

---

## 📁 Estrutura de Pastas do Repositório

```text
├── index.html          # Página Inicial
├── sobre.html          # Página Sobre Mim
├── projetos.html       # Página de Projetos
├── contato.html        # Página de Contato
└── src/                # Arquivos de Recursos do Sistema
    ├── css/
    │   └── estilos.css # Arquivo de Estilização Centralizado
    ├── img/
    │   └── ...         # Imagens e Ícones do Portfólio
    └── js/
        └── script.js   # Arquivo JavaScript de Comportamento Global 

##🚀 Como Executar o Projeto Localmente

git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)

Desenvolvido com dedicação por Hugo Melo. 🧠⚡