# Desafio Docker: Nginx com Node.js e MySQL

Este repositório contém a solução para o desafio do módulo de Docker do curso **Full Cycle**.

O objetivo é criar uma aplicação onde o **Nginx** atua como proxy reverso para uma aplicação **Node.js**, que por sua vez se conecta a um banco de dados **MySQL** para cadastrar e listar nomes.

## 🚀 Como funciona

A aplicação é composta por 3 containers:

1.  **Nginx**: Servidor web que atua como proxy reverso, recebendo requisições na porta `8080` e encaminhando para o Node.js.
2.  **Node.js**: Aplicação que:
    * Recebe a requisição.
    * Insere um registro na tabela `people` do MySQL.
    * Retorna uma página HTML com a mensagem "Full Cycle Rocks!" e a lista de nomes cadastrados.
3.  **MySQL**: Banco de dados onde os nomes são persistidos.

## 🛠 Tecnologias Utilizadas

* **Docker** & **Docker Compose**
* **Node.js** (Express)
* **Nginx** (Proxy Reverso)
* **MySQL** (Banco de Dados)
* **Dockerize** (Para garantir a ordem de inicialização entre App e DB)

## 📋 Pré-requisitos

* Docker
* Docker Compose

## 🐳 Como rodar a aplicação

1.  Clone este repositório:
    ```bash
    git clone https://github.com/and3510/desafio-nginx-node-fullcycle.git
    cd desafio-nginx-node-fullcycle/
    ```

2.  Suba os containers utilizando o Docker Compose:
    ```bash
    docker-compose up -d --build
    ```

    > O parâmetro `--build` garante que as imagens sejam recriadas caso haja alterações no Dockerfile.

3.  Acesse a aplicação no navegador:
    
    [http://localhost:8080](http://localhost:8080)

4.  Ao atualizar a página (F5), você verá novos nomes sendo adicionados à lista, comprovando a conexão com o banco de dados e a persistência dos dados.

## 📂 Estrutura de Arquivos

* `docker-compose.yaml`: Orquestração dos containers.
* `node/`: Código fonte da aplicação Node.js e Dockerfile.
* `nginx/`: Configuração do proxy reverso e Dockerfile.
* `mysql/`: Scripts de inicialização do banco de dados (`init.sql`).

## ⚙️ Detalhes da Implementação

* **Dockerize**: Foi utilizado o utilitário `dockerize` no container do Node.js para garantir que a aplicação só inicie após o MySQL estar pronto para receber conexões (evitando erros de conexão logo no boot).
* **Volumes**: O diretório da aplicação Node foi mapeado como volume, permitindo ambiente de desenvolvimento (alterações no código refletem no container, embora seja necessário reiniciar o processo do node dependendo da configuração).
