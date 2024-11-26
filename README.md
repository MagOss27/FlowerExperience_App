# E-commerce de Floricultura - S.A da 2ª Fase

## Descrição

**Plant Experience** é um aplicativo desenvolvido para o gerenciamento de plantas, permitindo aos usuários cadastrar novas plantas, visualizar informações, e organizar em diferentes categorias. O projeto foi desenvolvido durante a **S.A** (Semana Acadêmica) do segundo semestre do curso técnico em **Desenvolvimento de Sistemas**.

Foi uma excelente oportunidade de aprender sobre o desenvolvimento tanto do **backend** quanto do **frontend**, utilizando tecnologias como **React Native**, **Express**, **MySQL**, e **Axios**.

## Tecnologias Utilizadas

### Backend

- **Express**: Framework Node.js utilizado para construir a API RESTful que comunica com o frontend.
- **MySQL**: Banco de dados relacional utilizado para armazenar os dados das plantas cadastradas.
- **Axios**: Biblioteca para realizar requisições HTTP entre o frontend e o backend.
  
### Frontend

- **React Native**: Framework para o desenvolvimento de aplicativos móveis para Android e iOS, usado para a construção do frontend do aplicativo.
- **Axios**: Usado para fazer as requisições HTTP do frontend para o backend.

## Funcionalidades

- **Cadastro de Plantas**: Usuários podem cadastrar novas plantas com informações como nome, categoria e cuidados necessários.
- **Edição de Plantas**: Possibilidade de editar informações sobre as plantas cadastradas.
- **Exclusão de Plantas**: Excluir plantas que não são mais necessárias.
- **Listagem de Plantas**: Visualizar todas as plantas cadastradas com filtros por categoria.
- **Armazenamento de Dados**: Dados de plantas são armazenados em um banco de dados MySQL.

## Como Rodar o Projeto

### 1. Clone o repositório

Clone o repositório do projeto:

    git clone https://github.com/MagOss27/FlowerExperience_App.git
    cd FlowerExperience_App

### 2. Backend (Express + MySQL)

### 2.1. Configuração
Navegue até a pasta do backend e instale as dependências:

    cd backend
    npm install

- **Configure o banco de dados MySQL conforme o arquivo .env (instruções de configuração no arquivo).

### 2.2. Rodando o servidor
Inicie o servidor Express:

    npm start

O backend estará rodando localmente, geralmente na porta 3000.

### 3. Frontend (React Native)
3.1. Instalação das dependências
Navegue até a pasta do frontend e instale as dependências:

    cd frontend
    npm install

### 3.2. Rodando o aplicativo
Para rodar o aplicativo, use o seguinte comando:

    npx react-native run-android   # Para Android
    npx react-native run-ios       # Para iOS

Certifique-se de ter o Android Studio ou o Xcode instalados para rodar o aplicativo no emulador.
