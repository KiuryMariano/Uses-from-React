# 🚀 Práticas com React Hooks e Componentização

Este repositório contém atividades práticas desenvolvidas com foco no uso de **React Hooks**, **componentização** e **ciclo de vida de componentes**. O projeto foi organizado em páginas separadas, cada uma abordando um hook ou conceito importante do React, com exemplos práticos e navegáveis.

## 📚 Conteúdo das Atividades

As atividades estão separadas em páginas específicas e demonstram os principais recursos da biblioteca React:

### ✅ useState
- Controle de estado de variáveis no componente.
- Exemplos: contador, array de estados, controle de inputs.

### ✅ useEffect
- Efeitos colaterais baseados no ciclo de vida do componente.
- Exemplos: requisições à API, timers, desmontagem e limpeza de recursos.

### ✅ useRef
- Manipulação direta do DOM e persistência de valores entre renderizações.
- Exemplos: foco automático em inputs, timers pausáveis.

### ✅ useMemo
- Otimização de cálculos pesados ou filtros com memorização de valores.
- Exemplos: listas filtradas e calculadoras simples.

### ✅ Ciclo de Vida com useEffect
- Simulação dos métodos `componentDidMount`, `componentWillUnmount` e `componentDidUpdate`.
- Monitoramento de montagem e desmontagem de componentes.
- Exercícios com cache de dados em localStorage.

### ✅ Componentização e Navegação
- Uso de rotas com `react-router-dom`.
- Um layout comum (`Layout.tsx`) com menu de navegação fixo entre os exercícios.
- Organização de arquivos por `pages/` e `components/`.

## 🛠️ Tecnologias Utilizadas

- React (com Vite)
- React Router DOM
- JavaScript / TypeScript
- Hooks API
- Estilização com CSS padrão (sem frameworks externos)

## 🧪 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Rode o projeto:
   ```bash
   npm run dev
   ```

4. Acesse:
   ```
   http://localhost:5173
   ```

## 📁 Organização

```
src/
├── components/     # Componentes reutilizáveis (hooks em ação)
├── pages/          # Cada página representa um conceito/hook
├── App.tsx         # Definição das rotas
├── Layout.tsx      # Layout base com menu de navegação
```

## 📌 Objetivo

Este projeto foi criado com foco no aprendizado prático dos principais conceitos do React moderno:

- Gerenciamento de estado (`useState`)
- Controle do ciclo de vida (`useEffect`)
- Manipulação do DOM (`useRef`)
- Otimização de performance (`useMemo`)
- Componentização e reutilização de lógica
- Navegação entre páginas com `react-router-dom`

## ✍️ Autor

Desenvolvido por Mariano.  
Sinta-se à vontade para contribuir, estudar ou adaptar este repositório para suas aulas ou portfólio pessoal.