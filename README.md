<h1 align="center"> Projeto PL-TypeScript </h1>

Repositório para a atv-pl-typescript da disciplina Programação Orientada a Objetos.

Professor: **[Doutor Gerson da Penha Neto](https://github.com/gerson-pn)**

## 📌 Lista I


**A lista I do projeto PL é do tipo cli (command-line interface), tem o objetivo de desenvolver o CRUD dos clientes e seus respectivos pets, produtos, serviços e listagens do consumos gerais dos clientes e produtos/serviços.**

Para rodar o programa deve usar os comandos:

```jsx
cd atvi
npm install
tsc
node out/app/main.js
```

## 📌 Lista II

**A lista II do projeto PL tem o objetivo de desenvolver interfaces gráficas, sem vínculo com o back-end, por enquanto. O front-end é desenvolvido em TypeScript utilizando classes.**

Para rodar o programa deve usar os comandos:

```jsx
cd atvii
npm install
npm start
```

## 📌 **Lista III**

**A lista III do projeto PL tem o objetivo de desenvolver interfaces gráficas, sem vínculo com o back-end, por enquanto. O front-end é desenvolvido em TypeScript utilizando funções.**

Para rodar o programa deve usar os comandos:

```jsx
cd atviii
npm install
npm start
```

## 📌Lista IV

**A lista IV do projeto PL tem o objetivo de fazer a integração da interface gráfica desenvolvida na lista III com um back-end.**

Para rodar o front-end do programa deve usar os comandos:

```jsx
cd atviv\atviv
npm install
npm start
```

Para rodar o back-end do programa deve usar os comandos:

```jsx
cd atviv\executavel
java -jar pl.jar
```

## 📌 Lista V

**A lista V do projeto PL tem o objetivo de finalizar o projeto iniciado na lista I, criando uma interface gráfica e integrando com um back-end.**

Para rodar o front-end do programa deve usar os comandos:

```jsx
cd atvv\frontend
npm install
npm start
```

Para rodar o back-end do programa deve usar os comandos:

Instale mysql e crie um banco de dados com nome "atvv". Na pasta backend\src\database, edite o arquivo chamado "data-source.ts" com as informações de seu banco.
Existe um arquivo com o nome "banco" que está em backend\banco, ele possui os inserts que você deve adicionar em seu banco de dados.

```jsx
cd atvv\backend
npm install
npm run typeorm -- -d ./src/database/data-source.ts migration:run
//Adicione os inserts no banco de dados
npm run dev:server
```