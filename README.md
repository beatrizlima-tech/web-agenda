# 📋 Web Agenda

Sistema web para gerenciamento de tarefas e categorias com autenticação de usuários, desenvolvido em Angular.

A aplicação simula um ambiente real de produtividade, com controle de acesso, dashboard, organização por categorias e gerenciamento completo de tarefas.

---

## 🌐 Demonstração

Projeto front-end SPA (Single Page Application) integrado a uma API REST.

---

## ⚙️ Funcionalidades

### 👤 Autenticação
- Cadastro de usuário
- Login com autenticação
- Controle de sessão
- Proteção de rotas com AuthGuard
- Logout seguro

---

### 📁 Categorias
- Criar categorias personalizadas
- Listar categorias
- Editar categorias
- Excluir categorias

---

### ✅ Tarefas
- Criar tarefas com categoria
- Listar tarefas por data
- Atualizar tarefas
- Excluir tarefas
- Organização por status/período

---

### 📊 Dashboard
- Acesso centralizado às funcionalidades
- Navegação dinâmica entre módulos
- Interface intuitiva e responsiva

---

## 🧠 Arquitetura e Conceitos Aplicados

- Angular Standalone Components
- Lazy loading via rotas
- Route Guards (AuthGuard)
- Reactive Forms
- Angular Signals (estado reativo)
- HttpClient (consumo de API REST)
- Componentização por domínio
- Separação por módulos funcionais

---

## 🛠️ Tecnologias

### Frontend
- Angular 21
- TypeScript
- HTML5
- CSS3

### Arquitetura
- SPA (Single Page Application)
- REST API consumption
- Component-based architecture

---

## 📁 Estrutura do Projeto

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

## 🔐 Segurança

- Rotas protegidas por AuthGuard
- Validação de sessão do usuário
- Bloqueio de acesso sem autenticação

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

- Prática de Angular moderno
- Consumo de APIs REST
- Autenticação e segurança no front-end
- Estruturação de aplicações escaláveis
- Boas práticas de organização de código

---

## 👩‍💻 Desenvolvedora

**Beatriz Lima**

- GitHub: https://github.com/beatrizlima-tech
- LinkedIn: https://www.linkedin.com/in/beatriz-lima-tech
