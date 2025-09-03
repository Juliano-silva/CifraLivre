# CifraLivre - Projeto React (JSX)

Este é o projeto CifraLivre, convertido para React utilizando JSX. Ele contém as três telas principais (Home, Adicionar URLs e Configurações) baseadas nos templates HTML e CSS fornecidos.

## Estrutura do Projeto

```
cifra-livre-react/
├── public/
├── src/
│   ├── components/
│   │   ├── AddUrls.jsx
│   │   ├── Home.jsx
│   │   ├── Layout.jsx
│   │   └── Settings.jsx
│   ├── style.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Telas

-   **Home:** Exibe as músicas e playlists.
-   **Adicionar URLs:** Permite adicionar novas URLs de música.
-   **Configurações:** Contém as opções de configuração do aplicativo.

## Como Executar

1.  **Instalar Dependências:**
    ```bash
    cd cifra-livre-react
    npm install
    ```

2.  **Modo de Desenvolvimento:**
    ```bash
    npm run dev
    ```
    O aplicativo estará disponível em `http://localhost:5173/`.

3.  **Build para Produção:**
    ```bash
    npm run build
    ```
    Os arquivos otimizados para produção serão gerados na pasta `dist/`.

## Tecnologias Utilizadas

-   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
-   **Vite:** Ferramenta de build rápida para projetos web.
-   **React Router DOM:** Para roteamento de SPA (Single Page Application).
-   **Bootstrap 5.3.0:** Framework CSS para estilização e responsividade.
-   **Font Awesome:** Biblioteca de ícones.

## Observações

Este projeto foi convertido de TypeScript (TSX) para JavaScript (JSX) conforme solicitado, removendo as tipagens explícitas e ajustando as configurações necessárias.

