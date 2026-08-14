# Portfólio — Antonio Cruvinel Caixeta

Portfólio estático desenvolvido com Astro e TypeScript. Os projetos são
armazenados em uma Content Collection e exibidos em cards e diálogos na
página inicial.

## Requisitos

- Node.js 22.12 ou superior
- npm 9.6.5 ou superior

## Comandos

| Comando | Ação |
| --- | --- |
| `npm install` | Instala as dependências |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run check` | Valida tipos, conteúdo e componentes Astro |
| `npm run build` | Valida e gera o site estático em `dist/` |
| `npm run preview` | Serve localmente o build de produção |

## Estrutura

```text
src/
├── assets/             Imagens e ícones compartilhados
├── components/         Componentes Astro com estilos e scripts locais
├── content/projects/   Conteúdo e imagens de cada projeto
├── layouts/            Estrutura HTML compartilhada
├── pages/              Página inicial e rotas estáticas
└── styles/global.css   Reset, tokens e estilos globais
```

## Adicionar um projeto

Crie uma pasta em `src/content/projects/` contendo um `index.md` e suas
imagens. O frontmatter deve seguir o schema definido em
`src/content.config.ts`, com título, slug, resumo, capa, imagens, links, tags,
ordem e estado de publicação.

O projeto publicado será incluído automaticamente na página inicial.
