# 📋 Web Agenda

![Angular](https://img.shields.io/badge/Angular-20-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![HTML5](https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3)
![Build](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-lightgrey?style=for-the-badge)

---

# 📌 Sobre o projeto

O **Web Agenda** é uma aplicação **Front-end** desenvolvida em **Angular**, integrada a uma API REST para gerenciamento de usuários, categorias e tarefas.

O sistema permite autenticação de usuários, controle de acesso, organização de tarefas por categorias e uma dashboard centralizada, simulando uma aplicação real de produtividade e gerenciamento de atividades.

Este projeto foi desenvolvido para consolidar conhecimentos em Angular moderno, consumo de APIs REST e boas práticas na construção de aplicações Single Page Application (SPA).

---

# 🚀 Funcionalidades

## 👤 Autenticação

- Cadastro de usuários
- Login
- Controle de sessão
- Logout
- Proteção de rotas com AuthGuard

## 📁 Categorias

- Cadastro de categorias
- Consulta de categorias
- Atualização de categorias
- Exclusão de categorias

## ✅ Tarefas

- Cadastro de tarefas
- Consulta de tarefas
- Atualização de tarefas
- Exclusão de tarefas
- Organização por categoria e período

## 📊 Dashboard

- Navegação centralizada
- Interface responsiva
- Integração entre os módulos da aplicação

---

# 🧱 Tecnologias utilizadas

- Angular
- TypeScript
- HTML5
- CSS3
- Angular Signals
- Reactive Forms
- Angular Router
- AuthGuard
- HttpClient
- Consumo de API REST

---

# 🏗️ Estrutura do projeto

```
src/app
┣ guards
┣ pages
┃ ┣ autenticar-usuario
┃ ┣ cadastrar-usuario
┃ ┣ dashboard
┃ ┣ cadastrar-categoria
┃ ┣ consultar-categoria
┃ ┣ editar-categoria
┃ ┣ cadastrar-tarefa
┃ ┣ consultar-tarefa
┃ ┗ editar-tarefa
┣ app.routes.ts
┣ app.config.ts
┗ app.ts
```

---

# 🔗 Integração

A aplicação realiza comunicação com uma API REST responsável pelo gerenciamento de:

- Usuários
- Categorias
- Tarefas

Toda a comunicação é realizada utilizando **HttpClient**, consumindo endpoints REST para cadastro, autenticação, consultas, atualizações e exclusões.

---

# 📷 Interface

> Em breve serão adicionadas capturas de tela e GIFs demonstrando a aplicação em funcionamento.

---

# ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/beatrizlima-tech/web-agenda.git
```

### 2. Acesse a pasta do projeto

```bash
cd web-agenda
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute a aplicação

```bash
ng serve
```

A aplicação estará disponível em:

```
http://localhost:4200
```

> **Importante:** É necessário que a API responsável pelo gerenciamento da agenda esteja em execução para que todas as funcionalidades estejam disponíveis.

---

# 📊 Arquitetura

Angular SPA

↓

Angular Router

↓

Guards + Reactive Forms + Signals

↓

HttpClient

↓

API REST

---

# 📌 Melhorias futuras

- Implementar notificações (Toast)
- Adicionar tema Dark Mode
- Criar testes unitários
- Melhorar validações dos formulários
- Disponibilizar deploy da aplicação
- Adicionar capturas de tela e GIFs no README

---

# 👩‍💻 Autora

Desenvolvido por **Beatriz Lima**

- GitHub: https://github.com/beatrizlima-tech
- LinkedIn: https://www.linkedin.com/in/beatrizlima-tech
