# Testando CLI @nestjs/swagger

## 📄 Descrição  
Este projeto tem como objetivo testar a CLI do NestJS para gerar a documentação Swagger automaticamente. Ele é um exemplo básico de CRUD para gerenciar livros, utilizando NestJS como framework backend.  

## ✨ Principais Funcionalidades  
- Gerar documentação Swagger utilizando a CLI do `@nestjs/swagger`.  
- Implementar operações CRUD para livros:  
  - Criar, listar, atualizar e deletar livros.  
- Expor a documentação Swagger em uma rota acessível.  

---

## 🚀 Instalação  

### Pré-requisitos  
- Node.js v22 ou superior (necessário para suporte à versão 11 do NestJS).

### Passos para instalação  
1. Clone o repositório:  
   ```bash
   git clone <git@github.com:onoue9/nestjs-swagger.git>
   cd <nestjs-swagger>
   ```
2. Instale as dependências:  
   ```bash
   npm install
   ```
3.  Para gerar os metadados do swagger através da CLI precisa executar esse comando (ele ja inicia um servidor após a geração dos metadados)
    ```bash
    nest start -b swc --type-check
    ```
4. Acesse a aplicação em `http://localhost:3000`.  
5. Acesse a documentação Swagger em `http://localhost:3000/api`.

---

## 🛠️ Tecnologias Usadas  
- **NestJS**  
  - Framework modular para construção de aplicações server-side.  

---

## 📚 Endpoints da API  

Os endpoints implementados são os seguintes:  

### **GET** `/books`  
Retorna todos os livros.  

### **GET** `/books/:id`  
Retorna um livro específico pelo ID.  

### **POST** `/books`  
Cria um novo livro.  

### **PUT** `/books/update/:id`  
Atualiza um livro pelo ID.  

### **DELETE** `/books/delete/:id`  
Remove um livro pelo ID.  

---

## 📜 Licença  
Este projeto está sob a licença MIT.  

---

### 🌟 Observações
Este é um exemplo básico de aplicação com NestJS e Swagger. Pode ser expandido para incluir mais funcionalidades e ser adaptado a cenários mais complexos.