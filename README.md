# Navega

Bem-vindo ao **Navega**, um projeto desenvolvido com Angular para gerenciar funcionalidades como login, contribuições, navegação dinâmica e muito mais. Este repositório contém o código-fonte, serviços, componentes e testes necessários para o funcionamento da aplicação.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Executando os Testes](#executando-os-testes)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## 📖 Sobre o Projeto

O **Navega** é uma aplicação web desenvolvida com Angular que oferece funcionalidades como:
- Gerenciamento de login e autenticação.
- Exibição de gráficos interativos.
- Interface responsiva utilizando Angular Material.
- Mock de serviços para facilitar o desenvolvimento e testes.

---

## ✅ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- **Node.js** (versão 16 ou superior)
- **Angular CLI** (versão 16 ou superior)
- **Git** (para clonar o repositório)

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/navega.git
   cd navega

2. Instale as dependências: Certifique-se de estar na raiz do projeto e execute:

    npm install

Inicie o servidor de desenvolvimento:

    npm run start

O servidor estará disponível em http://localhost:4200.

## 📜 Scripts Disponíveis
Aqui estão os principais scripts disponíveis no projeto:

    ng serve: Inicia o servidor de desenvolvimento.
    ng build: Compila o projeto para produção.
    ng test:jest: Executa os testes unitários usando Jest.
    ng lint: Verifica o código em busca de problemas de lint.


## 📂 Estrutura do Projeto
Abaixo está a estrutura principal do projeto:

src/
├── app/
│   ├── modules/
│   │   ├── form-login/          # Módulo de login
│   │   ├── contribution/        # Módulo de contribuições
│   │   ├── background-login/    # Módulo de background do login
│   ├── pages/
│   │   ├── login/               # Página de login
│   │   ├── home/                # Página inicial
│   ├── shared/
│   │   ├── services/            # Serviços compartilhados
│   │   ├── pipes/               # Pipes personalizados
│   ├── testing/
│   │   ├── mocks/               # Serviços mock para testes
│   ├── app-routing.module.ts    # Configuração de rotas
│   ├── app.component.ts         # Componente raiz
│   ├── app.module.ts            # Módulo principal
├── assets/
│   ├── images/                  # Imagens utilizadas no projeto
│   ├── style/                   # Estilos globais

## 🧪 Executando os Testes
Os testes unitários são escritos usando Jest. Para executar os testes, siga os passos abaixo:

1. Execute os testes:

    ng test:jest

2. Verifique os resultados:

    ng test --code-coverage

    O Jest exibirá os resultados dos testes no terminal.
    Certifique-se de que todos os testes passaram.

3. Cobertura de testes: Para gerar um relatório de cobertura de testes, execute:

    ng test --code-coverage

O relatório será gerado na pasta coverage/.

## 🛠️ Tecnologias Utilizadas

As principais tecnologias utilizadas no projeto incluem:

Angular: Framework principal para desenvolvimento da aplicação.
Angular Material: Biblioteca de componentes para criar uma interface moderna e responsiva.
RxJS: Para manipulação de streams de dados assíncronos.
Jest: Para testes unitários.
LESS: Pré-processador CSS para estilização.


## 🤝 Contribuição
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:

    git checkout -b minha-feature

3. Commit suas alterações:

    git commit -m "Adiciona minha nova feature"

4. Envie suas alterações:

    git push origin minha-feature

5. Abra um Pull Request.

## 📞 Contato
Se você tiver dúvidas ou sugestões, entre em contato:

Email: brunocosta524@hotmail.com
GitHub: [BrunoCosta-P](https://github.com/BrunoCosta-P)

Obrigado por usar o Navega! 🚀