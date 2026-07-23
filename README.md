# 🍕 Freddy Fazbear's Pizza — Fan Website Project

![Freddy Fazbear's Pizza](assets/imagens/logos/logo.jpg)

> Um projeto fictício inspirado no universo de **Five Nights at Freddy's (FNaF)**, recriando um antigo portal corporativo da Freddy Fazbear's Pizza Entertainment.

---

# 📌 Sobre o projeto

**Freddy Fazbear's Pizza — Fan Website Project** é um projeto front-end inspirado na franquia **Five Nights at Freddy's**.

O objetivo é simular um antigo site empresarial de uma rede de pizzarias dos anos 90/2000, combinando:

- 🍕 identidade visual de restaurantes antigos;
- 📺 estética vintage;
- 📁 arquivos corporativos fictícios;
- 🤖 personagens animatrônicos;
- 🔒 sistemas internos;
- 📷 galerias e registros históricos;
- 🖥️ experiência de portal empresarial retrô.

O projeto foi desenvolvido como:

- estudo de desenvolvimento web;
- prática de organização de projetos;
- criação de interfaces temáticas;
- experimentação com HTML, CSS e JavaScript.

---

# ⚠️ Aviso

Este projeto é um **fan project sem fins comerciais**.

Ele:

✅ não é oficial;  
✅ não possui ligação com a franquia original;  
✅ não representa a empresa real;  
✅ foi criado apenas para estudo e entretenimento.

Todos os direitos relacionados a **Five Nights at Freddy's**, personagens e marcas pertencem aos seus respectivos proprietários.

---

# 🚀 Como executar

## Requisitos

Necessário:

- Visual Studio Code;
- Live Server ou outro servidor local;
- Navegador moderno.

---

## Instalação

Clone o projeto:

```bash
git clone URL_DO_REPOSITORIO
```

Abra a pasta:

```
Freddy-Fazbears-Pizza/
```

Ela deve conter:

```
index.html
assets/
components/
css/
js/
paginas/
```

---

## Executando

Abra:

```
index.html
```

No VS Code:

```
Botão direito
→ Open with Live Server
```

ou utilize:

```
Go Live
```

---

## ⚠️ Importante

Não abra diretamente:

```
file:///C:/projeto/index.html
```

O projeto utiliza carregamento dinâmico de componentes:

- header;
- navbar;
- sidebar;
- footer.

Eles são carregados através de JavaScript, portanto precisam de um servidor local.

---

# 🌐 Páginas disponíveis

## 🏠 Index

Página principal da Freddy Fazbear's Pizza.

Inclui:

- Banner principal;
- Apresentação da empresa;
- Serviços;
- Promoções;
- Cards de experiência;
- Pizzas;
- Animatrônicos;
- Posters;
- História.

---

# 🍕 Restaurante

## Menu

Sistema de cardápio da pizzaria.

Inclui:

- pizzas;
- bebidas;
- produtos especiais.

Dados carregados utilizando JSON.

---

## Pizzas

Catálogo de sabores:

- tradicionais;
- especiais;
- aniversariantes;
- sabores exclusivos.

---

## Pedidos

Página de pedidos fictícios.

Possui estrutura preparada para:

- envio de informações;
- armazenamento local;
- gerenciamento futuro.

---

# 🤖 Animatrônicos

Catálogo dos personagens da pizzaria:

Inclui:

- Freddy Fazbear;
- Bonnie;
- Chica;
- Foxy;
- Golden Freddy.

Com:

- imagens;
- informações;
- apresentações.

---

# 📜 História

Área dedicada aos registros históricos da empresa.

Inclui:

- fundação;
- expansão;
- eventos antigos;
- arquivos corporativos.

---

# 📰 Notícias

Sistema de comunicados fictícios:

- anúncios;
- atualizações;
- informações internas.

---

# 📁 Arquivos

Área de documentos internos.

Inclui:

- relatórios;
- registros;
- arquivos confidenciais;
- documentos históricos.

---

# 🔒 Segurança

Página baseada em protocolos internos.

Inclui:

- regras da pizzaria;
- segurança dos funcionários;
- monitoramento;
- procedimentos de emergência.

---

# 👥 Funcionários

Área administrativa fictícia da empresa.

Inclui:

- informações internas;
- setores;
- registros de funcionários.

---

# 📷 Galeria

Sistema de galeria visual.

Inclui:

- fotos dos animatrônicos;
- posters promocionais;
- imagens da pizzaria;
- arquivos históricos;
- registros de câmeras.

Recursos:

- filtros por categoria;
- visualizador de imagens;
- layout responsivo.

Categorias:

```
Animatronics
Posters
Pizzaria
Extras
```

---

# 📞 Contato

Página de comunicação fictícia.

Inclui:

- formulário;
- informações da empresa;
- integração com JavaScript.

---

# 🏗️ Estrutura do projeto

```
.
├── assets/
│   ├── audio/
│   ├── documentos/
│   │   └── relatorios/
│   ├── fonts/
│   └── imagens/
│
├── components/
│   ├── header.html
│   ├── navbar.html
│   ├── sidebar.html
│   ├── footer.html
│   │
│   ├── cards/
│   └── sections/
│
├── css/
│   ├── animations.css
│   ├── arquivos.css
│   ├── components.css
│   ├── fonts.css
│   ├── footer.css
│   ├── header.css
│   ├── navbar.css
│   ├── pages.css
│   ├── sidebar.css
│   ├── style.css
│   ├── vintage.css
│   │
│   └── pages/
│       ├── animatronics.css
│       ├── arquivos.css
│       ├── contato.css
│       ├── contratando.css
│       ├── eventos.css
│       ├── galeria.css
│       ├── historia.css
│       ├── index.css
│       ├── menu.css
│       ├── noticias.css
│       ├── pedidos.css
│       ├── pizzas.css
│       └── seguranca.css
│
├── data/
│   ├── menu.json
│   └── orders.json
│
├── js/
│   ├── core/
│   │   ├── main.js
│   │   ├── effects.js
│   │   ├── audio.js
│   │   └── sidebar.js
│   │
│   └── pages/
│       ├── arquivos.js
│       ├── contato.js
│       ├── contratando.js
│       ├── eventos.js
│       ├── galeria.js
│       ├── menu.js
│       ├── pedidos.js
│       └── seguranca.js
│
├── paginas/
│   ├── animatronics.html
│   ├── arquivos.html
│   ├── contato.html
│   ├── contratando.html
│   ├── eventos.html
│   ├── funcionarios.html
│   ├── galeria.html
│   ├── historia.html
│   ├── menu.html
│   ├── noticias.html
│   ├── pedidos.html
│   ├── pizzas.html
│   └── seguranca.html
│
├── index.html
├── LICENSE
└── README.md
```

---

# 🛠️ Tecnologias utilizadas

## Front-end

- HTML5
- CSS3
- JavaScript

---

## Recursos utilizados

- Componentização HTML;
- CSS modular;
- JavaScript separado por página;
- JSON externo;
- Fontes personalizadas;
- Animações CSS;
- Layout responsivo;
- Sistema de filtros;
- Visualizadores de imagem;
- Carregamento dinâmico.

---

# 🎨 Identidade visual

O projeto utiliza inspiração em:

- sites antigos de empresas;
- páginas promocionais dos anos 90;
- sistemas corporativos;
- documentos internos;
- publicidade vintage.

A intenção é criar a sensação de acessar um antigo sistema perdido da Fazbear Entertainment.

---

# 🖼️ Créditos

As imagens utilizadas podem incluir:

- materiais de referência;
- artes de fãs;
- imagens públicas;
- elementos inspirados na franquia.

Os direitos pertencem aos seus respectivos criadores.

Caso algum autor deseje:

- receber créditos;
- corrigir informações;
- solicitar remoção;

entre em contato.

---

# 🎯 Objetivos do projeto

Este projeto pratica:

- Desenvolvimento Front-End;
- Organização profissional de arquivos;
- Criação de interfaces temáticas;
- Responsividade;
- Componentização;
- Manipulação de DOM;
- Sistemas interativos;
- Estruturação de grandes projetos web.

---

# 📜 Licença

O código desenvolvido segue a licença presente neste repositório.

Personagens, marcas e imagens de terceiros permanecem protegidos por seus respectivos direitos autorais.

---

# ⭐ Considerações finais

A Freddy Fazbear's Pizza foi recriada como uma experiência web fictícia, simulando um antigo portal corporativo encontrado no tempo.

O objetivo é transformar uma simples página em uma experiência completa envolvendo:

🍕 restaurante;

🤖 animatrônicos;

📁 arquivos;

📷 memórias;

🔒 mistérios;

🖥️ tecnologia retrô.

Obrigado a todos que inspiraram este projeto. 🍕🤖
