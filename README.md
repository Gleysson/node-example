# Node-Example
Este repositório apresenta um projeto básico da construção de uma APIRestFull utilizando Node.JS, Express, Sequelize e Mysql. O projeto permite a realização do CRUD envolvendo usuários assim como também, permite adicionar tarefas para cada usuário.

## Iniciando
Vamos lá, agora vamos iniciar os procedimentos para a execução do projeto.

### Pré-requisitos
Você precisa ter instalado no seu computador:

```
 - Node.JS and NPM
```

### Instalação 
Primeiramente instale as dependências do projeto com o comando:
```
npm install
```
### Configuração:
Edite o arquivo .env de acordo com as credênciais e configurações utilizadas pelo seu banco de dados e aplicação.

### Migrations:
Crie um banco de dados com as configurações inseridas no arquivo .env. Em seguida as tabelas podem ser criadas ao executar as migrations.
```
sequelize db:migrate
```

### Iniciando Aplicação
```
npm run dev
```

## Executando Testes
Foram criados alguns testes, apenas para exemplificar a execução dos testes. Eles serão realizados utilizando os módulos do Jest e SuperTest.

Para executar os testes basta realizar o comando a seguir:
```
npm run test
```
Note que existem configurações específicas para teste e desenvolvimento, o arquivo env.test precisa inicialmente apenas da variável DATABASE_DIALECT=sqlite. Utilizamos um banco de dados próprio para a execução dos testes.

## Rotas
## Rotas de Usuário
As rotas do recurso usuário permitem a realização do crud básico. Cada usuário deve conter um name, email e password. Não será possível remover um usuário se existir alguma tarefa relacionada a ele.

#### CREATE 
```
POST /api/v1/users
```
```
{
    name:"Gleysson Rocha",
    email:"gleyssongaspar@gmail.com",
    password:"123456"
}
```

#### READY 
```
GET /api/v1/users
```


#### UPDATE 
```
PUT /api/v1/users/1
```
```
{
    name:"Gleysson Luiz",
    email:"gleyssongaspar@gmail.com",
    password:"123456"
}
```

#### DELETE 
```
DELETE /api/v1/users/1
```



## Rotas de Tarefas
As rotas do recurso tarefas permitem a realização do crud básico. Cada tarefa deve conter um description e status. As tarefas são adicionadas para um usuário específico.

#### CREATE 
```
POST /api/v1/users/1/tasks
```
```
{
    description:"Estudar Matemática",
    status:"Realizado"
}
```

### READY 
```
GET /api/v1/users/1/tasks
```


#### UPDATE 
```
PUT /api/v1/users/1/tasks/1
```
```
{
    description:"Estudar Matemática e Física",
    status:"Em andamento"
}
```

#### DELETE 
```
DELETE /api/v1/users/1/tasks/1
```





