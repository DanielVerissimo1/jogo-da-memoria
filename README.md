<h1 align="center">
<img alt="preview" src="./public/favicon.png" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 5%;">
  <p>Jogo da Memória</p>
  <p>
    <img src="https://img.shields.io/github/last-commit/DanielVerissimo1/jogo-da-memoria?style=for-the-badge&logo=git&logoColor=white&color=462878" alt="Last Commit">
    <img src="https://img.shields.io/github/languages/top/DanielVerissimo1/jogo-da-memoria?style=for-the-badge&color=462878" alt="Top Language">
    <img src="https://img.shields.io/github/languages/count/DanielVerissimo1/jogo-da-memoria?style=for-the-badge&color=462878" alt="Languages Count">
  </p>
</h1>

**Jogo da Memória** é uma aplicação web desenvolvida com **Next.js** e **React**, onde o objetivo é encontrar todos os pares de cartas no menor número de jogadas e no menor tempo possível.

---

## 📸 Visualização do Projeto

<p align="center">
  <img alt="preview" src="./public/thambinail.png" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 70%;">
</p>

---

## 🚀 Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 🃏 **Virar cartas** | Clique para revelar e encontrar os pares |
| ⏱️ **Cronômetro** | Tempo começa a contar na primeira jogada |
| 🔢 **Contador de jogadas** | Registra o número de tentativas |
| 🏆 **Modal de vitória** | Exibe estatísticas ao completar o jogo |
| 🔄 **Reiniciar** | Embaralha e reinicia o jogo a qualquer momento |

---

## 🛠️ Tecnologias Utilizadas

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</div>

---

## 📚 Conceitos Aplicados

- Componentes funcionais com TypeScript
- Hooks: `useState`, `useEffect`
- Lógica de embaralhamento e verificação de pares
- Cronômetro reativo com `setInterval`
- Estilização com Tailwind CSS v4

---

## ▶️ Como Rodar o Projeto

```bash
# Clone o repositório
git clone https://github.com/DanielVerissimo1/jogo-da-memoria

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📁 Arquitetura do Projeto

```
jogo-da-memoria/
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── MemoryGame.tsx    # Lógica principal do jogo
│       ├── GameBoard.tsx     # Grade de cartas
│       ├── GameStats.tsx     # Estatísticas (tempo, jogadas, pares)
│       ├── RestartButton.tsx # Botão de reinício
│       └── VictoryModal.tsx  # Modal de vitória
├── public/
│   └── favicon.png
└── README.md
```
